import "./button-style.css";

interface TButton {
  nameButton: string;
  onClick: any;
}

const Button = ({ nameButton, onClick }: TButton) => {
  return (
    <button className="button" onClick={onClick}>
      {nameButton}
    </button>
  );
};

export default Button;
