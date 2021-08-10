import React from 'react';

const SearchBox = ({ searchChange }) => {
  return(
    <div>
      <input 
        type='text'
        placeholder='Search for robots'
        onChange = {searchChange}
      />
    </div>
  );
}

export default SearchBox;