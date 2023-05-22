import Button from "../button/button";
import "./modal-style.css";

interface TModal {
  isOpen: boolean;
  closeModal: any;
}

const Modal = ({ isOpen, closeModal }: TModal) => {
  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h4>Digite sua chave da API</h4>
            <input type="password" className="input-modal" />
            <div className="btn-login">
              <Button nameButton="Login" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
