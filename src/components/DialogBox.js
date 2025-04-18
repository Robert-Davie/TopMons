import React, { useState } from 'react';

function DialogBox({ initialText, initialColor, size }) {
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

export default DialogBox;
