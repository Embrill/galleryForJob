import React, { useEffect, useState } from 'react';
import CollectionImages from './CollectionImages';
import Folders from './Folders';
import InputFolder from './InputFolder';

const Home = () => {
  // const dataFolders = ['Tarantino movies'];
  const [folderName, setFolderName] = React.useState([]);
  const [isInputFolder, setIsInputFolder] = React.useState(false);

  // Добавление папок
  const addFolder = () => {
    setFolderName((prev) => [...prev, prev.push()]);
  };

  //
  const openPopUp = () => {
    setIsInputFolder(true);
  };

  // Запрос API
  const [gallery, setGallery] = React.useState([]);

  React.useEffect(() => {
    fetch('https://633e73820dbc3309f3b5d032.mockapi.io/gallery')
      .then((response) => response.json())
      .then((json) => {
        setGallery(json);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при получении галереи');
      });
  }, []);

  console.log(folderName);

  return (
    <div className="home">
      <div className="home__header">
        <h2>/path</h2>
        {isInputFolder && <InputFolder addFolder={addFolder} />}
        <button onClick={openPopUp}>Добавить папку</button>
      </div>
      <div className="home__content">
        {folderName.map((title, index) => (
          <Folders key={index} title={title} />
        ))}

        {gallery.map((item, index) => (
          <CollectionImages key={index} image={item.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
