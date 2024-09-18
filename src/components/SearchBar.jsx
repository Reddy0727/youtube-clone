import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center sm:bg-zinc-900 rounded-full overflow-hidden md:pl-2'>
     
       <input
            type="text" 
            className="focus:outline-none border-none bg-transparent sm:p-1 sm:px-4 flex-1 sm:flex hidden"
            value={searchTerm}
            onChange={handleChange}
        />
        <button type="submit" className="sm:px-4  sm:p-1 flex-1 sm:flex-[0.2] sm:bg-black ">
          <SearchIcon  />
        </button>
    </form>
  );
};

export default SearchBar;
