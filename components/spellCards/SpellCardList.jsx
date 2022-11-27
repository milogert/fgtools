import React, { useMemo, useState } from "react"

import { addIndex, flatten, keys, map, pipe, sort } from "ramda"

import AlignmentReferenceCard from "./AlignmentReferenceCard"
import PageBreak from "../PageBreak"
import SpellCard from "./SpellCard"
import { ALL_SCHOOLS } from "../../lib/constants"
import { getSchools } from "../../lib/utils"
import { useExpansionContext } from "../../context/expansions"

const insertBreaks = (spell, idx) =>
  ([
    spell,
    ...((idx + 1) % 8 === 0 ? [ 'break' ] : []),
  ])

const SpellCardList = props => {
  const {
    forceFullText,
    includeAlignmentCard,
    selectedSchool,
    spells,
  } = props
  const { expansions } = useExpansionContext()
  const [ allSchools ] = useState(getSchools(expansions))
  const spellsWithPageBreaks = useMemo(
    () =>
      pipe(
        keys,
        sort((l, r) => l > r),
        addIndex(map)(insertBreaks),
        flatten,
      )(spells),
    [ spells ]
  )

  return <>
    {includeAlignmentCard &&
      (selectedSchool === ALL_SCHOOLS
        ? Object.keys(allSchools)
          .map(school =>
            <AlignmentReferenceCard key={school} schoolName={school} />
          )
        : <AlignmentReferenceCard schoolName={selectedSchool} />
      )
    }
    {
      spellsWithPageBreaks.map((spellName, idx) => {
        if (spellName === 'break') {
          return <PageBreak />
        }

        const {
          castingNumber,
          fullText,
          range,
          school,
          text,
        } = spells[spellName]

        return <SpellCard
          castingNumber={castingNumber}
          fullText={forceFullText && fullText}
          key={`${spellName}-${idx}`}
          range={range}
          school={school}
          spellName={spellName}
          text={text}
        />
      })
    }
  </>
}

export default SpellCardList
