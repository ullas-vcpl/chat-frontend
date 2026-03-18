//store
import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice';
const Store = configureStore({
  reducer: {
    loader: loaderReducer
  }
});
export default Store;