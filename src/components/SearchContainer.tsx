import React from 'react';
import './SearchContainer.css';
import Search from './search/Search.js';

interface ContainerProps {
  name: string;
}

const SearchContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <Search name="Matches" />
    </div>
  );
};

export default SearchContainer;
