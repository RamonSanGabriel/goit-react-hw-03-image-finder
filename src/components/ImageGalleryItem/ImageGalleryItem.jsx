import React, { Component } from 'react';

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
      </li>
    );
  }
}
