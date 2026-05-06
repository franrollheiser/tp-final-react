import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/listado">Listado</Link>
    </nav>
  );
}

export default Header;