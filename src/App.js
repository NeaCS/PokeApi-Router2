import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import DetallesPokemon from './views/DetallesPokemon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemon />} />
          <Route path="/pokemones/:nombre" element={<DetallesPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
