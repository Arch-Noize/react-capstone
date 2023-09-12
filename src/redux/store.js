import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from './class/monsterSlice';

export default configureStore({
  reducer: {
    monster: monsterReducer,
  },
});
