const classnames = require('classnames')

const cls = require('../styles/apprentice.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const Stat = require('./Stat')
const StatLine = require('./StatLine')

const Apprentice = () => {
  const className = classnames([ cls.apprentice, clsUtils.box ])

  return <div className={className}>
    <div className={clsUtils.title}>
      Apprentice
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

module.exports = Apprentice
