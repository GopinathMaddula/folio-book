import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Gopinath Maddula</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Case studies</a>
          <a href="#">Resume</a>
        </nav>
      </div>
    </header>
  );
}
