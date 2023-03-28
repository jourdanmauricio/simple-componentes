import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-10">
      Recopilación de componentes desarrollados en html y css. Otros también
      incluyen javascript !!.
      <ul className="mt-4">
        {/* <li className="hover:underline list-disc">
          <Link to="/components/modal-html">Ventana Modal. HTML / CSS</Link>
        </li> */}
        <li className="hover:underline list-disc">
          <Link to="/components/parallax">Parallax. HTML / CSS</Link>
        </li>
        <li className="hover:underline list-disc">
          <Link to="/components/spinner">Spinner. HTML / CSS</Link>
        </li>
        <li className="hover:underline list-disc">
          <Link to="/components/alternate-text-image">
            Texto e imágenes alternados. HTML / CSS
          </Link>
        </li>
        <li className="hover:underline list-disc">
          <Link to="/components/text-center-image">
            Texto centrado sobre imágen. HTML / CSS
          </Link>
        </li>

        <li className="hover:underline list-disc">
          <Link to="/components/subscription-form">
            Formulario suscribete. HTML / CSS / JS
          </Link>
        </li>

        <li className="hover:underline list-disc">
          <Link to="/components/loader">Loader. HTML / CSS</Link>
        </li>

        <li className="hover:underline list-disc">
          <Link to="/components/fly">Mover componente. HTML / CSS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
