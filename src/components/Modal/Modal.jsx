import Modal from 'react-modal';

const ImageModal = ({ modalClose, modalOpen, image }) => {
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

export default ImageModal;
