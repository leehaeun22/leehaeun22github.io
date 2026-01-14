export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #eee",
        marginTop: "40px",
        padding: "20px",
        textAlign: "center",
        color: "#777",
      }}
    >
      © {new Date().getFullYear()} Portfolio
    </footer>
  );
}
