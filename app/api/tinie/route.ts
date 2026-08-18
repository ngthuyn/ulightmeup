import { NextRequest, NextResponse } from "next/server";

const SHEET_ID =
  "1RENXXMly3ySVSvbL4Tk5j5VgrvIXCpU-7Mf6gtoX52U";

const SHEET_GID = "688070981";

const SHEET_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

/*
=========================================================
TYPE
=========================================================
*/

type Tinie = {
  id: number;
  name: string;
  message: string;
  fanarts: string[];
  isPrivate: boolean;
};

/*
=========================================================
CSV PARSER
=========================================================
*/

function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];

  let row: string[] = [];
  let cell = "";
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    const next = csv[i + 1];

    // Escaped quote ""
    if (
      char === '"' &&
      insideQuotes &&
      next === '"'
    ) {
      cell += '"';
      i++;
      continue;
    }

    // Open / close quoted cell
    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    // Column separator
    if (
      char === "," &&
      !insideQuotes
    ) {
      row.push(cell);
      cell = "";
      continue;
    }

    // Row separator
    if (
      (char === "\n" ||
        char === "\r") &&
      !insideQuotes
    ) {
      if (
        char === "\r" &&
        next === "\n"
      ) {
        i++;
      }

      row.push(cell);
      cell = "";

      if (
        row.some(
          (item) =>
            item.trim() !== ""
        )
      ) {
        rows.push(row);
      }

      row = [];

      continue;
    }

    cell += char;
  }

  // Last cell
  if (
    cell ||
    row.length > 0
  ) {
    row.push(cell);

    if (
      row.some(
        (item) =>
          item.trim() !== ""
      )
    ) {
      rows.push(row);
    }
  }

  return rows;
}

/*
=========================================================
NORMALIZE
=========================================================
*/

function normalize(
  text: string
): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(/đ/g, "d")
    .replace(/\s+/g, " ")
    .trim();
}

/*
=========================================================
GET GOOGLE DRIVE FILE ID
=========================================================
*/

