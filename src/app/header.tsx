import Link from "next/link";

export default async function Header({
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
      }}
    >
      <nav>
        <Link href="/" style={{ marginRight: "15px" }}>
          Home
        </Link>
        <Link href="/form" style={{ marginRight: "15px" }}>
          Form
        </Link>
        <Link href="/animation" style={{ marginRight: "15px" }}>
          Animation
        </Link>
        <Link href="/about" style={{ marginRight: "15px" }}>
          About
        </Link>
        <button onClick={toggleDarkMode}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </nav>
    </header>
  );
}
