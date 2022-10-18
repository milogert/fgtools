const classnames = require('classnames')

const StatLine = require('./StatLine')

const Soldier = ({ thickBorders }) =>
  <div className={classnames(
    'soldier box mb-1 last:mb-0 flex-grow flex flex-col justify-between',
    { 'border': !thickBorders, 'border-2': thickBorders}
  )}>
    <div className="soldier-top flex items-center">
      <div className="h-4 w-4 mr-2 border border-black" />
      <div className="entryLine flex-grow mr-2">Name</div>
      <div className="entryLine flex-grow">Type</div>
    </div>
    <StatLine thickBorders={thickBorders} />
    <div className="soldier-bottom flex items-center">
      <div className="entryLine flex-grow mr-2 leading-7">Eqmt</div>
      <div className="entryLine flex-grow leading-7">Item</div>
    </div>
  </div>

module.exports = Soldier
