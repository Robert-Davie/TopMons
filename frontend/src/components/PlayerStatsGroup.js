import React, { useState } from 'react';
import PlayerStatAttack from './PlayerStatAttack';
import PlayerStatDefence from './PlayerStatDefence';
import PlayerStatHP from './PlayerStatHP';
import PlayerStatSpeed from './PlayerStatSpeed';

function PlayerStatsGroup({ onStatSelect }) {
  const [selectedStat, setSelectedStat] = useState(null);

  const handleClick = (stat) => {
    const newSelection = selectedStat === stat ? null : stat;
    setSelectedStat(newSelection);
    if (onStatSelect) {
      onStatSelect(newSelection);
    }
  };

  return (
    <div className="stats-area">
      <PlayerStatAttack
        selected={selectedStat === 'attack'}
        onClick={() => handleClick('attack')}
        value={42}
      />
      <PlayerStatDefence
        selected={selectedStat === 'defence'}
        onClick={() => handleClick('defence')}
        value={20}
      />
      <PlayerStatHP
        selected={selectedStat === 'hp'}
        onClick={() => handleClick('hp')}
        value={50}
      />
      <PlayerStatSpeed
        selected={selectedStat === 'speed'}
        onClick={() => handleClick('speed')}
        value={10}
      />
    </div>
  );
}

export default PlayerStatsGroup;
