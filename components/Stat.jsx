const { default: classNames } = require('classnames')
const cls = require('../styles/stats.module.scss')

const Stat = ({ stat, abbreviate = false }) => {
  const className = classNames(cls.stat, {
    [cls['stat--abbreviate']]: abbreviate,
  })

  return <div className={className}>{abbreviate ? stat[0] : stat}</div>
}

module.exports = Stat
