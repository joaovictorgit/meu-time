import Footer from "../../components/footer/footer";
import GridItem from "../../components/grid-item/grid-item";
import Header from "../../components/header/header";
import InfoTeam from "../../components/info-team/info-team";

import "./team-style.css";

const Team = () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="team">
      <Header />
      <div className="container-body-team">
        <InfoTeam team={{}} />
        <div className="scrollable-container">
          <div className="content-statics">
            <GridItem arrayAux={array} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
