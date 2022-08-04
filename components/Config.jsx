const FormRow = ({
  className,
  inputProps,
  name,
  label,
}) => {
  return <div className={`formRow ${className || ''}`}>
    <label htmlFor={name}>{label}</label>
    <div className="formSpacer"></div>
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

  return <div className="config mb-4 noPrint">
    <h2 className="text-2xl">General Options</h2>
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

    <h2 className="text-2xl">Expansions</h2>
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
            className="expansion-option ml-4"
            inputProps={{
              type: "checkbox",
              onChange: () => onChange('vampireWizard'),
              checked: expConfig.vampireWizard,
            }}
          />
        }
      </div>
    })}

    <h2 className="text-2xl">Custom</h2>
    <div className="formRow">
      <label htmlFor="allowCustomSchools">Configure custom schools of magic?</label>
      <div className="formSpacer"></div>
      <input
        id="allowCustomSchools"
        type="checkbox"
        checked={allowCustomSchools.get}
        onChange={() => allowCustomSchools.set(!allowCustomSchools.get)}
      />
    </div>
    {allowCustomSchools.get &&
      <div className="formRow--area">
        <label htmlFor="customSchools">Custom Magic Schools</label>
        <textarea
          id="customSchools"
          value={customSchoolsText.get}
          onChange={e => customSchoolsText.set(e.target.value)}
          placeholder="school name: spell 1, spell 2, ..."
        ></textarea>
      </div>
    }
    <div className="text-3xl text-center border-black border-b-4">Everything above this line will not be printed</div>
  </div>
}

module.exports = Config
