import React from 'react';
import Search from './Search';
import logo from '../assets/dice.png';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="dice" />
    <Search />
    <h3>
      5E Monsters
    </h3>
  </header>
);

export default Header;
