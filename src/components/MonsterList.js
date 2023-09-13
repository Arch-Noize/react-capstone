import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MonsterList = () => {
  const monsters = useSelector((state) => state.monster.monsters);

  return (
    <>
      <div>
        <ul>
          {monsters.map((item) => (
            <li key={item.slug}>
              <Link to={`/${item.slug}`}>
                <h3>{item.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MonsterList;
