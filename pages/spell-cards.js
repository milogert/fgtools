import React, { useEffect, useMemo, useState } from "react"
import { compose, mergeAll, values } from "ramda"
import { useRouter } from "next/router"

import FormRow from "../components/FormRow"
import Head from "next/head"
import PrintWarning from "../components/PrintWarning"
import SpellCardList from "../components/spellCards/SpellCardList"
import { ALL_SCHOOLS } from "../lib/constants"
import { getSchools } from '../lib/utils'
import { useExpansionContext } from "../context/expansions"

const SpellCards = () => {
  const { expansions } = useExpansionContext()
  const [ allSchools, setAllSchools ] = useState(getSchools(expansions))
  const router = useRouter()
  const { school: selectedSchool } = router.query

  // Config.
  const [ includeAlignmentCard, setIncludeAlignmentCard ] = useState(false)
  const [ forceFullText, setForceFullText ] = useState(false)

  useEffect(() => {
    setAllSchools(getSchools(expansions))
  }, [ expansions ])

  const spells = useMemo(() => {
    if (selectedSchool === ALL_SCHOOLS) {
      return compose(mergeAll, values)(allSchools)
    }
    return selectedSchool ? allSchools[selectedSchool] : {}
  }, [ allSchools, selectedSchool ])

  return <div>
    <Head>
      <title>Spell Cards - Frostgrave Tools</title>
    </Head>

    <div className="print:hidden flex flex-col justify-between">
      <h2 className="text-3xl">Spell Cards</h2>

      <div className="config mb-4 print:hidden">
        <h2 className="text-2xl mt-4">General Options</h2>

        <div className="form-row flex justify-between items-center h-9">
          <label htmlFor="schoolSelect" className="flex flex-grow" aria-hidden="true">
            Pick School
            <div className="form-spacer flex-grow mx-3 border-b-2 border-dotted border-black" />
          </label>
          <select
            id="schoolSelect"
            value={selectedSchool || ''}
            onChange={e => router.push({ query: { school: e.target.value } })}
          >
            <option value="">Select a school</option>
            <option value={ALL_SCHOOLS}>All Schools</option>
            {Object.keys(allSchools).sort().map(school =>
              <option key={school} value={school}>{school}</option>
            )}
          </select>
        </div>

        <FormRow
          name="includeAlignmentCard"
          label="Include Alignment Card?"
          inputProps={{
            type: "checkbox",
            onChange: () => setIncludeAlignmentCard(!includeAlignmentCard),
            checked: includeAlignmentCard,
          }}
        />

        <FormRow
          name="forceFullText"
          label="Force full card text?"
          inputProps={{
            type: "checkbox",
            onChange: () => setForceFullText(!forceFullText),
            checked: forceFullText,
          }}
          help={<div>
            <p>This forces the full text for all spells. There are some spells that have rule text too long to comfortably fit on the spells cards. If you enable this option some spell cards may print too large since the text will overflow. The truncated text is mostly accomplished by removing extraneous qualifiers for using the spell or shortining words (ex. Miraculous Cure cannot resurrect the dead if cast from a scroll. This detail is excluded in the truncated text).</p>

            <h3 className="text-2xl">Affected Spells</h3>
            <ul className="list-disc list-inside">
              <li>Illusionist: Illusionary Soldier</li>
              <li>Sigilist: Bridge</li>
              <li>Sigilist: Explosive Rune</li>
              <li>Soothsayer: Mind Control</li>
              <li>Summoner: Plane Walk</li>
              <li>Summoner: Summon Demon</li>
              <li>Thaumaturge: Miraculous Cure</li>
            </ul>
          </div>}
        />
      </div>

      <PrintWarning what="spell cards"/>
    </div>

    <div className="mx-auto">
      <div className="flex justify-center align-center flex-wrap">
        {selectedSchool
          ? <SpellCardList
            forceFullText={forceFullText}
            includeAlignmentCard={includeAlignmentCard}
            selectedSchool={selectedSchool}
            spells={spells}
          />
          : <div>Pick a school above to see the spell cards.</div>
        }
      </div>
    </div>
  </div>
}

export default SpellCards
