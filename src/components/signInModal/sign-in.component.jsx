import React from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SignIn from "../SignIn/sign.component";
import Grid from "@material-ui/core/Grid";
import "./sign-in.styles.scss";

const customStyles = {
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const SignInModal = ({ open }) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Button onClick={openModal} variant="contained" color="secondary">
        Ingresar
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <SignIn />
      </Modal>
    </React.Fragment>
  );
};

export default SignInModal;
