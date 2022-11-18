import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/Filter/slice';
import cartReducer from './slices/Cart/slice';
import pizzaReducer from './slices/Pizza/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: { filterReducer, cartReducer, pizzaReducer },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
