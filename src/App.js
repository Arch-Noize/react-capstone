import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import Classes from './components/Classes';
import './App.css';
import { getClasses } from './redux/class/classSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClasses());
  }, []);

  return (
    <>
      <Search />
      <Classes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </>
  );
}

export default App;
