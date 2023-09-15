import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from './monster/monsterSlice';

export default configureStore({
  reducer: {
    monster: monsterReducer,
  },
});
