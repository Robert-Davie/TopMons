import React, { useState } from 'react';

/**
 * 
 * Creates a clickable field that displays the score.
 * Once clicked it changes the background colour and the text of the button.
 * 
*@param {string} initialText
*@param {string} initialColor
*@param {number} size
*@returns {JSX.Element} Clickable field
 */

function ClickableField({ initialText, initialColor, size }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: size || '200px',
        height: '100px',
        backgroundColor: clicked ? 'lightblue' : initialColor || 'lightgray',
        top: 20,
        right: 20,
        position: 'absolute',
        textAlign: 'center',
        lineHeight: '100px',
        fontSize: '20px',
        color: 'black',
        //THIS IS SO COOL
        cursor: 'pointer',
      }}
    >
      {clicked ? 'You clicked me!' : initialText || 'Click me'}
    </div>
  );
}

export default ClickableField;
