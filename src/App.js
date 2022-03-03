import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Pages/Home';
import { AboutUs } from './components/Pages/AboutUs';
import { Counter } from './components/Pages/Counter';
import { RickAndMorty } from './components/Pages/RickAndMorty';
import { RickAndMortyInput } from './components/Pages/RickAndMortyInput';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/AboutUs' element= {<AboutUs />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/RickAndMorty' element={<RickAndMorty />} />
        <Route path='/Rick2' element={<RickAndMortyInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
