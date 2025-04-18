import './App.css';
import React, { useState } from 'react';
import ClickableField from './components/ClickableField';
import DialogBox from './components/DialogBox';
import CommitButton from './components/CommitButton';
import PlayerStatsGroup from './components/PlayerStatsGroup';

function App() {
  const [dialogMessage, setDialogMessage] = useState("Waiting for player...");

  const handleStatSelect = (stat) => {
    if (!stat) {
      setDialogMessage("Tumbleweed...");
    } else {
      setDialogMessage(`Player is selecting ${stat}...`);
    }
  };

  const handleStatConfirm = (stat) => {
    setDialogMessage(`Player has chosen ${stat}!`);
  };


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
        <div className="menu-item">Creators</div>
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
                <PlayerStatsGroup
                  onStatSelect={handleStatSelect}
                  onStatConfirm={handleStatConfirm}
                />
              </div>
            </div>
            <div className="middle-row">
             <DialogBox message={dialogMessage} initialColor="lightgray" size="40%" /> 
            </div>
            <div className="player-row">
              <div className="card player-card">
                <div className="header-area"></div>
                <div className="image-area"></div>
                <PlayerStatsGroup
                  onStatSelect={handleStatSelect}
                  onStatConfirm={handleStatConfirm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
