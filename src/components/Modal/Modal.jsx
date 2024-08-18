import Modal from 'react-modal';

export const ImageModal = ({ modalClose, modalOpen, image }) => {
  return (
    <Modal
      onRequestClose={modalClose}
      isOpen={modalOpen}
      contentLabel="Image Modal"
    >
      <div>
        <img src={image} alt="" />
      </div>
    </Modal>
  );
};

export default Modal;
