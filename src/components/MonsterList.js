import React from 'react';
import { useSelector } from 'react-redux';
import Monster from './Monster';

const Classes = () => {
  const { monsters } = useSelector((state) => state.monster);

  return (
    <>
      <h1>List of classes</h1>
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

export default Classes;
