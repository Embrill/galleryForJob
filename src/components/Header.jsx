import React from 'react';
import InputFolder from './InputFolder';

const Header = ({ value, setValue, setFolderName, folderName }) => {
  return (
    <div className="header">
      <div className="home__header">
        <h2>/path/</h2>
        <InputFolder value={value} setValue={setValue} setFolderName={setFolderName} folderName={folderName} />
      </div>
    </div>
  );
};

export default Header;
