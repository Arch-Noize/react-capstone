import React from 'react';
import PropTypes from 'prop-types';

const Monster = ({ id, name }) => (
  <div id={id}>
    <h3>{name}</h3>
  </div>
);

Monster.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Monster;
