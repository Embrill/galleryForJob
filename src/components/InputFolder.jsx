import React from 'react';

const InputFolder = ({ addFolder }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addFolder(value);
    setValue('');
  };

  return (
    <form className="input-folder" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Название папки" />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputFolder;
