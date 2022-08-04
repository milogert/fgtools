const Stat = ({ stat, abbreviate = false }) =>
  <div className={`text-xs border-2 border-black h-8 px-1 ${abbreviate ? 'text-lg px-1' : ''}`}>
    {abbreviate ? stat[0] : stat}
  </div>

module.exports = Stat
