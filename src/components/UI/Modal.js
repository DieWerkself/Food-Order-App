import s from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  const closeButtonHandler = () => {
    props.closeModal(false);
  };
  return <div className={s.backdrop} onClick={closeButtonHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={s.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
