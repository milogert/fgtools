import { useEffect } from "react"
import { useExpansion } from "../../context/expansions"
import { EXPANSION_BLOOD_LEGACY } from "../../lib/constants"
import FormRow from "../FormRow"
import PrintWarning from "../PrintWarning"

const Config = props => {
  const {
    allowCustomSchools,
    customSchoolsText,
    expChecks,
    hasCaptain,
    showSpellDetails,
    showPreview,
    soldierCount,
    thickBorders,
    wizardVampire,
  } = props

  const { enabled: bloodLegacyEnabled } = useExpansion(EXPANSION_BLOOD_LEGACY) || {}

  useEffect(() => {
    if (!bloodLegacyEnabled) {
      wizardVampire.set(false)
    }
  }, [ bloodLegacyEnabled, wizardVampire ])

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
    {bloodLegacyEnabled &&
      <FormRow
        name="wizardVampire"
        label="Make Wizard a Vampire"
        sublabel="Blood Legacy option"
        inputProps={{
          type: "checkbox",
          onChange: () => wizardVampire.set(!wizardVampire.get),
          checked: wizardVampire.get,
        }}
      />
    }

    <h2 className="text-2xl mt-4">Custom</h2>
    <FormRow
      name="allowCustomSchools"
      label="Configure custom schools of magic?"
      inputProps={{
        type: "checkbox",
        onChange: () => allowCustomSchools.set(!allowCustomSchools.get),
        checked: allowCustomSchools.get,
      }}
    />
    {allowCustomSchools.get &&
      <div className="form-row--area">
        <label htmlFor="customSchools">Custom Magic Schools</label>
        <textarea
          id="customSchools"
          value={customSchoolsText.get}
          onChange={e => customSchoolsText.set(e.target.value)}
          placeholder="school name: spell 1 range 10, spell 2 range 10, ..."
        ></textarea>
      </div>
    }

    {showPreview.get && <PrintWarning what="wizard sheet" />}
  </div>
}

export default Config
