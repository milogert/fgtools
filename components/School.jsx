const School = ({ name, spells }) =>
  <div className="box school grid grid-cols-2 grid-flow-row-dense gap-1 w-full m-0 pt-0">
    <div className="school-header text-xl col-span-2 text-center h-8">{name}</div>
    {spells
      .sort()
      .map(spell => <div key={spell} className="school-spell flex items-center border-b-2 border-black border-dotted">
        <div className="font-bold text-sm w-28">{spell}</div>
      </div>)
    }
  </div>

module.exports = School
