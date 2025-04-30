import Link from "next/link";

export default function Header({
  toggleDarkMode,
  darkMode,
}: {
  toggleDarkMode: () => void;
  darkMode: boolean;
}) {
  return (
    <header
      style={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav>
        <Link href="/" style={{ marginRight: "15px" }}>
          Home
        </Link>
        <a href="/form" style={{ marginRight: "15px" }}>
          Form
        </a>
        <a href="/about">About</a>
      </nav>
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}
