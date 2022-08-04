const Stat = require('./Stat')
const Stats = require('./Stats')
const StatLine = require('./StatLine')

const Wizard = () =>
  <div className="wizard box">
    <div className="title">
      Wizard
      <Stat stat="Wounds" />
    </div>
    <div className="header"></div>
    <div className="entryLine">Name</div>
    <div className="entryLine">School</div>
    <Stats stats={[ 'Level', 'XP' ]} />

    <StatLine />

    <div className="freeForm items">
      Items
    </div>
    <div className="freeForm injuries">
      Injuries
    </div>
  </div>

module.exports = Wizard
