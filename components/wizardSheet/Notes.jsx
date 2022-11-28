import Box from './Box'
import Stat from './Stat'

const NOTES = [
  { title: 'Base' },
  {
    title: 'Vault (Treasury, Items, Grimoires, Scrolls, Potions)',
    className: 'col-span-2',
    extraFields: [ 'GP' ],
  },
]

const Notes = ({ thickBorders }) =>
  <div className="grid grid-cols-3 gap-1 mt-1 flex-grow">
    {NOTES.map(({ title, className = '', extraFields }) =>
      <Box
        key={title}
        className={`flex-grow flex justify-between h-28 print:h-auto ${className}`}
        thickBorders={thickBorders}
      >
        <span>{title}</span>
        {extraFields && <div className="justify-end items-end">
          {extraFields.map(field => <div key={field} className="w-24">
            <Stat stat={field} thickBorders={thickBorders} />
          </div>)}
        </div>}
      </Box>
    )}
  </div>

export default Notes
