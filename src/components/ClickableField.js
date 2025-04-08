import React, { useState } from 'react';

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
        transform: clicked ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.2s, background-color 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      {clicked ? 'You clicked me!' : initialText || 'Click me'}
    </div>
  );
}

export default ClickableField;
