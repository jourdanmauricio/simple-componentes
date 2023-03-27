import { useEffect } from 'react';

const AlternateTextImageCode = ({ code, setCode }) => {
  useEffect(() => {
    setCode(`
  ############
  #   HTML   #
  ############
  <div>
    <section class="section">
      <article class="section__article">
        <h2>Título Sección 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          mollitia recusandae fugiat corrupti exercitationem officia amet
          beatae quisquam, quia facere officiis, dolores consectetur quibusdam
          modi corporis similique sint? Nam, sapiente.
        </p>
      </article>
      <article class="section__article">
        <img
          class="section__img"
          src="https://placeimg.com/400/400/arch"
          alt="Arch"
        />
      </article>
    </section>

    <section class="section section__reverse">
      <article class="section__article">
        <h2>Título Sección 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          mollitia recusandae fugiat corrupti exercitationem officia amet
          beatae quisquam, quia facere officiis, dolores consectetur quibusdam
          modi corporis similique sint? Nam, sapiente.
        </p>
      </article>
      <article class="section__article">
        <img
          class="section__img"
          src="https://placeimg.com/400/400/people"
          alt="People"
        />
      </article>
    </section>
  </div>
  
  ###########
  #   CSS   #
  ###########
  .section {
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
  }

  .section__article {
    padding: 20px 0;
    width: 50%;
    flex: 0 0 100%;
  }

  .section__article h2 {
    padding: 20px 0;
  }
  .section__img {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  
  @media (min-width: 768px) {
    .section {
      display: flex;
      align-items: center;
    }
    .section__article {
      flex: 0 0 50%;
    }
    .section__reverse {
      flex-direction: row-reverse;
    }
  }`);
  }, []);

  return (
    <div>
      <pre>{code}</pre>
    </div>
  );
};

export default AlternateTextImageCode;
