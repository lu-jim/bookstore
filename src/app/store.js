import { configureStore } from '@reduxjs/toolkit';
import cmsReducer from '../features/cms/cmsSlice';

const store = configureStore({
  reducer: {
    cms: cmsReducer,
  },
});

export default store;
