import styles from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
