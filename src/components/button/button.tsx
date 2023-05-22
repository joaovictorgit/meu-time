import "./button-style.css";

interface TButton {
  nameButton: string;
}

const Button = ({ nameButton }: TButton) => {
  return <button className="button">{nameButton}</button>;
};

export default Button;
