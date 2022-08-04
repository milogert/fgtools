const StatLine = require('./StatLine')

const Soldier = () =>
  <div className="soldier box">
    <div className="soldier-top grid grid-cols-2 gap-2">
      <div className="entryLine">Name</div>
      <div className="entryLine">Type</div>
    </div>
    <StatLine />
    <div className="soldier-bottom grid grid-cols-2 gap-2">
      <div className="entryLine">Equipment</div>
      <div className="entryLine">Item</div>
    </div>
  </div>

module.exports = Soldier
