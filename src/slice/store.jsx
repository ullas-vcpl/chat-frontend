//store
import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice';
import loginReducer from './loginSlice';
const Store = configureStore({
  reducer: {
    loader: loaderReducer,
    login: loginReducer
  }
});
export default Store;