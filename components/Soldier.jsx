const { default: classNames } = require('classnames')

const StatLine = require('./StatLine')

const cls = require('../styles/soldier.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const Soldier = () => {
  const className = classNames([ clsUtils.box, cls.soldier ])

  return <div className={className}>
    <div className={cls.line}>
      <div className={clsUtils.entryLine}>Name</div>
      <div className={clsUtils.entryLine}>Type</div>
    </div>
    <StatLine />
    <div className={cls.line}>
      <div className={clsUtils.entryLine}>Equipment</div>
      <div className={clsUtils.entryLine}>Item</div>
    </div>
  </div>
}

module.exports = Soldier
