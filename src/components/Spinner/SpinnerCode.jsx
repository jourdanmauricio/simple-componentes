import { useEffect } from 'react';

const SpinnerCode = ({ code, setCode }) => {
  useEffect(() => {
    setCode(`
  ############
  #   HTML   #
  ############
  import styles from './Spinner.module.css';
  <div className={styles.spinner}></div>;
  
  ###########
  #   CSS   #
  ###########
  .spinner {
    width: 5vw;
    height: 5vw;
    margin-left: auto;
    margin-right: auto;
    border: 0.5vw solid rgba(255, 255, 255, 0.7);
    border-top-color: #09f;
    border-radius: 50%;
    animation: spinner 1s ease-out infinite;
    /* animation: spinner 1s linear infinite; */
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`);
  }, []);

  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default SpinnerCode;
