export default function Footer() {
  return (
    <footer
      style={{
        padding: "10px",
        borderTop: "1px solid #ccc",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}
