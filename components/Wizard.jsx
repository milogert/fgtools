const Stat = require('./Stat')
const Stats = require('./Stats')
const StatLine = require('./StatLine')

const cls = require('../styles/wizard.module.scss')
const clsUtils = require('../styles/utils.module.scss')
const { default: classNames } = require('classnames')

const Wizard = () => {
  const className = classNames([ cls.wizard, clsUtils.box ])

  return <div className={className}>
    <div className={clsUtils.title}>
      Wizard
      <Stat stat="Wounds" />
    </div>
    <div className="header"></div>
    <div className={clsUtils.entryLine}>Name</div>
    <div className={clsUtils.entryLine}>School</div>
    <Stats stats={[ 'Level', 'XP' ]} />

    <StatLine />

    <div className={`${clsUtils.freeForm} ${clsUtils.items}`}>
      Items
    </div>
    <div className={`${clsUtils.freeForm} ${clsUtils.injuries}`}>
      Injuries
    </div>
  </div>
}

module.exports = Wizard
