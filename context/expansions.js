import { find, propEq } from "ramda"
import { createContext, useContext, useState } from "react"
import {
  EXPANSION_BLOOD_LEGACY,
  EXPANSION_INTO_THE_BREEDING_PITS,
} from "../lib/constants"

const ExpansionContext = createContext()

export const ExpansionProvider = ({ children }) => {
  const [ expansions, setExpansions ] = useState([
    {
      label: "Into the Breeding Pits",
      enabled: false,
      key: EXPANSION_INTO_THE_BREEDING_PITS,
    },
    {
      label: "Blood Legacy",
      enabled: false,
      vampireWizard: false,
      key: EXPANSION_BLOOD_LEGACY,
    },
  ])

  return (
    <ExpansionContext.Provider value={{ expansions, setExpansions}}>
      {children}
    </ExpansionContext.Provider>
  )
}

export const useExpansionContext = () => useContext(ExpansionContext)

export const useExpansion = expansionKey => {
  const { expansions } = useExpansionContext()
  return find(propEq('key', expansionKey), expansions)
}

export const useExpansionUpdater = (expansionKey, optionKey) => {
  const { expansions, setExpansions } = useExpansionContext()
  const expansion = useExpansion(expansionKey)
  return () => {
    const newKey = { ...expansion, [optionKey]: !expansion[optionKey] }
    pipe(
      reject(propEq('key', expansion.key)),
      append(newKey),
      sort(prop('key')),
      setExpansions,
    )(expansions)
  }
}
