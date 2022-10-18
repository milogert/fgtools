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
    allowCustomSchools,
    customSchoolsText,
    expChecks,
    expansions,
    hasCaptain,
    showSpellDetails,
    showPreview,
    soldierCount,
    thickBorders,
  } = props

  return <div className="config mb-4 print:hidden">
    <h2 className="text-2xl mt-4">General Options</h2>
    <FormRow
      name="showPreview"
      label="Show Preview?"
      inputProps={{
        type: "checkbox",
        onChange: () => showPreview.set(!showPreview.get),
        checked: showPreview.get,
      }}
    />
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
    <FormRow
      name="thickBorders"
      label="Thick Borders"
      inputProps={{
        type: "checkbox",
        onChange: () => thickBorders.set(!thickBorders.get),
        checked: thickBorders.get,
      }}
    />
    <FormRow
      name="expChecks"
      label="Experience Checkmarks"
      inputProps={{
        type: "checkbox",
        onChange: () => expChecks.set(!expChecks.get),
        checked: expChecks.get,
      }}
    />
    <FormRow
      name="spellDetails"
      label="Show Spell Details"
      inputProps={{
        type: "checkbox",
        onChange: () => showSpellDetails.set(!showSpellDetails.get),
        checked: showSpellDetails.get,
      }}
    />

    <h2 className="text-2xl mt-4">Expansions</h2>
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

    <h2 className="text-2xl mt-4">Custom</h2>
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
          placeholder="school name: spell 1 range 10, spell 2 range 10, ..."
        ></textarea>
      </div>
    }

    {showPreview.get &&
      <div className="text-3xl text-center border-black border-b-4 mt-4">
        <div>Everything above this line will not be printed</div>
        <div>Below is a preview of your wizard sheet</div>
      </div>
    }
  </div>
}

module.exports = Config
