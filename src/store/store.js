import { configureStore } from '@reduxjs/toolkit';
import usuariosReducer from './usuariosSlice';

export const store = configureStore({
  reducer: {
    usuarios: usuariosReducer
  }
});