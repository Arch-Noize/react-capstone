import React from 'react';
import { useSelector } from 'react-redux';
import ClassItem from './ClassItem';

const Classes = () => {
  const { classes } = useSelector((state) => state.classes);

  return (
    <>
      <h1>List of classes</h1>
      <div>
        {classes.map((item) => (
          <ClassItem
            key={item.id}
            id={item.id}
            name={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default Classes;
