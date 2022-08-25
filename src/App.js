import { useState } from 'react';
import './App.css';
import './components/Styles/card.css'
import { MyRoutes } from './router/MyRoutes';
import { Card } from './components/Card'
import Select from 'react-select'
import { options, customStyles } from './components/Styles/select-styles'
import dk from './components/Javascript/music/Dk-fix.wav'
import koji from './components/Javascript/music/Mario-fix.wav'
import zeldaM from './components/Javascript/music/Zelda-fix.wav'
import metroidM from './components/Javascript/music/Metroid-fix.wav'
import useSound from 'use-sound';
import Zoom from 'react-reveal/Zoom';

function App() {


  const [donkey, setDonkey] = useState(false);
  const [mario, setMario] = useState(false);
  const [metroid, setMetroid] = useState(false);
  const [zelda, setZelda] = useState(false);
  const [myValue, setMyValue] = useState('');
  const [firstScreen, setFirstScreen] = useState(true);
  const [dkMusic] = useSound(dk, { volume: 0.2 });
  const [marioMusic] = useSound(koji, { volume: 0.2 })
  const [zeldaMusic] = useSound(zeldaM, { volume: 0.2 })
  const [metroidMusic] = useSound(metroidM, { volume: 0.2 })



  const handleSelectorChange = ({ value }) => {
    setMyValue(value);
  }
  const compare = () => {
    if (myValue === "Donkey Kong") {
      setDonkey(true);
    } else if (myValue === "Mario World") {
      setMario(true);
    } else if (myValue === "Metroid") {
      setMetroid(true);
    } else if (myValue === "Zelda") {
      setZelda(true);
    } else {
      setDonkey(true);
    }
  }


  return (
    <div className="App">
      <Zoom >
      {firstScreen ? 
        <div className='main-screen'>
          
          <div className='card-order'>
            <div className='unit-chart'>
              <Card title="Donkey Kong 2" texto="Quiz Dk layer" portrait='DK2-fix.jpg' action={() => { setDonkey(true); setFirstScreen(false); }} />
            </div>
            <div className='unit-chart'>
              <Card title="Mario World" texto="Quiz Mario layer" portrait='Mario-fix.jpg' action={() => { setMario(true); setFirstScreen(false); }} />
            </div>
            <div className='unit-chart'>
              <Card title="Metroid" texto="Quiz Metroid layer" portrait='Metroid-fix.jpg' action={() => { setMetroid(true); setFirstScreen(false); }} />
            </div>
            <div className='unit-chart'>
              <Card title="Zelda" texto="Quiz Zelda layer" portrait='Zelda-fix.jpg' action={() => { setZelda(true); setFirstScreen(false); }} />
            </div>
          </div>
          <div className='game'>
            <div className='header header-intro'><h1>Choose the game</h1></div>

            <div className='select-bar'>
              <Select
                options={options}
                onChange={handleSelectorChange}
                styles={customStyles}

              />
              
            </div>

          </div>

          <div className='snes-buttons'>
            <a className='reset-outer' href={() => false} onClick={() => { compare(handleSelectorChange); setFirstScreen(false); }}><div className='reset'><p>power </p></div></a>
            <a className='reset-outer' href='/'><div className='reset'><p>reset <span></span></p></div></a>
          </div>
        </div> 
        :
        <div></div>
      }
</Zoom>
      {donkey ? (
        <div >
          <div className='landing-page'>
            {dkMusic()}

            <MyRoutes scenario='Donkey' />
          </div>
        </div>) : <div></div>
      }

      {mario ?
        <div className='landing-pageM'>
          {marioMusic()}
          <MyRoutes scenario='Mario' />
        </div>
        :
        <div></div>}


      {metroid ?
        <div className='landing-pageMe'>
          {metroidMusic()}
          <MyRoutes scenario='Metroid' />
        </div>
        :
        <div></div>}

      {zelda ?
        <div className='landing-pageZ'>
          {zeldaMusic()}
          <MyRoutes scenario='Zelda' />
        </div>
        :
        <div></div>}






    </div>
  );

}

export default App;





