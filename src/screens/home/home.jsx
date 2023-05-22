import { useState } from "react";
import Footer from "../../components/footer/footer";
import FormTeam from "../../components/form-team/form-team";
import Header from "../../components/header/header";

import "./home-style.css";
import Modal from "../../components/modal/modal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let key = JSON.parse(localStorage.getItem("key"));
  const navigator = useNavigate();
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showResult = () => {
    if (key === null) {
      openModal();
    } else {
      navigator("/team");
    }
  };
  return (
    <div className="home">
      <Header />
      <FormTeam showResult={showResult} />
      <div className="modal-container">
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
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
