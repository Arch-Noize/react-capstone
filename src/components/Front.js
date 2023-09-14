import React from 'react';
import { useSelector } from 'react-redux';
import all from '../assets/all.jpg';
import wotc from '../assets/wotc-srd.jpg';
import tob from '../assets/tob.jpg';
import tob2 from '../assets/tob2.jpg';
import tob3 from '../assets/tob3.jpg';
import menagerie from '../assets/menagerie.jpg';
import cc from '../assets/cc.jpg';
import styles from '../styles/Front.module.css';

const Front = () => {
  const { source, monsters } = useSelector((state) => state.monster);

  const sourceImgs = {
    all,
    'wotc-srd': wotc,
    tob,
    tob2,
    tob3,
    menagerie,
    cc,
  };

  return (
    <div className={styles.front}>
      <img src={sourceImgs[source] || sourceImgs.all} alt={source} />
      <div>
        <h1>{source.toUpperCase() || 'All Books'}</h1>
        <p>
          {monsters.length}
          +
          {' '}
          Creatures
        </p>
      </div>
    </div>
  );
};

export default Front;
