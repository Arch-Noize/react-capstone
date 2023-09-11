import React from 'react';
import PropTypes from 'prop-types';

const ClassItem = ({ id, name }) => (
  <div id={id}>
    <h3>{name}</h3>
  </div>
);

ClassItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ClassItem;
