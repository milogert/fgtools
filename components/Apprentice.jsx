const classnames = require('classnames')

const Stat = require('./Stat')
const StatLine = require('./StatLine')

const Apprentice = ({ thickBorders }) =>
  <div className={classnames(
    'apprentice box mb-1',
    { 'border': !thickBorders, 'border-2': thickBorders}
  )}>
    <div className="title">
      <span className="mr-4">Apprentice</span>
      <Stat stat="Wounds" />
    </div>
    <div className="entryLine">Name</div>
    <StatLine thickBorders={thickBorders} />
    <div className="freeForm items">
      Items
    </div>

    <div className="freeForm injuries">
      Injuries
    </div>
  </div>

module.exports = Apprentice
