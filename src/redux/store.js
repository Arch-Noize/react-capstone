import { configureStore } from '@reduxjs/toolkit';
import classReducer from './class/classSlice';

export default configureStore({
  reducer: {
    classes: classReducer,
  },
});
