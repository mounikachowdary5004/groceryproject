// import React, { useState } from 'react';
// import './searchbar.css';

// const SearchBar = ({ handleSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleSearch(query);
//   };

//   return (
//     <form className='search-form' onSubmit={handleSubmit}>
//       <input
//         type='text'
//         placeholder='Search products...'
//         value={query}
//         onChange={(event) => setQuery(event.target.value)}
//       />
//       <button type='submit'>Search</button>
//     </form>
//   );
// };

// export default SearchBar;
import React from 'react';

const SearchBar = (props) => {
  const { onSearch } = props;

  return (
    <div>
      <input type="text" placeholder="Search Products" onChange={onSearch} />
    </div>
  );
};

export default SearchBar;

