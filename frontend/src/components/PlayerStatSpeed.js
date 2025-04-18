import React from 'react';

function PlayerStatSpeed({ selected, onClick, value = 10 }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '100%',
        height: '20%',
        backgroundColor: selected ? '#fdd' : 'transparent',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: selected ? '20px' : '18px',
        padding: '0 5%',
        color: selected ? 'red' : 'black',
        cursor: 'pointer',
      }}
    >
      <span>{selected ? "SPEED" : "Speed"}</span>
      <span>{value}</span>
    </div>
  );
}

export default PlayerStatSpeed;
