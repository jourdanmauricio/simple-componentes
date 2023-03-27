const SpinnerCode = ({ code, setCode }) => {
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
    border: 0.5vw solid rgba(0, 0, 0, 0.1);
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
  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default SpinnerCode;
