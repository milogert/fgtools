import { concat, find, includes, pipe, prop, propEq, reject, sortBy, tap, __ } from "ramda"
import { createContext, useContext, useEffect, useState } from "react"
import {
  EXPANSION_BLOOD_LEGACY,
  EXPANSION_FROSTGRAVE_FOLIO,
  EXPANSION_INTO_THE_BREEDING_PITS,
  EXPANSION_THAW_OF_THE_LICH_LORD,
} from "../lib/constants"

const ExpansionContext = createContext()

const STORAGE_EXPANSION_KEY = 'fgtools-expansion-context'

const DEFAULT_CONFIG = [
  {
    label: 'Thaw of the Lich Lord',
    enabled: false,
    key: EXPANSION_THAW_OF_THE_LICH_LORD,
  },
  {
    label: 'Into the Breeding Pits',
    enabled: false,
    key: EXPANSION_INTO_THE_BREEDING_PITS,
  },
  {
    label: 'Frostgrave Folio',
    enabled: false,
    key: EXPANSION_FROSTGRAVE_FOLIO,
  },
  {
    label: 'Blood Legacy',
    enabled: false,
    key: EXPANSION_BLOOD_LEGACY,
  },
]

const getExpansionState = () => {
  const storedExpansions = JSON.parse(localStorage.getItem(STORAGE_EXPANSION_KEY)) ?? DEFAULT_CONFIG
  const fullExpansionList = pipe(
    reject(pipe(prop('key'), doesExpansionKeyExist)),
    concat(storedExpansions),
    sortBy(prop('key')),
  )(DEFAULT_CONFIG)
  return fullExpansionList
}

const saveExpansionState = expansions => {
  window.localStorage.setItem(STORAGE_EXPANSION_KEY, JSON.stringify(expansions))
}

const doesExpansionKeyExist = (storedExpansionKeys) =>
  includes(__, storedExpansionKeys)

export const ExpansionProvider = ({ children }) => {
  const [ expansions, setExpansions ] = useState([])
  const [ expansionsLoaded, setExpansionsLoaded ] = useState(false)

  const setAndSaveExpansions = expansions => {
    setExpansions(expansions)
    saveExpansionState(expansions)
  }

  useEffect(() => {
    setExpansions(getExpansionState())
    setExpansionsLoaded(true)
  }, [])

  return (
    <ExpansionContext.Provider
      value={{
        expansions,
        setExpansions: setAndSaveExpansions,
        expansionsLoaded,
      }}>
      {children}
    </ExpansionContext.Provider>
  )
}

export const useExpansionContext = () => useContext(ExpansionContext)

export const useExpansion = expansionKey => {
  const { expansions } = useExpansionContext()
  return find(propEq('key', expansionKey), expansions)
}
