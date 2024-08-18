export const ImageGallery = ({ photos }) => {
  return (
    <ul>{photos.map(({ id, webformatURL, largeImageURL, tags }) => ({}))}</ul>
  );
};
