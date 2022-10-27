import React from 'react';
import { useParams } from 'react-router-dom';

const FolderInner = () => {
  const { id } = useParams();
  // console.log(window.location.pathname);

  return <div>Внутренности папки + {id}</div>;
};

export default FolderInner;
