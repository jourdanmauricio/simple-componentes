import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  const handleClick = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return (
    <>
      <div className={show === true ? styles.loader : ''}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <button
        className="mx-auto block border border-solid border-slate-200 px-6 py-2"
        onClick={handleClick}
      >
        Ver
      </button>
    </>
  );
};

export default Loader;
