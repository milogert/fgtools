import {
  findIndex,
  lensPath,
  over,
  pipe,
  prop,
  propEq,
} from "ramda"
import { useCallback, useEffect } from "react"
import {
  useExpansion,
  useExpansionContext,
} from "../../context/expansions"
import { EXPANSION_BLOOD_LEGACY } from "../../lib/constants"
import FormRow from '../FormRow'

export const ID = 'expansion-config-dialog'

export const showDialog = () => {
  document.getElementById(ID).showModal()
}

const closeDialog = () => {
  document.getElementById(ID).close()
}

const ExpansionConfigDialog = () => {
  const { expansions, setExpansions } = useExpansionContext()

  const onOptionChange = useCallback((key, option) => {
    const idx = findIndex(propEq('key', key), expansions)
    const optionLens = lensPath([ idx, option ])

    pipe(
      over(optionLens, x => !x),
      setExpansions,
    )(expansions)
  }, [ expansions, setExpansions ])

  const bloodLegacy = useExpansion(EXPANSION_BLOOD_LEGACY)

  useEffect(() => {
    if (!bloodLegacy.enabled && bloodLegacy.vampireWizard) {
      onOptionChange(EXPANSION_BLOOD_LEGACY, 'vampireWizard')
    }
  }, [
      bloodLegacy.enabled,
      bloodLegacy.vampireWizard,
      onOptionChange,
    ]
  )

  return <dialog
    id={ID}
    className="max-w-xs md:max-w-lg print:hidden border-2 border-solid border-black rounded-md"
    // style={{ maxWidth: '50%' }}
  >
    <div className="flex justify-between items-center">
      <h2 className="text-3xl mr-10">Expansions</h2>
      <button
        className="border-2 border-black border-solid rounded-md p-1 bg-gray-200"
        type="reset"
        onClick={closeDialog}
      >Close</button>
    </div>

    <p className="mb-2">
      Select expansions you own to enable them across the application. Generally this means adding new spells but in some cases there is additional configuration options for the Wizard Sheet. For instance, Blood Legacy adds the ability to make your wizard a vampire.
    </p>

    {expansions.sort((l, r) => l.key > r.key).map(expansion =>
      <div key={expansion.key}>
        <FormRow
          name={expansion.key}
          label={expansion.label}
          inputProps={{
            type: "checkbox",
            onChange: () => onOptionChange(expansion.key, 'enabled'),
            checked: expansion.enabled,
          }}
        />
        {expansion.key === EXPANSION_BLOOD_LEGACY && expansion.enabled &&
          <FormRow
            name="vampireWizard"
            label="Make wizard a vampire?"
            className="expansion-option ml-4"
            inputProps={{
              type: "checkbox",
              onChange: () => onOptionChange(expansion.key, 'vampireWizard'),
              checked: expansion.vampireWizard,
            }}
          />
        }
      </div>
    )}

  </dialog>
}

export default ExpansionConfigDialog
