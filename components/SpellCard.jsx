import { getRange } from '../lib/utils'

const SpellHeader = ({ castingNumber, range, school, spellName }) => {
  return <div
    className="mx-2 h-12 relative flex items-center"
  >
    <div
      className="spell-header-icon flex justify-center align-center mr-1 w-10 text-xl"
    >
      <span>{school[0]}</span>
    </div>
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="spell-header-name flex-grow">{spellName}</div>
      <div className="spell-header-range flex-grow text-sm">{range}</div>
    </div>
    <div
      className="spell-header-casting-number flex justify-center align-center ml-1 w-10 text-center text-xl"
    >
      <span>{castingNumber}</span>
    </div>
  </div>
}

const SpellCard = props => {
  const {
    castingNumber,
    range,
    school,
    spellName,
    text,
  } = props

  const rangeText = getRange(range, 'long')

  return <div className="inline-block">
    <div
      className="flex flex-col m-2 print:m-0 w-64 aspect-spell-card bg-cover relative border border-solid border-black box-content"
    >
      <SpellHeader
        castingNumber={castingNumber}
        range={rangeText}
        school={school}
        spellName={spellName}
      />
      <div className="spell-text text-xs mx-1 mb-1">{text}</div>
    </div>
  </div>
}

export default SpellCard
