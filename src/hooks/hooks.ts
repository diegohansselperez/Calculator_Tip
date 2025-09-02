// src/app/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';

// Usa estos hooks tipados a lo largo de tu app en lugar de los de react-redux
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
