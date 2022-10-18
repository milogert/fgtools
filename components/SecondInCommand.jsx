const classnames = require('classnames')

const Stat = require('./Stat')
const StatLine = require('./StatLine')

const SecondInCommand = ({ thickBorders }) =>
  <div className={classnames(
    'second-in-command box mb-1',
    {
      'border': !thickBorders,
      'border-2': thickBorders,
    },
  )}>
    <div className="title">
      <span className="mr-4">2nd In Command</span>
      <Stat stat="Wounds" thickBorders={thickBorders} />
    </div>
    <div className="entryLine">Name</div>
    <StatLine thickBorders={thickBorders} />
    <div className={"freeForm items"}>
      Items
    </div>

    <div className={"freeForm injuries"}>
      Injuries
    </div>
  </div>

module.exports = SecondInCommand
