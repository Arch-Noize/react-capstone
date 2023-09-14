import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MonsterList from './components/MonsterList';
import { getAllMonsters, getMonster } from './redux/monster/monsterSlice';
import Monster from './components/Monster';
import Front from './components/Front';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMonsters());
    dispatch(getMonster('aboleth'));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Front />
      <Routes>
        <Route path="/monsters" element={<MonsterList />} />
        <Route path="/:slug" element={<Monster />} />
      </Routes>
    </>
  );
}

export default App;
