const { default: classNames } = require('classnames')

const Stat = require('./Stat')
const Stats = require('./Stats')
const StatLine = require('./StatLine')

const cls = require('../styles/captain.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const Captain = () => {
  const className = classNames([ clsUtils.box, cls.captain ])

  return <div className={className}>
    <div className={clsUtils.title}>
      Captain
      <Stat stat="Wounds" />

    </div>
    <div className={clsUtils.entryLine}>Name</div>
    <Stats stats={[ 'Level', 'XP' ]} />
    <StatLine />
    <div className={`${clsUtils.freeForm} ${clsUtils.items}`}>
      Items
    </div>
    <div className={`${clsUtils.freeForm} ${clsUtils.tricksOfTheTrade}`}>
      Tricks of the Trade
    </div>
    <div className={`${clsUtils.freeForm} ${clsUtils.injuries}`}>
      Injuries
    </div>
  </div>
}

module.exports = Captain
