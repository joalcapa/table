import { createSlice } from '@reduxjs/toolkit';
import action from '../actions/settings';

const initialState = {
  isDarkTable: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.setDarkTable, (state, action) => {
        state.isDarkTable = action.payload;
      })
  },
});

export default settingsSlice.reducer;