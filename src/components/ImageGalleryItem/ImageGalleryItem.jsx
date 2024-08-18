import React, { Component } from 'react';
import ImageModal from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    selectedImage: null,
  };
  handleOpenModal = () => {
    this.setState({ selectedImage: this.props.largeImageURL });
  };
  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };
  render() {
    const { selectedImage } = this.setState;
    const { webformatURL, tags } = this.props;
    return (
      <li onClick={this.handleOpenModal}>
        <img src={webformatURL} alt={tags} />
        <ImageModal
          modalClose={this.handleCloseModal}
          modalOpen={selectedImage !== null}
          image={selectedImage}
        />
      </li>
    );
  }
}
