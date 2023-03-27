import { useEffect } from 'react';

const ParallaxCode = ({ code, setCode }) => {
  useEffect(() => {
    setCode(`
  ############
  #   HTML   #
  ############
  import styles from './Parallax.module.css';
  <div className={styles.bg__attachment} />;
  
  ###########
  #   CSS   #
  ###########
  .bg-attachment {
    background-image: url('/assets/images/parallax.webp');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50vh;
    background-attachment: fixed;
  }`);
  }, []);

  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default ParallaxCode;
