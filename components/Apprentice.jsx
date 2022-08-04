const Stat = require('./Stat')
const StatLine = require('./StatLine')

const Apprentice = () =>
  <div className="apprentice box">
    <div className="title">
      Apprentice
      <Stat stat="Wounds" />
    </div>
    <div className="entryLine">Name</div>
    <StatLine />
    <div className="freeForm items">
      Items
    </div>

    <div className="freeForm injuries">
      Injuries
    </div>
  </div>

module.exports = Apprentice
