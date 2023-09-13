import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import MonsterList from './components/MonsterList';
import './App.css';
import { getAllMonsters, getMonster } from './redux/monster/monsterSlice';
import Monster from './components/Monster';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMonsters());
    dispatch(getMonster('aboleth'));
  }, []);

  return (
    <>
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monsters" element={<MonsterList />} />
        <Route path="/:slug" element={<Monster />} />
      </Routes>
    </>
  );
}

export default App;
