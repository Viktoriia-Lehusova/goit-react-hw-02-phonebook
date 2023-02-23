import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <StyledLabel>
        Find contacts by name
        <StyledInput type="text" value={value} onChange={onChangeFilter} />
      </StyledLabel>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
