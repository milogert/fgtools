const Stats = require('./Stats')

const StatLine = ({ thickBorders }) =>
  <Stats
    stats={[ 'Move', 'Fight', 'Shoot', 'Armor', 'Will', 'Health' ]}
    abbreviate
    thickBorders={thickBorders}
  />

module.exports = StatLine
