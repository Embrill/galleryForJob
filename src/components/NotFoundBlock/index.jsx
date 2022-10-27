import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div>
      <h2>Такой страницы не существует :(</h2>
      <Link to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default index;
