import React from 'react';
import Header from '../components/Header';
import Missions from '../components/Missions';
import SolarSystem from '../components/SolarSystem';
import logo from '../assets/logo.png'

class App extends React.Component {
  render() {
    return (
      <>
      <header className='logo'>
        <img src={logo} alt="logo" />
      </header>
        <main>
          <SolarSystem />
          <Missions />
        </main>
      </>
    );
  }
}

export default App;
