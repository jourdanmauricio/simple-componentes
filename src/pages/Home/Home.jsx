import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-10">
      Recopilación de componentes desarrollados en html y css. Otros también
      incluyen javascript.
      <ul className="mt-4">
        <li className="hover:underline list-disc">
          <Link to="/components/modal-html">Ventana Modal. HTML / CSS</Link>
          <Link to="/components/spinner">Spinner. HTML / CSS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
