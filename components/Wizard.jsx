const classnames = require('classnames')

const Stat = require('./Stat')
const Stats = require('./Stats')
const StatLine = require('./StatLine')

const Wizard = ({ thickBorders }) =>
  <div className={classnames(
    'wizard box mb-1',
    { 'border': !thickBorders, 'border-2': thickBorders}
  )}>
    <div className="title">
      <span className="mr-4">Wizard</span>
      <Stat stat="Wounds" thickBorders={thickBorders} />
    </div>
    <div className="entryLine">Name</div>
    <div className="entryLine">School</div>
    <Stats stats={[ 'Level', 'XP' ]} />

    <StatLine thickBorders={thickBorders} />

    <div className="freeForm items">
      Items
    </div>
    <div className="freeForm injuries">
      Injuries
    </div>
  </div>

module.exports = Wizard
