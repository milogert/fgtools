const classnames = require('classnames')

const Stat = ({ stat, abbreviate = false, thickBorders }) =>
  <div className={classnames(
    'text-xs h-8 px-1 border-black',
    {
      'text-lg px-1': abbreviate,
      'border': !thickBorders,
      'border-2': thickBorders,
    }
  )}>
    {abbreviate ? stat[0] : stat}
  </div>

module.exports = Stat
