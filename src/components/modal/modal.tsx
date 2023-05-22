import { useState } from "react";
import Button from "../button/button";
import "./modal-style.css";

interface TModal {
  isOpen: boolean;
  closeModal: any;
}

const Modal = ({ isOpen, closeModal }: TModal) => {
  const [key, setKey] = useState("");

  const handleInput = (event: any) => {
    setKey(event.target.value);
  };

  const sendKey = () => {
    localStorage.setItem("key", JSON.stringify(key));
    closeModal();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h4>Digite sua chave da API</h4>
            <input
              type="password"
              className="input-modal"
              onChange={handleInput}
              value={key}
            />
            <div className="btn-login">
              <Button nameButton="Login" onClick={sendKey} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
