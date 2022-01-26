const Stats = require('./Stats')

const StatLine = () => <Stats
  stats={[ 'Move', 'Fight', 'Shoot', 'Armor', 'Will', 'Health' ]}
  abbreviate
/>

module.exports = StatLine
