const classnames = require('classnames')

const StatLine = require('./StatLine')

const Soldier = ({ thickBorders }) =>
  <div className={classnames(
    'soldier box mb-1 last:mb-0 flex-grow',
    { 'border': !thickBorders, 'border-2': thickBorders}
  )}>
    <div className="soldier-top grid grid-cols-2 gap-2">
      <div className="entryLine">Name</div>
      <div className="entryLine">Type</div>
    </div>
    <StatLine thickBorders={thickBorders} />
    <div className="soldier-bottom grid grid-cols-2 gap-2">
      <div className="entryLine">Equipment</div>
      <div className="entryLine">Item</div>
    </div>
  </div>

module.exports = Soldier
