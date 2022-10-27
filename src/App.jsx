import React from 'react';
import './App.scss';
import '../src/scss/app.scss';

import { v4 as uuidv4 } from 'uuid'; // Уникальыне ID
import Header from './components/Header';
import Home from './pages/Home';

function App() {
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
  const [editMode, setEditMode] = React.useState(null);

  const editFolder = (index, title) => {
    setEditMode(index);
    setValue(title);
  };

  console.log(folderName);

  return (
    <div className="App home">
      <Header value={value} setValue={setValue} setFolderName={setFolderName} folderName={folderName} />
      <div className="content home__content">
        <Home
          removeFolder={removeFolder}
          editMode={editMode}
          setEditMode={setEditMode}
          editFolder={editFolder}
          value={value}
          setValue={setValue}
          folderName={folderName}
          setFolderName={setFolderName}
        />
      </div>
    </div>
  );
}

export default App;
