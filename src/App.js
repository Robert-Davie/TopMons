import './App.css';
import ClickableField from './components/ClickableField';
import DialogBox from './components/DialogBox';
import CommitButton from './components/CommitButton';
import PlayerStatDefence from './components/PlayerStatDefence';
import PlayerStatAttack from './components/PlayerStatAttack';
import PlayerStatHP from './components/PlayerStatHP';
import PlayerStatSpeed from './components/PlayerStatSpeed';
import SelectedComputerCard from './components/SelectComputerCard';

function App() {
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
              <SelectedComputerCard initalText="" initialColor="transparent" size="100%" initalTextColor="black" />
              </div>
            </div>
            <div className="middle-row">
             <DialogBox initialText="Click me" initialColor="lightgray" size="200px" /> 
            </div>
            <div className="player-row">
              <div className="card player-card">
                <div className="player-card-header">
                  <div className="pokemonName">Charmander</div>
                  <div className="pokemonTypeIcon"></div>
                </div>
                <div className="player-card-image"></div>
                <div className="player-card-stats">
                  <PlayerStatAttack initalText="Attack" initialColor="transparent" size="100%" initalTextColor="black" />
                  <PlayerStatDefence initalText="Defence" initialColor="transparent" size="100%" initalTextColor="black" />
                  <PlayerStatHP initalText="HP" initialColor="transparent" size="100%" initalTextColor="black"/>
                  <PlayerStatSpeed initalText="Speed" initialColor="transparent" size="100%" initalTextColor="black"/>
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
