import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="px-10 bg-slate-900 flex items-center justify-between">
      <h1 className="text-3xl">Componentes</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre mi</Link>
          </li>

          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
