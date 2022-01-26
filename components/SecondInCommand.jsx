const { default: classNames } = require('classnames')

const Stat = require('./Stat')
const StatLine = require('./StatLine')

const cls = require('../styles/secondInCommand.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const SecondInCommand = () => {
  const className = classNames([ clsUtils.box, cls.secondInCommand ])

  return <div className={className}>
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
}

module.exports = SecondInCommand
