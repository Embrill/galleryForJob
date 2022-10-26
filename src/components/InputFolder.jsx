import React from 'react';

const InputFolder = ({ addFolder, value, setValue, titleFolder, setTitleFolder }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleFolder) return;
    addFolder(titleFolder);
    setTitleFolder('');
  };

  return (
    <form className="input-folder" onSubmit={handleSubmit}>
      <input
        type="text"
        value={titleFolder}
        onChange={(e) => setTitleFolder(e.target.value)}
        placeholder="Название папки"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default InputFolder;
