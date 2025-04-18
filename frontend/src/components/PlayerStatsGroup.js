import React, { useState } from 'react';
import PlayerStatAttack from './PlayerStatAttack';
import PlayerStatDefence from './PlayerStatDefence';
import PlayerStatHP from './PlayerStatHP';
import PlayerStatSpeed from './PlayerStatSpeed';

function PlayerStatsGroup() {
  const [selectedStat, setSelectedStat] = useState(null);

  return (
    <div className="stats-area">
      <PlayerStatAttack
        selected={selectedStat === 'attack'}
        onClick={() => setSelectedStat('attack')}
      />
      <PlayerStatDefence
        selected={selectedStat === 'defence'}
        onClick={() => setSelectedStat('defence')}
      />
      <PlayerStatHP
        selected={selectedStat === 'hp'}
        onClick={() => setSelectedStat('hp')}
      />
      <PlayerStatSpeed
        selected={selectedStat === 'speed'}
        onClick={() => setSelectedStat('speed')}
      />
    </div>
  );
}

export default PlayerStatsGroup;