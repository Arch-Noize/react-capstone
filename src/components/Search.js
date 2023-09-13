import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import logo from '../assets/dice.png';

const Search = () => {
  const documents = ['', 'wotc-srd', 'tob', 'tob2', 'tob3', 'menagerie', 'cc'];

  console.log('hi');

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Choose source">
        <Dropdown.Item>
          {documents[0]}
        </Dropdown.Item>

        <Dropdown.Item>
          {documents[1]}
        </Dropdown.Item>

        <Dropdown.Item>
          {documents[2]}
        </Dropdown.Item>

        <Dropdown.Item>
          {documents[3]}
        </Dropdown.Item>

        <Dropdown.Item>
          {documents[4]}
        </Dropdown.Item>

        <Dropdown.Item>
          {documents[5]}
        </Dropdown.Item>

        <Dropdown.Item>
          {documents[6]}
        </Dropdown.Item>
      </DropdownButton>

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
