import Footer from "../../components/footer/footer";
import Graph from "../../components/graph/graph";
import GridItem from "../../components/grid-item/grid-item";
import Header from "../../components/header/header";
import InfoTeam from "../../components/info-team/info-team";
import Table from "../../components/table/table";

import "./team-style.css";

const Team = () => {
  const array = [
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 28,
      birth: {},
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
  ];
  const team = {
    id: 33,
    name: "Manchester United",
    code: "MUN",
    country: "England",
    founded: 1878,
    national: false,
    logo: "https://media.api-sports.io/football/teams/33.png",
  };
  return (
    <div className="team">
      <Header />
      <div className="container-body-team">
        <InfoTeam team={team} />
        <div className="scrollable-container">
          <div className="content-statics">
            <GridItem arrayAux={array} />
            <Table />
            <Graph />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
