import React from 'react';
import './HomeContainer.css';
import Home from './home/Home.js';

interface ContainerProps {
  name: string;
}

const HomeContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <Home name="Matches" />
    </div>
  );
};

export default HomeContainer;
