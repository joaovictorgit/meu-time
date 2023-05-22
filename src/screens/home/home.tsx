import { useState } from "react";
import Footer from "../../components/footer/footer";
import FormTeam from "../../components/form-team/form-team";
import Header from "../../components/header/header";

import "./home-style.css";

const Home = () => {
  const [result, setResult] = useState("");
  const showResult = () => {
    setResult("Foi");
  };
  return (
    <div className="home">
      <Header />
      <FormTeam showResult={showResult} />
      {result !== "" ? (
        <div className="result-search">
          <label>Foi</label>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