function getDriveFileId(
  url: string
): string | null {
  if (!url) {
    return null;
  }

  const value =
    url.trim();

  /*
   * https://drive.google.com/file/d/FILE_ID/view
   */

  let match =
    value.match(
      /drive\.google\.com\/file\/d\/([^/?#]+)/
    );

  if (match) {
    return match[1];
  }

  /*
   * https://drive.google.com/open?id=FILE_ID
   */

  match =
    value.match(
      /drive\.google\.com\/open\?id=([^&#]+)/
    );

  if (match) {
    return match[1];
  }

  /*
   * https://drive.google.com/uc?id=FILE_ID
   */

  match =
    value.match(
      /drive\.google\.com\/uc\?(?:[^#]*&)?id=([^&#]+)/
    );

  if (match) {
    return match[1];
  }

  /*
   * https://drive.google.com/thumbnail?id=FILE_ID
   */

  match =
    value.match(
      /drive\.google\.com\/thumbnail\?[^#]*id=([^&#]+)/
    );

  if (match) {
    return match[1];
  }

  /*
   * https://drive.usercontent.google.com/download?id=FILE_ID
   */

  match =
    value.match(
      /drive\.usercontent\.google\.com\/download\?[^#]*id=([^&#]+)/
    );

  if (match) {
    return match[1];
  }

  /*
   * Google Forms có thể trả thẳng File ID
   */

  if (
    /^[a-zA-Z0-9_-]{20,}$/.test(
      value
    )
  ) {
    return value;
  }

  return null;
}

/*
=========================================================
CONVERT GOOGLE DRIVE URL
=========================================================
*/

function convertDriveUrl(
  url: string
): string {
  const fileId =
    getDriveFileId(url);

  if (!fileId) {
    return url.trim();
  }

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;
}

/*
=========================================================
EXTRACT FAN ART
=========================================================
*/

function extractFanarts(
  value: string
): string[] {
  if (!value) {
    return [];
  }

  const urls =
    value.match(
      /https?:\/\/[^\s,]+/g
    );

  if (!urls) {
    return [];
  }

  const converted =
    urls
      .map((url) =>
        convertDriveUrl(url)
      )
      .filter(Boolean);

  return [
    ...new Set(converted),
  ];
}

/*
=========================================================
FIND COLUMN
=========================================================
*/

function findColumn(
  headers: string[],
  keyword: string
): number {
  const target =
    normalize(keyword);

  return headers.findIndex(
    (header) =>
      normalize(header).includes(
        target
      )
  );
}

/*
=========================================================
LOAD GOOGLE SHEET
=========================================================
*/

async function loadSheetRows(): Promise<
  string[][]
> {
  const response =
    await fetch(
      SHEET_URL,
      {
        cache: "no-store",
      }
    );

  if (!response.ok) {
    throw new Error(
      `Google Sheet returned ${response.status}`
    );
  }

  const csv =
    await response.text();

  return parseCSV(csv);
}

/*
=========================================================
GET COLUMN INDEXES
=========================================================
*/

function getColumnIndexes(
  headers: string[]
) {
  return {
    timestampIndex:
      findColumn(
        headers,
        "Dấu thời gian"
      ),

    nameIndex:
      findColumn(
        headers,
        "Tên / Nickname của bạn"
      ),

    messageIndex:
      findColumn(
        headers,
        "Lời nhắn nhủ / Thư gửi lighT"
      ),

    fanartIndex:
      findColumn(
        headers,
        "Bạn có tranh vẽ tay"
      ),

    publicIndex:
      findColumn(
        headers,
        "Dù dự án bí mật này là gì"
      ),

    /*
     * PASSWORD CHUNG
     *
     * Header trong Sheet:
     *
     * pass
     */
    passwordIndex:
      findColumn(
        headers,
        "pass"
      ),
  };
}

/*
=========================================================
GET SHARED PASSWORD FROM SHEET
=========================================================

Cột:

pass
123456789

Chỉ cần MỘT ô có password.

Password này dùng chung cho toàn bộ
thư private.

KHÔNG trả password về frontend.
=========================================================
*/

function getSharedPassword(
  rows: string[][]
): string {
  if (rows.length < 2) {
    return "";
  }

  const headers =
    rows[0];

  const passwordIndex =
    findColumn(
      headers,
      "pass"
    );

  if (
    passwordIndex < 0
  ) {
    console.warn(
      'Không tìm thấy cột "pass" trong Google Sheet.'
    );

    return "";
  }

  /*
   * Tìm password đầu tiên
   * có giá trị.
   */

  for (
    let i = 1;
    i < rows.length;
    i++
  ) {
    const password =
      (
        rows[i][
          passwordIndex
        ] ?? ""
      ).trim();

    if (password) {
      return password;
    }
  }

  return "";
}

/*
=========================================================
BUILD ALL LETTERS
=========================================================
*/

function buildLetters(
  rows: string[][]
): Tinie[] {
  if (rows.length < 2) {
    return [];
  }

  const headers =
    rows[0];

  const {
    nameIndex,
    messageIndex,
    fanartIndex,
    publicIndex,
  } =
    getColumnIndexes(
      headers
    );

  const data: Tinie[] =
    [];

  rows
    .slice(1)
    .forEach(
      (
        row,
        index
      ) => {
        /*
        ==============================
        NAME
        ==============================
        */

        const name =
          nameIndex >= 0
            ? (
                row[
                  nameIndex
                ] ?? ""
              ).trim()
            : "";

        /*
        ==============================
        MESSAGE
        ==============================
        */

        const message =
          messageIndex >= 0
            ? (
                row[
                  messageIndex
                ] ?? ""
              ).trim()
            : "";

        /*
        ==============================
        FAN ART
        ==============================
        */

        const fanartRaw =
          fanartIndex >= 0
            ? (
                row[
                  fanartIndex
                ] ?? ""
              ).trim()
            : "";

        const fanarts =
          extractFanarts(
            fanartRaw
          );

        /*
        ==============================
        PUBLIC / PRIVATE
        ==============================
        */

        const publicAnswer =
          publicIndex >= 0
            ? (
                row[
                  publicIndex
                ] ?? ""
              ).trim()
            : "";

        /*
         * "Được nhaa"
         * → PUBLIC
         *
         * "Mình chỉ muốn mỗi Tin đọc/xem thui"
         * → PRIVATE
         */

        const isPrivate =
          normalize(
            publicAnswer
          ) !==
          "duoc nhaa";

        /*
        ==============================
        EMPTY ROW
        ==============================
        */

        if (
          !name &&
          !message &&
          fanarts.length === 0
        ) {
          return;
        }

        /*
        ==============================
        ADD
        ==============================
        */

        data.push({
          id:
            index + 1,

          name,

          message,

          fanarts,

          isPrivate,
        });
      }
    );

  return data;
}

/*
=========================================================
PUBLIC RESPONSE
=========================================================

PRIVATE:

KHÔNG gửi:
- message
- fanarts
- password

Chỉ gửi:
- id
- name
- isPrivate
=========================================================
*/

function createPublicResponse(
  letters: Tinie[]
) {
  return letters.map(
    (letter) => {
      if (
        letter.isPrivate
      ) {
        return {
          id:
            letter.id,

          name:
            letter.name,

          message: "",

          fanarts: [],

          isPrivate: true,
        };
      }

      return {
        id:
          letter.id,

        name:
          letter.name,

        message:
          letter.message,

        fanarts:
          letter.fanarts,

        isPrivate: false,
      };
    }
  );
}

/*
=========================================================
GET
=========================================================

/api/tinie

PUBLIC:
→ full message + fan art

PRIVATE:
→ chỉ metadata
=========================================================
*/

export async function GET() {
  try {
    const rows =
      await loadSheetRows();

    const letters =
      buildLetters(rows);

    const publicData =
      createPublicResponse(
        letters
      );

    return NextResponse.json(
      publicData,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "TINIE GET ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Không thể lấy dữ liệu Google Sheet",
      },
      {
        status: 500,
      }
    );
  }
}

/*
=========================================================
POST
=========================================================

Mở thư private.

Frontend gửi:

{
  id: 123,
  password: "123456789"
}

API:

1. Đọc Google Sheet
2. Lấy password từ cột "pass"
3. So sánh password
4. Đúng → trả thư
5. Sai → 401
=========================================================
*/

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const id =
      Number(body?.id);

    const password =
      String(
        body?.password ?? ""
      );

    /*
    ==============================
    VALIDATE ID
    ==============================
    */

    if (
      !Number.isInteger(id)
    ) {
      return NextResponse.json(
        {
          error:
            "ID thư không hợp lệ",
        },
        {
          status: 400,
        }
      );
    }

    /*
    ==============================
    LOAD SHEET
    ==============================
    */

    const rows =
      await loadSheetRows();

    /*
    ==============================
    GET SHARED PASSWORD
    ==============================
    */

    const sharedPassword =
      getSharedPassword(
        rows
      );

    console.log(
      "TINIE PASSWORD:",
      sharedPassword
        ? "FOUND"
        : "NOT FOUND"
    );

    /*
    ==============================
    CHECK PASSWORD
    ==============================
    */

    if (
      !sharedPassword ||
      password !==
        sharedPassword
    ) {
      return NextResponse.json(
        {
          error:
            "Mật khẩu không đúng",
        },
        {
          status: 401,
        }
      );
    }

    /*
    ==============================
    BUILD LETTERS
    ==============================
    */

    const letters =
      buildLetters(rows);

    /*
    ==============================
    FIND LETTER
    ==============================
    */

    const letter =
      letters.find(
        (item) =>
          item.id === id
      );

    if (!letter) {
      return NextResponse.json(
        {
          error:
            "Không tìm thấy lá thư",
        },
        {
          status: 404,
        }
      );
    }

    /*
    ==============================
    SECURITY

    Password đúng mới tới đây.
    ==============================
    */

    return NextResponse.json(
      {
        id:
          letter.id,

        name:
          letter.name,

        message:
          letter.message,

        fanarts:
          letter.fanarts,

        isPrivate:
          letter.isPrivate,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "TINIE POST ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Không thể mở lá thư",
      },
      {
        status: 500,
      }
    );
  }
}