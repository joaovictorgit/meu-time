import Button from "../button/button";
import Selects from "../select/select";
import "./form-team-style.css";

interface TForm {
  showResult: any;
}

const FormTeam = ({ showResult }: TForm) => {
  return (
    <div className="container-form">
      <label
        className="title-form"
        onClick={() => console.log(localStorage.getItem("key"))}
      >
        Escolha um time
      </label>
      <div className="form-team">
        <Selects />
        <div className="btn-search">
          <Button nameButton="Buscar" onClick={showResult} />
        </div>
      </div>
    </div>
  );
};

export default FormTeam;
