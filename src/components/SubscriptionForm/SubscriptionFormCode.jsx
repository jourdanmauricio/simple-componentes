import { useEffect } from 'react';

const SubscriptionFormCode = ({ code, setCode }) => {
  useEffect(() => {
    setCode(`
  ############
  #   HTML   #
  ############
  <section class="section">
    <p class="form__paragraph">
      ¡Suscríbete a nuestro boletín informativo y mantente actualizado con las
      últimas noticias, promociones y eventos! Recibirás contenido exclusivo
      directamente en tu bandeja de entrada, incluyendo artículos
      interesantes, consejos y ofertas especiales.
    </p>
    <p class="section__paragraph">
      Para suscribirte, simplemente ingresa tu dirección de correo electrónico
      en el campo provisto y haz clic en el botón Suscribir. No te pierdas la
      oportunidad de ser parte de nuestra comunidad y obtener acceso a
      contenido exclusivo. ¡Suscríbete hoy mismo!
    </p>
    <h3 class="section__title">
      <strong>Suscríbite a nuestro newsletter</strong>
    </h3>

    <div class="form__spinner spinner none"></div>

    <div class="form__response none">
      <p>Gracias por suscribirte!!!</p>
    </div>

    <form
      novalidate
      class="section__form"
      target="_blank"
      action="https://formsubmit.co/jourdanmauricio@gmail.com"
      method="POST"
    >
      <div class="form__group">
        <input
          type="text"
          class="form__input"
          name="name"
          value=""
          placeholder=" "
          title="Ingresa solo letras y espacios"
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
          required
        />
        <label htmlFor="name" class="form__label"> Nombre </label>
      </div>

      <div class="form__group">
        <input
          type="text"
          class="form__input"
          name="email"
          placeholder=" "
          value=""
          title="Ingresa un email válido"
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
          required
        />
        <label htmlFor="email" class="form__label"> Email address </label>
      </div>

      <button
        type="submit"
        class="form__button"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Suscribir
      </button>
    </form>
  </section>
  <script src="./myscripts.js"></script>

  ###########
  #   CSS   #
  ###########    
  .section {
    text-align: center;
  }

  .section__paragraph {
    padding: 10px;
  }

  .section__title {
    margin-top: 40px;
  }

  .section__form {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .form__group {
    position: relative;
  }

  .form__input {
    display: block;
    min-height: auto;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: transparent;
    padding: 0.32rem 0.75rem;
    line-height: 1.6;
    color: #e2e8f0;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .form__input [required]:valid {
    background: green;
  }

  .form__input [required]:invalid {
    background: red;
  }

  .form__input:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: none;
  }

  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown) ~ .form__label {
    transform: translateY(-0.7rem) scale(1);
  }

  .form__error {
    position: absolute;
    left: 0.75rem;
    font-size: 0.75rem;
    color: #ff0000;
    transition: all 800ms ease;
    display: none;
  }

  .error {
    display: block;
    animation: show-message 1s 1 normal 0s ease-out both;
  }

  .none {
    display: none;
  }

  .form__label {
    position: absolute;
    color: #cbd5e1;
    z-index: -1;
    top: -0.5em;
    left: 0.75rem;
    margin-bottom: 0;
    transform: translateY(1rem) scale(0.9);
    transform-origin: 0 0;
    transition-duration: 300ms;
  }

  .form__button {
    background: transparent;
    display: inline-block;
    border-radius: 0.25rem;
    border: 2px solid #e2e8f0;
    padding: 0.5rem 1.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.5;
    color: #e2e8f0;
    opacity: 1;
    transition: 0.3s;
  }

  .form__button:hover {
    opacity: 0.6;
    background-color: #3e8e41;
  }

  .form__spinner {
    margin-top: 40px;
  }

  .form__response {
    margin-top: 40px;
    font-size: 1.5rem;
  }
  /* SPINNER */
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
  }

  @keyframes show-message {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    .section__form {
      flex-direction: row;
      gap: 16px;
    }
  }
  
  ###########
  #   JS    #
  ###########      
  const $form = document.querySelector('.section__form');
  const $inputs = document.querySelectorAll('.form__input[required]');
  const $name = document.getElementById('name');
  const $email = document.getElementById('email');
  
  $inputs.forEach((input) => {
    const $span = document.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add('form__error');
    input.insertAdjacentElement('afterend', $span);
  });
  
  document.addEventListener('keyup', (e) => {
    if (e.target.matches('.form__input[required]')) {
      let $input = e.target;
      let pattern = $input.pattern || $input.dataset.pattern;
    
      if (pattern && $input.value !== '') {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? document.getElementById($input.name).classList.add('error')
          : document.getElementById($input.name).classList.remove('error');
      }
    
      if (!pattern) {
        return !$input.value === ''
          ? document.getElementById($input.name).classList.add('error')
          : document.getElementById($input.name).classList.remove('error');
      }
    }
  });
  
  document.addEventListener('submit', (e) => {
    const formData = new FormData($form);
    const data = Object.fromEntries(formData);
  
    let error = false;
    for (const property in data) {
      if (data[property].trim().length == 0) {
        error = true;
        const $element = document.getElementById(property);
        $element.textContent = 'Requerido';
        $element.classList.add('error');
      }
    }
  
    if (error === true) {
      e.preventDefault();
      return;
    }
  
    const $loader = document.querySelector('.spinner');
    const $response = document.querySelector('.form__response');
  
    $loader.classList.remove('none');
  
    setTimeout(() => {
      $loader.classList.add('none');
      $response.classList.remove('none');
      $form.reset();
      setTimeout(() => $response.classList.add('none'), 3000);
    }, 3000);
  });`);
  }, []);
  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default SubscriptionFormCode;
