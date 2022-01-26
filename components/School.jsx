import classNames from 'classnames'

const cls = require('../styles/school.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const School = ({ name, spells }) => {
  const className = classNames([ cls.school, clsUtils.box ])

  return <div className={className}>
    <div className={cls.header}>{name}</div>
    {spells
      .sort()
      .map(spell => <div key={spell} className={cls.spell}>
        <div className={cls.name}>{spell}</div>
      </div>)
    }
  </div>
}

module.exports = School
