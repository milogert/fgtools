const { default: classNames } = require('classnames')
const cls = require('../styles/config.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const FormRow = ({
  className,
  inputProps,
  name,
  label,
}) => {
  return <div className={`${clsUtils.formRow} ${className || ''}`}>
    <label htmlFor={name}>{label}</label>
    <div className={clsUtils.formSpacer}></div>
    <input
      id={name}
      {...inputProps}
    />
  </div>
}

const Config = props => {
  const {
    expansions,
    hasCaptain,
    soldierCount,
    allowCustomSchools,
    customSchoolsText,
  } = props

  const className = classNames([ cls.config, clsUtils.noPrint ])
  return <div className={className}>
    <div className="text-2xl">General Options</div>
    <FormRow
      name="captain"
      label="Captain?"
      inputProps={{
        type: "checkbox",
        onChange: () => hasCaptain.set(!hasCaptain.get),
        checked: hasCaptain.get,
      }}
    />
    <FormRow
      name="soldierCount"
      label="Soldier Count"
      inputProps={{
        type: "number",
        onChange: e => soldierCount.set(parseInt(e.target.value)),
        max: 18,
        value: soldierCount.get,
      }}
    />

    <div className="text-2xl">Expansions</div>
    {Object.keys(expansions.get).sort().map(key => {
      const expConfig = expansions.get[key]

      const onChange = valueKey => {
        const newKey = { ...expConfig, [valueKey]: !expConfig[valueKey] }
        const newExpansions = { ...expansions.get, [key]: newKey }
        expansions.set(newExpansions)
      }

      return <div key={key}>
        <FormRow
          name={key}
          label={expConfig.label}
          inputProps={{
            type: "checkbox",
            onChange: () => onChange('enabled'),
            checked: expConfig.enabled,
          }}
        />
        {key === 'bloodLegacy' && expConfig.enabled &&
          <FormRow
            name="vampireWizard"
            label="Make wizard a vampire?"
            className={cls.expansionOption}
            inputProps={{
              type: "checkbox",
              onChange: () => onChange('vampireWizard'),
              checked: expConfig.vampireWizard,
            }}
          />
        }
      </div>
    })}

    <div className="text-2xl">Custom</div>
    <div className={clsUtils.formRow}>
      <label htmlFor="allowCustomSchools">Configure custom schools of magic?</label>
      <div className={clsUtils.formSpacer}></div>
      <input
        id="allowCustomSchools"
        type="checkbox"
        checked={allowCustomSchools.get}
        onChange={() => allowCustomSchools.set(!allowCustomSchools.get)}
      />
    </div>
    {allowCustomSchools.get &&
      <div className={clsUtils['formRow--area']}>
        <label htmlFor="customSchools">Custom Magic Schools</label>
        <textarea
          id="customSchools"
          value={customSchoolsText.get}
          onChange={e => customSchoolsText.set(e.target.value)}
          placeholder="school name: spell 1, spell 2, ..."
        ></textarea>
      </div>
    }
    <div className={cls.printNotifier}>Everything above this line will not be printed</div>
  </div>
}

module.exports = Config
