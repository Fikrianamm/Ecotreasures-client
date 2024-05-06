import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api, { getErrorMessage } from '../../utils/api';

const initialState:boolean = true;

export const asyncPreloadProcess = createAsyncThunk('isPreload/asyncPreloadProcess', async (_, { dispatch }) => {
  try {
    const { data } = await api.getAuthUser();
    if (data.user === undefined) {
      throw new Error('Anda belum login');
    } else {
      dispatch(setAuthUser(user));
    }
  } catch (error) {
    const message = getErrorMessage(error);
    throw new Error(message);
  }
});

const isPreloadSlice = createSlice({
  name: 'isPreload',
  initialState,
  reducers: {
    setIsPreload: (_state, action) => action.payload,
  },
});

export default isPreloadSlice.reducer;
