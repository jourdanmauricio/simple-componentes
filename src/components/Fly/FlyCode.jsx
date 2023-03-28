import { useEffect } from 'react';

const FlyCode = ({ code, setCode }) => {
  useEffect(() => {
    setCode(`
  ############
  #   HTML   #
  ############
  <section class="section__fly">
    <p class="fly__paragraph">Texto ingresando</p>
  </section>
  
  ###########
  #   CSS   #
  ###########
  .section__fly {
    width: 100%;
    height: 300px;
    border: 1px solid #cbd5e1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .fly__paragraph {
    background: #cbd5e1;
    color: #000;
    padding: 50px;
    animation: 1s fly 0.5s ease-in-out;
  }
  
  @keyframes fly {
    0% {
      transform: translateX(-800px);
    }
    100% {
      transform: translateX(0px);
    }
  }`);
  }, []);

  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default FlyCode;
