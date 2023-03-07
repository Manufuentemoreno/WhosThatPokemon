import React, {
  useState
} from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

import Languaje from './components/Languaje';
import Footer from './components/Footer';
import PreGame from './components/PreGame';
import Home from './components/Home';
import Game from './components/Game/Game';

import './App.css';
import Landing from './components/Landing';
import SelectGame from './components/SelectGame';
import ErrorPage from './components/ErrorPage';

function App(props) {

  const [ languaje, setLanguaje ] = useState(0)
  const changeEnglish = ()=>{
    setLanguaje(0)
  };
  const changeSpanish = ()=>{
    setLanguaje(1)
  }

  const [ playGame, setPlaygame ] = useState(false);

  const play = ()=>{
    setPlaygame(!playGame)
  };

  const exit = ()=>{
    setPlaygame(false)
  };

  return (
    <React.Fragment>
      <Languaje english={changeEnglish} spanish={changeSpanish} languaje={languaje}/>

      <Routes>
        <Route path="/" element={ <Home exit={exit}/> }>
          <Route index element={ !playGame ? <Landing play={play}/> : <SelectGame exit={exit}/> } />

          <Route path='challenge' element={<Game gameMode={1} PokemonNumber={809}/>}/>
          <Route path='marathon' element={<PreGame gameMode={2}/>}/>
        </Route>
        
        <Route path='/error' element={<ErrorPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>

      <Footer languaje={languaje}/>
    </React.Fragment>
  );
}

export default App;