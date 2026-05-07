import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Bienvenido 👋</h2>
      <h1>TP Final React</h1>

      <p style={{ fontSize: '18px' }}>
        Aplicación desarrollada con React, React Router,
        Redux Toolkit y consumo de API.
      </p>

      <Link to="/listado">
        <button
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#222',
            color: 'white',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Ver usuarios
        </button>
      </Link>
    </div>
  );
}

export default Home;