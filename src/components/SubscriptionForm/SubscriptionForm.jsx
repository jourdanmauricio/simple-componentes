import { useState } from 'react';
import styles from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const [error, setError] = useState({
    name: null,
    email: null,
  });

  const [action, setAction] = useState('FORM');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const pattern = e.target.pattern || e.target.dataset.pattern;
    const textError = e.target.title;

    setForm({
      ...form,
      [name]: value,
    });

    if (!e.target.required && !pattern) {
      setError({
        ...error,
        [name]: null,
      });
      return;
    }

    if (e.target.required && value === '') {
      setError({
        ...error,
        [name]: 'Requerido',
      });
      return;
    }

    let regex = new RegExp(pattern);
    if (regex.exec(value) === null) {
      setError({
        ...error,
        [name]: textError,
      });
    } else {
      setError({
        ...error,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    let formError = false;
    let fieldsErrors = Object.assign({}, error);
    const fields = ['name', 'email'];
    for (let field of fields) {
      if (form[field].trim() === '') {
        formError = true;
        fieldsErrors = {
          ...fieldsErrors,
          [field]: 'Requerido',
        };
      }
      if (error[field]) {
        formError = true;
      }
    }

    if (formError === true) {
      setError(fieldsErrors);
      e.preventDefault();
      return;
    }

    setAction('SENDING');
    setTimeout(() => {
      setAction('SENT');
      setForm({
        name: '',
        email: '',
      });
    }, 3000);
  };

  return (
    <section className={styles.section}>
      <p className={styles.form__paragraph}>
        ¡Suscríbete a nuestro boletín informativo y mantente actualizado con las
        últimas noticias, promociones y eventos! Recibirás contenido exclusivo
        directamente en tu bandeja de entrada, incluyendo artículos
        interesantes, consejos y ofertas especiales.{' '}
      </p>
      <p className={styles.section__paragraph}>
        Para suscribirte, simplemente ingresa tu dirección de correo electrónico
        en el campo provisto y haz clic en el botón Suscribir. No te pierdas la
        oportunidad de ser parte de nuestra comunidad y obtener acceso a
        contenido exclusivo. ¡Suscríbete hoy mismo!
      </p>

      <h3 className={styles.section__title}>
        <strong>Suscríbite a nuestro newsletter</strong>
      </h3>

      <div
        className={`${styles.form__spinner} ${styles.spinner} ${
          action === 'SENDING' ? '' : styles.none
        }`}
      ></div>

      <div
        className={`${styles.form__response} ${
          action === 'SENT' ? '' : styles.none
        }`}
      >
        <p>Gracias por suscribirte!!!</p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className={styles.section__form}
        target="_blank"
        action="https://formsubmit.co/jourdanmauricio@gmail.com"
        method="POST"
      >
        <div className={styles.form__group}>
          <input
            type="text"
            className={styles.form__input}
            id="name"
            name="name"
            title="Ingresa solo letras"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
            placeholder=" "
            value={form.name}
            required
            onChange={handleChange}
          />
          <label htmlFor="name" className={styles.form__label}>
            Nombre
          </label>
          <span
            className={`${styles.form__error} ${
              error.name ? styles.error : ''
            }`}
          >
            {error.name}
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            className={styles.form__input}
            id="email"
            name="email"
            title="Ingresa un email válido"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            placeholder=" "
            value={form.email}
            required
            onChange={handleChange}
          />
          <label htmlFor="email" className={styles.form__label}>
            Email address
          </label>
          <span
            className={`${styles.form__error} ${
              error.email ? styles.error : ''
            }`}
          >
            {error.email}
          </span>
        </div>

        <button
          type="submit"
          className={styles.form__button}
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Suscribir
        </button>
      </form>
    </section>
  );
};

export default SubscriptionForm;
