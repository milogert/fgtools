const Stat = require('./Stat')
const Stats = require('./Stats')
const StatLine = require('./StatLine')

const Captain = () =>
  <div className="captain box">
    <div className="title">
      Captain
      <Stat stat="Wounds" />

    </div>
    <div className="entryLine">Name</div>
    <Stats stats={[ 'Level', 'XP' ]} />
    <StatLine />
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
