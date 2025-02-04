import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    defTheme: null,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.defTheme = action.payload;
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
