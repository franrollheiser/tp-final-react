export const obtenerUsuarios = async () => {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!respuesta.ok) {
    throw new Error('Error al obtener usuarios');
  }

  const data = await respuesta.json();
  return data;
};