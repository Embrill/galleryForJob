import React from 'react';
import './App.scss';
import '../src/scss/app.scss';

import { v4 as uuidv4 } from 'uuid'; // Уникальыне ID
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import FolderInner from './pages/FolderInner';
import NotFound from './pages/NotFound';

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
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/folds" element={<FolderInner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
