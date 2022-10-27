import React from 'react';
import { useParams } from 'react-router-dom';
import InputFolder from './InputFolder';

const Header = ({ value, setValue, setFolderName, folderName }) => {
  const { id } = useParams();
  // React.useEffect(() => {
  //   const url = window.location.href;
  // });
  return (
    <div className="header">
      <div className="home__header">
        <h2>path:{window.location.pathname}</h2>
        <InputFolder value={value} setValue={setValue} setFolderName={setFolderName} folderName={folderName} />
      </div>
    </div>
  );
};

export default Header;
