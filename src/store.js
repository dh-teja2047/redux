import { configureStore } from '@reduxjs/toolkit';
import { reducerlist } from './pages/userProfileSlice';

export const store = configureStore({
  reducer: reducerlist, // Directly use the reducer list
});
