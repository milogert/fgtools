const classnames = require('classnames')

const Stat = ({ stat, abbreviate = false, thickBorders }) =>
  <div className={classnames(
    'mr-1 last:mr-0 flex-grow-[1] last:flex-grow-[2] text-xs h-8 px-1 border-black',
    {
      'border': !thickBorders,
      'border-2': thickBorders,
    }
  )}>
    {abbreviate ? stat[0] : stat}
  </div>

module.exports = Stat
