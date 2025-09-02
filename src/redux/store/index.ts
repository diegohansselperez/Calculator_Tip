// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../reducer/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    // Aquí puedes agregar más reducers si tu aplicación crece
  },
});

// Inferir los tipos `RootState` y `AppDispatch` del store mismo
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
