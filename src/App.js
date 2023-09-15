import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { getAllMonsters, getMonster } from './redux/monster/monsterSlice';
import Monster from './components/Monster';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMonsters());
    dispatch(getMonster('aboleth'));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="/:slug" element={<Monster />} />
      </Routes>
    </>
  );
};

export default App;
