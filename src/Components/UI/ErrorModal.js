import React from "react";
import "./ErrorModal.css";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom"
const Backdrop=(props)=>{
    return (
        <div className="backdrop" onClick={props.onConfirm} />
    )
}
const ModalOveyLay=(props)=>{
    return(
        <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    )
}
const ErrorModal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop 
            onConfirm={props.onConfirm}
        />,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOveyLay
            title={props.title} message={props.message} onConfirm={props.onConfirm}
        />,document.getElementById('backdrop-root'))}
    </>
  );
};

export default ErrorModal;
