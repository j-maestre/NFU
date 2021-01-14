import React from 'react';
import './AddContainer.css';
import Add from './add/Add.js';

interface ContainerProps {
  name: string;
}

const AddContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <Add name="Matches" />
    </div>
  );
};

export default AddContainer;
