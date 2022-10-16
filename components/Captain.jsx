const classnames = require('classnames')

const Stat = require('./Stat')
const Stats = require('./Stats')
const StatLine = require('./StatLine')

const Captain = ({ thickBorders }) =>
  <div className={classnames(
    'captain box mb-1',
    { 'border': !thickBorders, 'border-2': thickBorders }
  )}>
    <div className="title">
      Captain
      <Stat stat="Wounds" thickBorders={thickBorders} />

    </div>
    <div className="entryLine">Name</div>
    <Stats stats={[ 'Level', 'XP' ]} />
    <StatLine thickBorders={thickBorders} />
    <div className="freeForm items">
      Items
    </div>
    <div className="freeForm tricksOfTheTrade">
      Tricks of the Trade
    </div>
    <div className="freeForm injuries">
      Injuries
    </div>
  </div>

module.exports = Captain
