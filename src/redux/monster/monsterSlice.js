import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  monsters: [],
  monsterStats: [],
  isLoading: true,
};

export const getAllMonsters = createAsyncThunk('monster/getAllMonsters', async () => {
  const res = await axios.get('https://api.open5e.com/v1/monsters/?limit=50');
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

export const getMonster = createAsyncThunk('monster/getMonster', async (id) => {
  const res = await axios.get(`https://api.open5e.com/v1/monsters/${id}`);
  const data = {
    name: res.data.name,
    ac: res.data.armor_class,
    hp: res.data.hit_points,
    cr: res.data.challenge_rating,
    stats: [{
      str: res.data.strength,
      dex: res.data.dexterity,
      con: res.data.constitution,
      int: res.data.intelligence,
      wis: res.data.wisdom,
      cha: res.data.charisma,
    }],
    doc: res.data.document__slug,
  };
  return data;
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
      state.monsters = [];
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
      state.monsters = [];
      state.monsters = action.payload;
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
