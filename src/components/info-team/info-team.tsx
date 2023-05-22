import "./info-team-style.css";

interface TInfo {
  team: any;
}

const InfoTeam = ({ team }: TInfo) => {
  return (
    <div className="info-team">
      <img src={team.logo} alt="team" className="img-team" />
      <label className="text-team">{team.name}</label>
      <div className="static-formation">
        <label>Formação: {"4-4-2"}</label>
      </div>
    </div>
  );
};

export default InfoTeam;
