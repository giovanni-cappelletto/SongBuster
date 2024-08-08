import logo from "../assets/logo.png";
import Button from "./Button.jsx";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <Button
        text="Aggiungi"
        theme="light"
        onClick={() => (window.location.href = "/add")}
      >
        <span className="material-symbols-outlined">add</span>
      </Button>
    </header>
  );
};

export default Header;
