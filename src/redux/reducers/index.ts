import {combineReducers} from '@reduxjs/toolkit';
import {getApi} from '../actions/practiceAction';
import {authSlice, themeSlice} from '../slices';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  themeMode: themeSlice.reducer,
  [getApi.reducerPath]: getApi.reducer,
});

export {rootReducer};
