const fl = tag => logData => ( console.log(`utils.js: ${tag}`, logData), logData )
import {
  always,
  append,
  assoc,
  defaultTo,
  filter,
  ifElse,
  isNil,
  map,
  mapObjIndexed,
  pipe,
  pluck,
  prop,
  propEq,
  reject,
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

const filterSpells = (expansionsEnabled, wizardSheet) => ({ expansion: schoolExp, spells, unlearnable }, school) =>
  ifElse(
    () => fl('testing unlearnable and wizard sheet')(wizardSheet && unlearnable),
    always(null),
    pipe(
      filter(schoolSpellFilter(expansionsEnabled, schoolExp)),
      fl(`before rejected ${schoolExp} ${wizardSheet}`),
      // reject(propEq('unlearnable', wizardSheet)),
      // fl(`after rejected`),
      map(assoc('school', school)),
    ),
  )(spells)

const expansionFilterFn = expansionsEnabled =>
  filter(({ expansion }) => expansionsEnabled.includes(expansion))

const filterSchools = (expansionsEnabled, wizardSheet) =>
  pipe(
    expansionFilterFn(expansionsEnabled),
    fl(`next is filtering spells ${wizardSheet}`),
    mapObjIndexed(filterSpells(expansionsEnabled, wizardSheet)),
    fl('after filtering spells'),
    reject(isNil),
    fl('rejecting nulls'),
  )(spellData)

export const getSchools = (expansionConfig, wizardSheet) => {
  console.group('getShcools')
  const isWizardSheet = wizardSheet ?? false
  console.log(wizardSheet, isWizardSheet)
  const enabled = enabledExpansions(expansionConfig)
  console.log('enabled expansions', enabled)

  const filteredSchoolsAndSpells = filterSchools(enabled, isWizardSheet)

  console.groupEnd()

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

const sanitizeRegex = /[\s]/
/**
 * Sanitize a string for use in a url.
 *
 * @param s: String the string to sanitize
 * @returns String sanitized string
 */
const sanitize = s =>
  s.replace(sanitizeRegex, '-').toLowerCase()

export const getSchoolIcon = school =>
  `/${sanitize(school)}.png`
