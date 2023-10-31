// A1.js
import React from 'react';

const A1 = ({ name, photoUrl }) => {
  return (
    <div className="profile-info">
      <h2>Profile Info</h2>
      <p>Name: {name}</p>
      {photoUrl && (
        <div className="profile-photo">
          <img src={photoUrl} alt="User Profile" />
        </div>
      )}
    </div>
  );
};

export default A1;
