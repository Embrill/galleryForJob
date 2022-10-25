import React from 'react';
import './App.scss';
import '../src/scss/app.scss';
import Home from './components/Home';

function App() {
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

  console.log(gallery);

  return (
    <div className="App">
      {gallery.map((x) => {
        <img src={x.url} alt="asd" />;
      })}
      <Home />
    </div>
  );
}

export default App;
