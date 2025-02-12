import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  otp: null,
  user: null,
  token:null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;

    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    },
  },
});

export const {setUser, clearUser, setOTP,setToken} = authSlice.actions;

export default authSlice.reducer;
