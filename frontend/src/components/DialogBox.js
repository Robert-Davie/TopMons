import React, { useState } from 'react';

function DialogBox({ message, initialColor, size }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: size || '42%',
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
      {message || "Nothing's happening just yet..."}
    </div>
  );
}

export default DialogBox;
