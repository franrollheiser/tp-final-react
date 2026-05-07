import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usuarios: []
};

const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    setUsuarios: (state, action) => {
      state.usuarios = action.payload;
    }
  }
});

export const { setUsuarios } = usuariosSlice.actions;

export default usuariosSlice.reducer;