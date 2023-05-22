import { useEffect, useState } from "react";
import "./select-style.css";

const Selects = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [res, setRes] = useState({});
  const [countries, setCountries] = useState([]);
  const [seasons, setSeason] = useState(["2010", "2011"]);

  const getCountries = async () => {
    await fetch("https://v3.football.api-sports.io/countries", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "fe99f16ffa9da481a6eb2e7fbee1a65e",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const changeOptions = async () => {
    try {
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    changeOptions();
  }, []);

  return (
    <div className="selects">
      <div className="select">
        <label
          className="text-title-select"
          onClick={() => {
            getCountries();
          }}
        >
          País
        </label>
        <div className="select-container">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Selecione uma opção</option>
            {countries.map((item, index) => (
              <option value="opc" key={index}>
                {item.name}
              </option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>

      <div className="select">
        <label className="text-title-select">Liga</label>
        <div className="select-container">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Selecione uma opção</option>
            {countries.map((item, index) => (
              <option value="opc" key={index}>
                {item.name}
              </option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>

      <div className="select">
        <label className="text-title-select">Time</label>
        <div className="select-container">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Selecione uma opção</option>
            {countries.map((item, index) => (
              <option value="opc" key={index}>
                {item.name}
              </option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>

      <div className="select">
        <label className="text-title-select">Temporada</label>
        <div className="select-container">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Selecione uma opção</option>
            {seasons.map((item, index) => (
              <option value="opc" key={index}>
                {item}
              </option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Selects;
