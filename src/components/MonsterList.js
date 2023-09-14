import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllMonsters, getMonsterByBook } from '../redux/monster/monsterSlice';

const MonsterList = () => {
  const { monsters, source } = useSelector((state) => state.monster);
  const dispatch = useDispatch();

  useEffect(() => {
    if (source) {
      dispatch(getMonsterByBook(source));
    } else {
      dispatch(getAllMonsters());
    }
  }, [dispatch, source]);

  return (
    <>
      <div>
        <ul>
          {monsters.map((item) => (
            <li key={item.slug}>
              <Link to={`/${item.slug}`}>
                <h3>{item.name}</h3>
                <p>
                  CR:
                  {' '}
                  {item.cr}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MonsterList;
