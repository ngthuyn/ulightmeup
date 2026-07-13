"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({
  images,
}: {
  images: string[];
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {images.map((image, i) => (
          <img
            key={image}
            src={image}
            onClick={() => setIndex(i)}
            className="
              aspect-square
              rounded-2xl
              object-cover
              cursor-pointer
              transition
              duration-300
              hover:scale-[1.03]
            "
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}