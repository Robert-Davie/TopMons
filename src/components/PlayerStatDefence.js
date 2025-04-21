import React, { useState } from 'react';

function PlayerStatDefence({ initialText, initialColor, size, initialTextColor }) {
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
     <span> {clicked ? 'DEFENCE' : initialText || 'Defence'}</span>
     <span>84</span>
    </div>
  );
}

export default PlayerStatDefence;
