import { useState } from "react";
import "./select-style.css";

interface TSelect {
  array: [];
  name: string;
}

const Select = ({ array, name }: TSelect) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select">
      <label className="text-title-select">{name}</label>
      <div className="select-container">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Selecione uma opção</option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
        <span className="select-arrow"></span>
      </div>
    </div>
  );
};

export default Select;
