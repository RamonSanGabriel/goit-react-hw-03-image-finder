import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ photos }) => {
  console.log(photos);
  return (
    <ul className={styles.imageGallery}>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        // console.log(photos);
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
