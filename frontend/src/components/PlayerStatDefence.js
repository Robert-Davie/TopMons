import React, { useState } from 'react';

function PlayerStatDefence({ initialText, initialTextColor, initialBGColor, size, selected, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: size || '80%',
        height: '20%',
        backgroundColor: clicked ? '#fdd' : initialBGColor || 'transparent',
        top: 50, 
        position: 'absolute',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        textAlign: 'left',
        lineHeight: '25px',
        fontSize: '18px',
        paddingLeft: '1%',
        color: clicked ? 'red' : initialTextColor || 'black',
        //THIS IS SO COOL
        cursor: 'pointer',
      }}
    >
      {clicked ? 'DEFENCE' : initialText || 'Defence'}
    </div>
  );
}

export default PlayerStatDefence;
