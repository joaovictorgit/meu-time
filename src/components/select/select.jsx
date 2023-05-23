import { useEffect, useState } from "react";
import "./select-style.css";

const Selects = () => {
  const [selectedOptionCountry, setSelectedOptionCountry] = useState("");
  const [selectedOptionLeague, setSelectedOptionLeague] = useState("");
  const [selectedOptionTeam, setSelectedOptionTeam] = useState("");
  const [selectedOptionSeason, setSelectedOptionSeason] = useState("");

  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [seasons, setSeason] = useState([]);

  const getCountries = async () => {
    await fetch("https://v3.football.api-sports.io/countries", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "76d889ec873b71f992ad6039832cf83f",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setCountries(result.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLeagues = async () => {
    await fetch("https://v3.football.api-sports.io/leagues", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "76d889ec873b71f992ad6039832cf83f",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setLeagues(result.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTeams = async () => {
    await fetch("https://v3.football.api-sports.io/teams/countries", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "76d889ec873b71f992ad6039832cf83f",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTeams(result.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSeasons = async () => {
    await fetch(`https://v3.football.api-sports.io/leagues/seasons`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "76d889ec873b71f992ad6039832cf83f",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setSeason(result.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCountries();
    getLeagues();
    getTeams();
    getSeasons();
  }, []);

  return (
    <div className="selects">
      <div className="select">
        <label
          className="text-title-select"
          onClick={() => console.log(selectedOptionCountry)}
        >
          País
        </label>
        <div className="select-container">
          <select
            value={selectedOptionCountry}
            onChange={(event) => {
              setSelectedOptionCountry(event.target.value);
            }}
          >
            <option>Selecione uma opção</option>
            {countries.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>

      <div className="select">
        <label className="text-title-select">Liga</label>
        <div className="select-container">
          <select
            disabled={!selectedOptionCountry}
            value={selectedOptionLeague}
            onChange={(event) => setSelectedOptionLeague(event.target.value)}
          >
            <option value="">Selecione uma opção</option>
            {leagues.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>

      <div className="select">
        <label className="text-title-select">Time</label>
        <div className="select-container">
          <select
            disabled={!selectedOptionLeague}
            value={selectedOptionTeam}
            onChange={(event) => setSelectedOptionTeam(event.target.value)}
          >
            <option value="">Selecione uma opção</option>
            {teams.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>

      <div className="select">
        <label className="text-title-select">Temporada</label>
        <div className="select-container">
          <select
            disabled={!selectedOptionTeam}
            value={selectedOptionSeason}
            onChange={(event) => setSelectedOptionSeason(event.target.value)}
          >
            <option value="">Selecione uma opção</option>
            {seasons.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Selects;
