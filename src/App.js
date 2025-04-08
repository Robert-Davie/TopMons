import './App.css';

function App() {
  return (
    <div className="container">
    <div className="sidebar">
      <div className="menu top-menu">
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
        <div className="deck top-left" style={{
          backgroundImage: "url('/images/prototype_topmons_card_design_nb.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></div>
        <div className="deck bottom-right" style={{
          backgroundImage: "url('/images/prototype_topmons_kai_card_design_nb.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></div>
          <div className="play-area">
            <div className="opponent-row">
              <div className="card opponent-card">Opponent Hand</div>
            </div>
            <div className="middle-row">
              <div className="middle card">Player Compare</div>
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
