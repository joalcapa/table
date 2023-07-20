import { createSlice, current } from '@reduxjs/toolkit';
import action from '../actions/users';

const initialState = {
  users: [],
  loading: false,
  error: null,
  expiryTime: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.restoreUsers, (state) => {
        state.users = current(state).users.map((user) => {
            return { ...user, isDeleted: false };
        });
      })
      .addCase(action.deleteUser, (state, action) => {
          state.users = current(state).users.map((user) => {
              if (user.id === action.payload.id) {
                  return { ...user, isDeleted: true };
              }

              return { ...user };
          });
      })
      .addCase(action.getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(action.getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.expiryTime = new Date().toLocaleString();
      })
      .addCase(action.getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default usersSlice.reducer;