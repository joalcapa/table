import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import types from '../types/users';
import service from '../../services/users';
import { random } from '../../utils';

export const getUsers = createAsyncThunk(
  types.GET_USERS,
  async () => {
    try {
      const response = await service.getUsers();

      return response
        .results
        .map((result) => ({
            id: `${result.id['name'] || random()}-${result.id['value'] || random()}`,
            firstName: result.name.first,
            lastName: result.name.last,
            photoUrl: result.picture.thumbnail,
            country: result.location.country,
            isDeleted: false,
        }));
    } catch (error) {
      throw error;
    }
  }
);

export const deleteUser = createAction(types.DELETE_USER);

export const restoreUsers = createAction(types.RESTORE_USERS);

export default {
    getUsers,
    deleteUser,
    restoreUsers,
};