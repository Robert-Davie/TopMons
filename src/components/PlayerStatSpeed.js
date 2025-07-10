import React, { useState } from 'react';
/**
 * Creates a clickable field for the Player's Stats for Speed.
 * Once clicked it changes the background colour and the colour of the button's text.
 * 
 *
*@param {string} initialText
*@param {string} initialColor
*@param {number} size
*@param {string} initialTextColor
*@returns {JSX.Element} Clickable field

 */
function PlayerStatSpeed({ initialText, initialColor, size, initialTextColor }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: size || '100%',
        height: '25%',
        backgroundColor: clicked ? 'lightcoral' : initialColor || 'transparent',
        position: 'relative',
        textAlign: 'center',
        lineHeight: '100px',
        fontSize: '20px',
        color: clicked ? 'black' : initialTextColor || 'red',
        //THIS IS SO COOL
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span>{clicked ? 'SPEED' : initialText || 'Speed'}</span>
      <span>70</span>
    </div>
  );
}

export default PlayerStatSpeed;
