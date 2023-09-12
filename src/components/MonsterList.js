import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Monster from './Monster';

const MonsterList = () => {
  const monsters = useSelector((state) => state.monster.monsters);
  const monsterStat = useSelector((state) => state.monster.monsterStats);

  return (
    <>
      <Link to="/">
        <h1>List of classes</h1>
      </Link>
      <div>
        Testing a new name:
        {' '}
        {monsterStat.name}
      </div>
      <div>
        {monsters.map((item) => (
          <Monster
            key={item.slug}
            id={item.slug}
            name={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default MonsterList;
