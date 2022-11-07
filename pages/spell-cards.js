const fl = tag => logData => ( console.log(`spell-cards.js: ${tag}`, logData), logData )
import { useEffect, useMemo, useState } from "react"

import { getSchools } from '../lib/utils'
import SpellCard from '../components/SpellCard'
import { addIndex, flatten, keys, map, pipe, sort } from "ramda"
import { useExpansionContext } from "../context/expansions"
import PageBreak from "../components/PageBreak"

const SpellCards = () => {
  const { expansions } = useExpansionContext()
  const [ school, setSchool ] = useState(null)
  const [ allSchools, setAllSchools ] = useState(getSchools(expansions))

  useEffect(() => {
    setAllSchools(getSchools(expansions))
  }, [ expansions ])

  const spells =
    useMemo(() => school ? allSchools[school] : {}, [ allSchools, school ])

  const spellsWithPageBreaks = useMemo(
    () =>
      pipe(
        keys,
        sort((l, r) => l > r),
        addIndex(map)((spell, idx) => (console.log(spell, idx, (idx + 1) % 8), [ spell, ...((idx + 1) % 8 === 0 ? [ 'break' ] : []) ])),
        fl('adding breaks?'),
        flatten,
        fl('after flatten'),
      )(spells),
    [ spells ]
  )

  return <div>
    <div className="print:hidden flex justify-between">
      <h2 className="text-3xl">Spell Cards</h2>
      <select
        value={school || ''}
        onChange={e => setSchool(e.target.value)}
      >
        <option value="">Select a school</option>
        {Object.keys(allSchools).sort().map(school =>
          <option key={school} value={school}>{school}</option>
        )}
      </select>
    </div>

    <div className="flex justify-center align-center">
      {school
        ? <div className="w-full">
          {spellsWithPageBreaks.map((spellName, idx) => {
            if (spellName === 'break') {
              return <PageBreak />
              // return <div key={`break-${idx}`} className="print:break-before-page" />
            }

            const {
              castingNumber,
              range,
              text,
            } = spells[spellName]

            return <SpellCard
              key={`${spellName}-${idx}`}
              castingNumber={castingNumber}
              range={range}
              school={school}
              spellName={spellName}
              text={text}
            />
          })}
        </div>
        : <div>Pick a school above to see the spell cards.</div>
      }
    </div>
  </div>
}

export default SpellCards
