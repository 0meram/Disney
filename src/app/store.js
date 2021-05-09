import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/MovieSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
});
