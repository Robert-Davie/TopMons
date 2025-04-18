import './App.css';
import React, { useState } from 'react';
import ClickableField from './components/ClickableField';
import DialogBox from './components/DialogBox';
import CommitButton from './components/CommitButton';
import PlayerStatDefence from './components/PlayerStatDefence';
import PlayerStatAttack from './components/PlayerStatAttack';
import PlayerStatHP from './components/PlayerStatHP';
import PlayerStatSpeed from './components/PlayerStatSpeed';
import PlayerStatsGroup from './components/PlayerStatsGroup';

function App() {
  const [selectedPlayerStat, setSelectedPlayerStat] = useState(null);
  const [selectedOpponentStat, setSelectedOpponentStat] = useState(null);


  return (
    <div className="container">
    <div className="sidebar">
      <div className="menu top-menu">
        <div className="menutitle menu-item"></div>
        <div className="menu-item">Home</div>
        <div className="menu-item">TopMons</div>
      </div>
      <div className="menu bottom-menu">
        <div className="menu-item">Options</div>
        <div className="menu-item">About</div>
      </div>
    </div>
    <div className="main-content">
      <div className="playmat">
        <div className="deck top-left"></div>
        <ClickableField initialText="SCORE" initialColor="pink" size="150px" />
        <div className="deck bottom-right"></div>
          <div className="play-area">
            <div className="opponent-row">
              <div className="card opponent-card">
                <div className="header-area"></div>
                <div className="image-area"></div>
                <div className="stats-area">
                  <PlayerStatsGroup />
                </div>
              </div>
            </div>
            <div className="middle-row">
             <DialogBox initialText="Click me" initialColor="lightgray" size="40%" /> 
            </div>
            <div className="player-row">
              <div className="card player-card">
                <div className="header-area"></div>
                <div className="image-area"></div>
                <div className="stats-area">
                  <PlayerStatAttack initialText="Attack" initialTextColor="black" initialBGColor="transparent" size="100%" />
                  <PlayerStatDefence initialText="Defence" initialTextColor="black" initialBGColor="transparent" size="100%" />
                  <PlayerStatHP initialText="HP" initialTextColor="black" initialBGColor="transparent" size="100%" />
                  <PlayerStatSpeed initialText="Speed" initialTextColor="black" initialBGColor="transparent" size="100%" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default App;
