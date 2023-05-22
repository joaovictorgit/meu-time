import "./info-team-style.css";

interface TInfo {
  team: any;
}

const InfoTeam = ({ team }: TInfo) => {
  return (
    <div className="info-team">
      <img
        src="https://media.istockphoto.com/id/487649769/pt/vetorial/desenho-de-bola-de-futebol-americano.jpg?s=170x170&k=20&c=b9Ut5Bo_ms8_cvckd1WERDd-IPcOX7jSOzIzfbky61o="
        alt="team"
        className="img-team"
      />
      <label className="text-team">Time</label>
    </div>
  );
};

export default InfoTeam;
