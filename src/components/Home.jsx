import React, { useState } from 'react';
import CollectionImages from './CollectionImages';
import Folder from './Folder';
import InputFolder from './InputFolder';
import { v4 as uuidv4 } from 'uuid'; // Уникальыне ID

const Home = () => {
  // Хранилище папки
  const [folderName, setFolderName] = React.useState([
    {
      id: uuidv4(), // Уникальный id
      text: 'Tarantino movies',
      otherProperty: 'lorem',
      isDone: false,
    },
  ]);

  // Удаление папки
  const removeFolder = (index) => {
    const newFolder = [...folderName]; // copy
    newFolder.splice(index, 1); // delete
    setFolderName(newFolder); // setup value folder
  };

  // Переименование папки
  const [value, setValue] = React.useState(''); // value input
  const [editMode, setEditMode] = useState(null);

  const editFolder = (index, title) => {
    setEditMode(index);
    setValue(title);
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
        <InputFolder value={value} setValue={setValue} setFolderName={setFolderName} folderName={folderName} />
      </div>
      <div className="home__content">
        {folderName.map((item, index) => (
          <Folder
            key={index}
            id={item.id}
            title={item.text}
            removeFolder={removeFolder}
            editMode={editMode}
            setEditMode={setEditMode}
            editFolder={editFolder}
            value={value}
            setValue={setValue}
            folderName={folderName}
            setFolderName={setFolderName}
          />
        ))}

        {gallery.map((item, index) => (
          <CollectionImages key={index} image={item.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
