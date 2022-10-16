const classnames = require('classnames')

const School = ({ name, spells, thickBorders }) =>
  <div className={classnames(
    'captain box school grid grid-cols-2 grid-flow-row-dense gap-1 w-full m-0 pt-0',
    { 'border': !thickBorders, 'border-2': thickBorders}
  )}>
    <div className="school-header text-lg h-8">{name}</div>
    <div className="flex justify-end items-center text-sm">
      Casting Mod
      <div className={classnames(
        'w-10 h-6 ml-2 border-black',
        { 'border': !thickBorders, 'border-2': thickBorders}
      )} />
    </div>
    {spells
      .sort()
      .map(spell =>
        <div
          key={spell}
          className="school-spell flex items-center border-b border-black border-dotted"
        >
          <div className="w-3 h-3 border border-black mr-1" />
          <div className="text-sm ">{spell}</div>
        </div>
      )
    }
  </div>

module.exports = School
