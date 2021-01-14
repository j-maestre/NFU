import React from 'react';
import './ProfileContainer.css';
import Profile from './profile/Profile.js';

interface ContainerProps {
  name: string;
}

const ProfileContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <Profile name="Matches" />
    </div>
  );
};

export default ProfileContainer;
