import {
  append,
  defaultTo,
  filter,
  map,
  pipe,
  pluck,
  prop,
  propEq,
} from "ramda"

import spellData from './spellData'

import {
  EXPANSION_CORE,
  RANGES,
} from './constants'

export const rangeShort = range => RANGES[range].short
export const rangeLong = range => RANGES[range].long

export const getRange = (range, which) => {
  const fn = which === 'long' ? rangeLong : rangeShort
  return (typeof range) === 'string'
    ? fn(range)
    : range.map(fn).join('/')
}


export const isExpansionEnabled = key =>
  pipe(
    filter(propEq('key', key)),
    defaultTo({ enabled: false }),
    prop('enabled'),
  )

export const enabledExpansions =
  pipe(
    filter(prop('enabled')),
    pluck('key'),
    append(EXPANSION_CORE),
  )

const schoolSpellFilter = (expEnabled, schoolExp) => ({ expansion }) =>
  expansion === schoolExp || !expansion || expEnabled.includes(expansion)

const filterSpells = expansionsEnabled => ({ expansion: schoolExp, spells }) =>
  filter(schoolSpellFilter(expansionsEnabled, schoolExp), spells)

const expansionFilterFn = expansionsEnabled =>
  filter(({ expansion }) => expansionsEnabled.includes(expansion))

const filterSchools = expansionsEnabled =>
  pipe(
    expansionFilterFn(expansionsEnabled),
    map(filterSpells(expansionsEnabled)),
  )(spellData)

export const getSchools = expansionConfig => {
  const enabled = enabledExpansions(expansionConfig)

  const filteredSchoolsAndSpells = filterSchools(enabled)

  return filteredSchoolsAndSpells
}

const spellRegex = /(?<name>.*) (?<range>Area|LoS|Out:A|Out:B|Touch) (?<castingNumber>\d+)/

const parseSpell = spellText => {
  const trimmed = spellText.trim()
  const matched = trimmed.match(spellRegex)
  if (matched === null) {
    return { [spellText]: {} }
  }
  const { name, ...details } = matched.groups
  return { [name]: details }
}

const parseCustomSchool = schoolText => {
  const [school, spellsText] = schoolText.split(':')
  let name = school.trim()
  if (name === '') {
    name = "A Nameless School"
  }

  if (!spellsText) {
    return { [name]: {} }
  }

  const spells = spellsText
    .split(',')
    .map(parseSpell)
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})
  return { [name]: spells }
}

export const parseCustomSchools = customSchools => {
  if (!customSchools) {
    return {}
  }

  return customSchools
    .split('\n')
    .map(parseCustomSchool)
    .reduce((x, acc) => ({ ...acc, ...x }), {})
}
