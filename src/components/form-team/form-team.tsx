import Button from "../button/button";
import Select from "../select/select";
import "./form-team-style.css";

interface TForm {
  showResult: any;
}

const FormTeam = ({ showResult }: TForm) => {
  const auxArray = ["Páis", "Liga", "Time", "Temporada"];
  return (
    <div className="container-form" onClick={showResult}>
      <label className="title-form">Escolha um time</label>
      <div className="form-team">
        {auxArray.map((arr, index) => (
          <Select array={[]} name={arr} key={index} />
        ))}
        <div className="btn-search">
          <Button nameButton="Buscar" />
        </div>
      </div>
    </div>
  );
};

export default FormTeam;
