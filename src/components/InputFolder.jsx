import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputFolder = ({ setFolderName, folderName }) => {
  const [value, setValue] = React.useState('');

  // Добавление папки
  const addFolder = () => {
    setFolderName([
      ...folderName,
      {
        id: uuidv4(),
        text: value,
        otherProperty: 'lorem2',
        isDone: true,
      },
    ]);
    setValue('');
  };

  console.log(value);

  return (
    <div className="input-folder">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Название папки" />
      <button onClick={addFolder}>Добавить</button>
    </div>
  );
};

export default InputFolder;
