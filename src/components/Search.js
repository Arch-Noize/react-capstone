import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { setSource } from '../redux/monster/monsterSlice';
import styles from '../styles/Header.module.css';

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
    <div>
      <button
        className={styles.dropdown}
        type="button"
        onClick={toggleDropdown}
      >
        Select book
        <FontAwesomeIcon icon={faSortDown} />
      </button>
      {isOpen && (
      <div className={styles.dropdownList}>
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
            <Link to="/">
              {item}
            </Link>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Search;
