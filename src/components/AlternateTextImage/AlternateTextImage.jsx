import styles from './AlternateTextImage.module.css';

const AlternateTextImage = () => {
  return (
    <div>
      <section className={styles.section}>
        <article className={styles.section__article}>
          <h2>Título Sección 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            mollitia recusandae fugiat corrupti exercitationem officia amet
            beatae quisquam, quia facere officiis, dolores consectetur quibusdam
            modi corporis similique sint? Nam, sapiente.
          </p>
        </article>
        <article className={styles.section__article}>
          <img
            className={styles.section__img}
            src="https://placeimg.com/400/400/arch"
            alt="Arch"
          />
        </article>
      </section>

      <section className={`${styles.section} ${styles.section__reverse}`}>
        <article className={styles.section__article}>
          <h2>Título Sección 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            mollitia recusandae fugiat corrupti exercitationem officia amet
            beatae quisquam, quia facere officiis, dolores consectetur quibusdam
            modi corporis similique sint? Nam, sapiente.
          </p>
        </article>
        <article className={styles.section__article}>
          <img
            className={styles.section__img}
            src="https://placeimg.com/400/400/people"
            alt="People"
          />
        </article>
      </section>
    </div>
  );
};

export default AlternateTextImage;
