import { useEffect } from 'react';

const TextCenterImageCode = ({ code, setCode }) => {
  useEffect(() => {
    setCode(`
  ############
  #   HTML   #
  ############
  <article class="hero__image">
    <div>
      <h1>Texto centrado sobre imagen</h1>
    </div>
  </article>
  
  ###########
  #   CSS   #
  ###########
  .hero__image {
    background: url('https://placeimg.com/1000/720/animals');
    min-height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .hero__image div {
    min-height: inherit;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero__image h1 {
    color: #fff;
    font-size: 5vw; 
  }`);
  }, []);

  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default TextCenterImageCode;
