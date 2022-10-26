import React, { useEffect, useState } from 'react';
import CollectionImages from './CollectionImages';
import Folder from './Folder';
import InputFolder from './InputFolder';

const Home = () => {
  // state folder default
  const [folderName, setFolderName] = React.useState([
    {
      text: 'Tarantino movies',
      isDone: false,
    },
  ]);
  const [isInputFolder, setIsInputFolder] = React.useState(false);

  // Add folder
  const addFolder = (text) => {
    const newFolder = [...folderName, { text }];
    setFolderName(newFolder);
  };

  // Delete folder
  const removeFolder = (index) => {
    const newFolder = [...folderName]; // copy
    newFolder.splice(index, 1); // delete
    setFolderName(newFolder); // setup value folder
  };

  // Update folder name

  // Открытие инпута ввода имени папки
  const openPopUp = () => {
    setIsInputFolder(!isInputFolder);
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

  return (
    <div className="home">
      <div className="home__header">
        <h2>/path</h2>
        {isInputFolder && <InputFolder addFolder={addFolder} />}
        <button onClick={openPopUp}>Добавить папку</button>
      </div>
      <div className="home__content">
        {folderName.map((title, index) => (
          <Folder key={index} title={title.text} index={index} removeFolder={removeFolder} />
        ))}

        {gallery.map((item, index) => (
          <CollectionImages key={index} image={item.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
