import Image from 'next/image'
import { getRange, getSchoolIcon } from '../../lib/utils'

const SpellHeader = ({ castingNumber, range, school, spellName }) =>
  <div className="mx-1 h-12 relative flex items-center">
    <div className="h-10 w-10 my-1 relative">
      <Image src={getSchoolIcon(school)} alt={`${school} icon`} layout="fill" />
    </div>
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="spell-header-name flex-grow">{spellName}</div>
      <div className="spell-header-range flex-grow text-sm">{range}</div>
    </div>
    <div className="flex justify-center align-center w-10 text-xl">
      <span>{castingNumber}</span>
    </div>
  </div>

const SpellCard = ({
  castingNumber,
  fullText,
  range,
  school,
  spellName,
  text,
}) =>
  <div
    className="flex flex-col m-2 print:m-0 w-64 aspect-spell-card bg-cover relative border border-solid border-black box-content"
  >
    <SpellHeader
      castingNumber={castingNumber}
      range={getRange(range, 'long')}
      school={school}
      spellName={spellName}
    />
    <div className="spell-text text-xs mx-1 mb-1">{fullText || text}</div>
  </div>

export default SpellCard
