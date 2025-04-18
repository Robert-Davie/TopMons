import React, { useState } from 'react';

function CommitButton({ initialText, initialColor, size }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="App">
      <button
        className="commit-button" // Add your className here
        onClick={handleClick} // Your onClick event handler
      >
        {clicked ? 'Card Committed' : 'Commit'}
      </button>
    </div>
  );
}

export default CommitButton;
