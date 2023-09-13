import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../assets/dice.png';
import { setSource } from '../redux/monster/monsterSlice';

const Search = () => {
  const documents = ['', 'wotc-srd', 'tob', 'tob2', 'tob3', 'menagerie', 'cc'];
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (book !== '') {
      dispatch(setSource(book));
    }
  }, [dispatch, book]);

  return (
    <>
      <div className="dropdown">
        <button type="button" onClick={toggleDropdown}>Dropdown</button>
        {isOpen && (
          <>
            {documents.map((item) => (
              <div
                key={item}
                role="button"
                onClick={() => {
                  setBook(item);
                  setIsOpen(!isOpen);
                }}
                onKeyDown={() => {
                  setBook(item);
                  setIsOpen(!isOpen);
                }}
                tabIndex={-1}
              >
                {item}
              </div>
            ))}
          </>
        )}
      </div>

      <Link to="/monsters">
        <div>
          <img src={logo} alt="dice" />
          <h1>This is a header</h1>
        </div>
      </Link>
    </>
  );
};

export default Search;
