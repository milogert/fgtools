const Stat = require('./Stat')

const cls = require('../styles/stats.module.scss')
const { default: classNames } = require('classnames')

const Stats = ({ stats, abbreviate = false }) => {
  const className = classNames([
    cls.statLine,
    cls[`statLine--${stats.length}`],
  ])

  return <div className={className}>
    {stats.map(stat => <Stat key={stat} stat={stat} abbreviate={abbreviate} />)}
  </div>
}

module.exports = Stats
