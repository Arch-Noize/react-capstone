import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  monsters: [],
  monsterStats: [],
  isLoading: true,
};

export const getAllMonsters = createAsyncThunk('monster/getAllMonsters', async () => {
  const res = await axios.get('https://api.open5e.com/v1/monsters/');
  const data = res.data.results;
  return data.map((item) => ({
    name: item.name,
    slug: item.slug,
  }));
});

export const getMonsterByBook = createAsyncThunk('monster/getMonsterByBook', async () => {
  const res = await axios.get('https://api.open5e.com/v1/monsters/?document__slug=wotc-srd');
  const data = res.data.results;
  return data.map((item) => ({
    name: item.name,
    slug: item.slug,
  }));
});

export const getMonster = createAsyncThunk('monster/getMonster', async () => {
  const res = await axios.get('https://api.open5e.com/v1/monsters/a-mi-kuk');
  const { data } = res.data;
  console.log(res.data);
  return data.map((item) => ({
    name: item.name,
  }));
});

const monsterSlice = createSlice({
  name: 'monsters',
  initialState,
  reducers: {
  },
  extraReducers: {
    // Getting All monsters, display in Home by default
    [getAllMonsters.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllMonsters.fulfilled]: (state, action) => {
      state.monsters = action.payload;
      state.isLoading = false;
    },
    [getAllMonsters.rejected]: (state) => {
      state.isLoading = false;
    },
    // Getting monsters by book, display in Home after selecting filter
    [getMonsterByBook.pending]: (state) => {
      state.isLoading = true;
    },
    [getMonsterByBook.fulfilled]: (state, action) => {
      state.mosnters = action.payload;
      state.isLoading = false;
    },
    [getMonsterByBook.rejected]: (state) => {
      state.isLoading = false;
    },
    // Getting info of single Monster, display on respective details page
    [getMonster.pending]: (state) => {
      state.isLoading = true;
    },
    [getMonster.fulfilled]: (state, action) => {
      state.monsterStats = action.payload;
      state.isLoading = false;
    },
    [getMonster.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default monsterSlice.reducer;
