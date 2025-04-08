import './App.css';
import ClickableField from './components/ClickableField';
import CommitButton from './components/CommitButton';

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
        <ClickableField initialText="Click me to change color!" initialColor="pink" size="150px" />
        <div className="deck top-left"></div>
        <div className="deck bottom-right"></div>
          <div className="play-area">
            <div className="opponent-row">
              <div className="card opponent-card">Opponent Hand</div>
            </div>
            <div className="middle-row">
              <div className="middle card">
                <CommitButton initialText="Commit" initialColor="blue" size="200px" />
              </div>
              <div className="middle card">Opponent Compare</div>
            </div>
            <div className="player-row">
              <div className="card player-card">Player Hand</div>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default App;
