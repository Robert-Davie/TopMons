import React, { useState } from 'react';

/**
 *  Create a commit button.
 *
*@param {string} initialText
*@param {string} initialColor
*@param {number} size
*@returns {JSX.Element} Clickable field
* Needs to be implemented within app.js.
 */


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
