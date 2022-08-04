const Stat = require('./Stat')
const StatLine = require('./StatLine')

const SecondInCommand = () =>
  <div className="second-in-command box">
    <div className={clsUtils.title}>
      2nd In Command
      <Stat stat="Wounds" />
    </div>
    <div className={clsUtils.entryLine}>Name</div>
    <StatLine />
    <div className={`${clsUtils.freeForm} ${clsUtils.items}`}>
      Items
    </div>

    <div className={`${clsUtils.freeForm} ${clsUtils.injuries}`}>
      Injuries
    </div>
  </div>

module.exports = SecondInCommand
