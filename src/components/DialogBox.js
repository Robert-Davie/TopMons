import React, { useState } from 'react';
import PlayerStatAttack from './PlayerStatAttack';

/**
 * 
 * Creates a clickable field for the dialog box.
 * Once clicked it changes the background colour and the text of the button. 
*@param {string} initialText
*@param {string} initialColor
*@param {number} size
*@returns {JSX.Element} Clickable field
 */

function DialogBox({}) {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  const boxText = 'Player Turn';

  return (
    <div
      // onClick={handleClick}
      style={{
        width: '200px',
        height: '100px',
        // backgroundColor: clicked ? 'lightblue' : initialColor || 'lightgray',
        backgroundColor: 'purple',
        position: 'absolute',
        textAlign: 'center',
        lineHeight: '100px',
        fontSize: '20px',
        color: 'black',
        //THIS IS SO COOL
        cursor: 'pointer',
      }}
    >
      {boxText}
      {/* {clicked ? 'Opponent Turn' : initialText || 'Something went wrong'} */}
    </div>
  );
}

export default DialogBox;
