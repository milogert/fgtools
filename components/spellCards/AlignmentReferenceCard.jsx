import Image from "next/image"
import spellData from "../../lib/spellData"
import { getSchoolIcon, getSchools } from '../../lib/utils'
import {
    includes,
  intersection, keys, reject, sort, __,
  pipe,
  flip,
  ascend,
  identity,
  defaultTo,
  prop,
} from 'ramda'
import { useExpansionContext } from "../../context/expansions"

const includedIn = flip(includes)
const ascendingIdent = ascend(identity)

const isSchoolUnlearnable = pipe(
  prop(__, spellData),
  prop('unteachable'),
  defaultTo(false),
)

const neutralSchools = specificSchools => pipe(
  keys,
  reject(includedIn(specificSchools)),
  sort(ascendingIdent),
  reject(isSchoolUnlearnable),
)(spellData)

const AlignmentReferenceCard = ({ schoolName }) => {
  const { expansions } = useExpansionContext()
  const allSchools = getSchools(expansions)
  const schoolKeys = Object.keys(allSchools)
  const { schoolAdjustment } = spellData[schoolName]

  if (!schoolAdjustment) {
    return null
  }

  const {
    aligned,
    antithetical = [],
    opposed = [],
  } = schoolAdjustment

  const specificSchools = [
    schoolName,
    ...aligned,
    ...antithetical,
    ...opposed,
  ]
  const neutral = neutralSchools(specificSchools)

  const alignments = [
    { schools: [ schoolName ], castingAdjustment: 0 },
    { schools: intersection(aligned, schoolKeys), castingAdjustment: 2 },
    { schools: intersection(neutral, schoolKeys), castingAdjustment: 4 },
    { schools: intersection(opposed, schoolKeys), castingAdjustment: 6 },
    { schools: intersection(antithetical, schoolKeys), antithetical: true },
  ]

  return <div className="inline-block">
    <div
      className="flex flex-col m-2 print:m-0 w-64 aspect-spell-card bg-cover relative border border-solid border-black box-content"
    >
      <div className="mx-2 h-8 flex justify-around items-center">
        <div className="">{schoolName}</div>
      </div>

      <div className="flex flex-row justify-around">
        {alignments.map(({ schools, castingAdjustment, antithetical = false }, idx) =>
          schools.length > 0
            ? <div key={idx} className="flex flex-col p-1">
            {antithetical
              ? <div className="flex text-3xl my-1 justify-center"><span>-</span></div>
              : <div className="flex text-lg my-1">
                <span className="text-md">+</span>
                <span className="text-3xl">{castingAdjustment}</span>
              </div>
            }
            {schools.map(otherSchool =>
              <div key={otherSchool} className="my-1 w-8 h-8 relative">
                <Image src={getSchoolIcon(otherSchool)} alt={otherSchool} layout="fill" />
              </div>
            )}
          </div>
          : null
        )}
      </div>
    </div>
  </div>
}

export default AlignmentReferenceCard
