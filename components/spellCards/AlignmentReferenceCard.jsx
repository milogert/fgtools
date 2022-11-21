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
} from 'ramda'
import { useExpansionContext } from "../../context/expansions"

const includedIn = flip(includes)
const ascendingIdent = ascend(identity)
const neutralSchools = specificSpells => pipe(
  keys,
  reject(includedIn(specificSpells)),
  sort(ascendingIdent),
)(spellData)

const AlignmentReferenceCard = ({ schoolName }) => {
  const { expansions } = useExpansionContext()
  const allSchools = getSchools(expansions)
  const schoolKeys = Object.keys(allSchools)
  const {
    schoolAdjustment: {
      aligned,
      opposed,
    }
  } = spellData[schoolName]

  const specificSpells = [ schoolName, ...aligned, ...opposed ]
  const neutral = neutralSchools(specificSpells)

  const alignments = {
    0: [ schoolName ],
    2: intersection(aligned, schoolKeys),
    4: intersection(neutral, schoolKeys),
    6: intersection(opposed, schoolKeys),
  }

  return <div className="inline-block">
    <div
      className="flex flex-col m-2 print:m-0 w-64 aspect-spell-card bg-cover relative border border-solid border-black box-content"
    >
      <div className="mx-2 h-8 flex justify-around items-center">
        <div className="">{schoolName}</div>
      </div>

      <div className="flex flex-row justify-around">
        {Object.keys(alignments).map(key =>
          <div key={key} className="flex flex-col p-1">
            <div className="flex text-lg my-1">
              <span className="text-md">+</span>
              <span className="text-3xl">{key}</span>
            </div>
            {alignments[key].map(otherSchool =>
              <div key={otherSchool} className="my-1 w-8 h-8 relative">
                <Image src={getSchoolIcon(otherSchool)} alt={otherSchool} layout="fill" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
}

export default AlignmentReferenceCard
