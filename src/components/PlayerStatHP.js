import React, { useState } from 'react';

function PlayerStatHP({ initialText, initialColor, size }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: size || '200px',
        height: '60px',
        backgroundColor: clicked ? 'lightblue' : initialColor || 'lightgray',
        top: 30,
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

export default PlayerStatHP;
