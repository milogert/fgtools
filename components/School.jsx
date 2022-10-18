const classnames = require('classnames')

const Spell = ({ name, details }) =>
  <div className="flex items-center border-b border-black border-dotted text-xs">
    <div className="w-2 h-2 border border-black mr-1" />
    <div className="flex-grow">{name}</div>
    {details && <>
      <div className="w-4 mr-3 flex justify-center">{details.range}</div>
      <div className="w-2 flex justify-center">{details.castingNumber}</div>
      <div className="text-gray-100 w-10 h-4 flex justify-center items-center">
        <div>+/-</div>
      </div>
      <div className="text-gray-100 w-10 h-4 flex justify-center items-center">
        <div>Total</div>
      </div>
    </>}
  </div>

const School = ({ name, spells, thickBorders, showSpellDetails }) =>
  <div className={classnames(
    'school box grid grid-cols-1 grid-flow-row-dense gap-1 w-full m-0 pt-0',
    { 'border': !thickBorders, 'border-2': thickBorders}
  )}>
    <div className="flex justify-between">
      <div className="school-header text-lg h-8">{name}</div>
      <div className="flex justify-end items-center text-sm">
        Modifier
        <div className={classnames(
          'w-10 h-6 ml-2 border-black',
          { 'border': !thickBorders, 'border-2': thickBorders}
        )} />
      </div>
    </div>
    {Object.keys(spells)
      .sort()
      .map((name, idx) =>
        <Spell
          key={`${idx}-${name}`}
          name={name}
          details={showSpellDetails && spells[name]}
        />
      )
    }
  </div>

module.exports = School
