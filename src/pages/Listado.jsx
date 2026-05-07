import { useEffect, useState } from 'react';
import { obtenerUsuarios } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUsuarios } from '../store/usuariosSlice';

function Listado() {
  const dispatch = useDispatch();
  const usuarios = useSelector(
  (state) => state.usuarios.usuarios);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await obtenerUsuarios();
        dispatch(setUsuarios(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // 🔍 FILTRO
  const usuariosFiltrados = usuarios.filter((user) =>
    user.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <h2>Cargando usuarios...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Listado de Usuarios</h1>
      <p>Total de usuarios: {usuarios.length}</p>

      {/* 🔍 INPUT BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: '15px', padding: '5px' }}
      />

      {/* ❌ SI NO HAY RESULTADOS */}
      {usuariosFiltrados.length === 0 && (
        <p>No se encontraron usuarios</p>
      )}

      <ul>
        {usuariosFiltrados.map((user) => (
          <li
            key={user.id}
            className="card"
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listado;