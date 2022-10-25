import React from 'react';

const Collection = ({ image }) => {
  return (
    <div className="collection">
      <img src={image} alt="photos" />
      <h2>Title</h2>
    </div>
  );
};

export default Collection;
