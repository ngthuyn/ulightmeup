"use client";

const themes = [
  "aurora",
  "blue",
  "purple",
  "dark",
];

export default function ThemePicker() {
  const changeTheme = (theme: string) => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex gap-3">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => changeTheme(theme)}
          className="h-8 w-8 rounded-full border border-white"
        >
          {theme === "aurora" && "🟠"}
          {theme === "blue" && "🔵"}
          {theme === "purple" && "🟣"}
          {theme === "dark" && "⚫"}
        </button>
      ))}
    </div>
  );
}