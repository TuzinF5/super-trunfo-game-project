import React from 'react';
import PropTypes from 'prop-types';

class RarityFilter extends React.Component {
  render() {
    const { rareFilter, onInputChange, disabledInput } = this.props;
    return (
      <label htmlFor="rare-filter">
        Filtre por raridade da carta
        <select
          name="rareFilter"
          id="rare-filter"
          data-testid="rare-filter"
          value={ rareFilter }
          onChange={ onInputChange }
          disabled={ disabledInput }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

RarityFilter.propTypes = {
  rareFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  disabledInput: PropTypes.bool.isRequired,
};

export default RarityFilter;
