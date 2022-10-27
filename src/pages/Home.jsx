import React from 'react';
import CollectionImages from '../components/CollectionImages';
import Folder from '../components/Folder';

const Home = ({ folderName, removeFolder, editMode, setEditMode, editFolder, value, setValue, setFolderName }) => {
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
    <>
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
          index={index}
        />
      ))}

      {gallery.map((item, index) => (
        <CollectionImages key={index} image={item.url} />
      ))}
    </>
  );
};

export default Home;
