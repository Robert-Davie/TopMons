import React, { useState } from 'react';
/**
 * Creates a clickable field for the Opponent's Stats for defence.
 * Once clicked it changes the background colour and the colour of the button's text.
 * 
 *
*@param {string} initialText
*@param {string} initialColor
*@param {number} size
*@param {string} initialTextColor
*@returns {JSX.Element} Clickable field

 */
function OpponentStatDefence({ initialText, initialColor, size, initialTextColor }) {
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
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
      }}
    >
     <span> {clicked ? 'DEFENCE' : initialText || 'Defence'}</span>
     <span>65</span>
    </div>
  );
}

export default OpponentStatDefence;