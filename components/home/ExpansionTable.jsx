const expansionData = [
  { name: 'Core',                   released: true, owned: true,  status: true },
  { name: 'Thaw of the Lich Lord',  released: true, owned: true,  status: true },
  { name: 'Into the Breeding Pits', released: true, owned: true,  status: true },
  { name: 'Forgotton Pacts',        released: true, owned: false, status: false },
  { name: 'Frostgrave Folio',       released: true, owned: true,  status: true },
  { name: 'Maze of Malacor',        released: true, owned: false, status: false },
  { name: 'The Grimoire',           released: true, owned: false, status: false },
  { name: 'Wizards\' Conclave',     released: true, owned: true,  status: true },
  { name: 'Perilous Dark',          released: true, owned: true,  status: true },
  { name: 'The Red King',           released: true, owned: true,  status: true },
  { name: 'Blood Legacy',           released: true, owned: false, status: 'I have spell names but no details.' },
  { name: 'Fireheart',              released: true, owned: false, status: false },
  { name: 'The Wildwoods',          released: 2023, owned: false, status: false },
]

const ExpansionRow = ({ name, released, owned, status }) =>
  <tr className="even:bg-gray-300">
    <td>{name}</td>
    <td>{released === true ? '✅' : `❌ (${released})`}</td>
    <td>{owned === true ? '✅' : `❌`}</td>
    <td>{(typeof status) === 'string' ? status : (status ? '✅' : `❌`) }</td>
  </tr>

const ExpansionTable = () =>
  <table className="table-auto w-full">
    <thead>
      <tr className="font-bold">
        <td>Expansion</td>
        <td>Released?</td>
        <td>Owned?</td>
        <td>Implementation Status</td>
      </tr>
    </thead>
    <tbody>
      {expansionData.map(({ name, released, owned, status }) =>
        <ExpansionRow
          key={name}
          name={name}
          owned={owned}
          released={released}
          status={status}
        />
      )}
    </tbody>
  </table>

export default ExpansionTable
