const Stat = require('./Stat')

const Stats = ({ stats, abbreviate = false, thickBorders }) => {
  const className = [
    'flex my-1',
    stats.length === 1 ? 'grid-cols-1' : '',
    stats.length === 2 ? 'grid-cols-2' : '',
    stats.length === 6 ? 'grid-cols-6' : '',
  ].join(' ')

  return <div className={className}>
    {stats.map(stat =>
      <Stat
        key={stat}
        stat={stat}
        abbreviate={abbreviate}
        thickBorders={thickBorders}
      />
    )}
  </div>
}

module.exports = Stats
