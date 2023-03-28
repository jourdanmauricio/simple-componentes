import { useEffect } from 'react';

const LoaderCode = ({ code, setCode }) => {
  useEffect(() => {
    setCode(`
  ############
  #   HTML   #
  ############
  <section class="section__loader">
    <div id="loader" class="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <button id="loader-btn" type="button" class="loader__button">Ver</button>
  </section>

  <script src="./myscripts.js"></script>

  ###########
  #   CSS   #
  ###########
  .section__loader {
    position: relative;
    width: 100%;
    height: 300px;
    border: 1px solid #cbd5e1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader__button {
    border: 1px solid #cbd5e1;
    color: #cbd5e1;
    background: transparent;
    padding: 4px 24px;
  }

  .loader__button:hover {
    cursor: pointer;
  }

  .loader {
    position: absolute;
    z-index: 15;
    top: 0;
    background: #cbd5e1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: loader 4s linear forwards;
  }

  .loader div {
    background: teal;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    transform: scale(0);
    animation: scaling 2s ease-in-out infinite;
  }

  .loader div:nth-child(1) {
    animation-delay: 0.2s;
  }

  .loader div:nth-child(2) {
    animation-delay: 0.4s;
  }

  .loader div:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes loader {
    0% {
      opacity: 1;
      visibility: visible;
    }
    95% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes scaling {
    0%,
    100% {
      transform: scale(0.2);
    }
    50% {
      transform: scale(1);
    }
  }

  ##########
  #   JS   #
  ##########
  const $loaderbtn = document.getElementById('loader-btn');
  const $loader = document.getElementById('loader');
  $loaderbtn.addEventListener('click', (e) => {
    $loader.classList.remove('loader');
    setTimeout(() => $loader.classList.add('loader'), 1);
  });`);
  }, []);

  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default LoaderCode;
