import { createAction } from '@reduxjs/toolkit';
import types from '../types/settings';

export const setDarkTable = createAction(types.SET_DARK_TABLE);

export default {
    setDarkTable,
};