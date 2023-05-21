import "./header-style.css";
const link =
  "https://media.istockphoto.com/id/487649769/pt/vetorial/desenho-de-bola-de-futebol-americano.jpg?s=170x170&k=20&c=b9Ut5Bo_ms8_cvckd1WERDd-IPcOX7jSOzIzfbky61o=";
const Header = () => {
  return (
    <header>
      <div className="container-header">
        <img src={link} alt="logo" className="image-logo" />
        <label className="text-logo">Meu Time</label>
      </div>
    </header>
  );
};

export default Header;
