import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { uuid } from 'uuidv4';

const initialState = {
  classes: [],
  isLoading: true,
};

export const getClasses = createAsyncThunk('classes/getClasses', async () => {
  const res = await axios.get('https://api.open5e.com/v1/classes/');
  const data = res.data.results;
  return data.map((classes) => ({
    name: classes.name,
    arch: classes.archetypes,
    id: uuid(),
  }));
});

const classSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getClasses.pending]: (state) => {
      state.isLoading = true;
    },
    [getClasses.fulfilled]: (state, action) => {
      state.classes = action.payload;
      state.isLoading = false;
    },
    [getClasses.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default classSlice.reducer;
