import Box from './Box'

const NOTES = [
  { title: 'Base' },
  {
    title: 'Vault (Treasurey, Items, Grimoires, Scrolls, Potions)',
    className: 'col-span-2',
  },
]

const Notes = ({ thickBorders }) =>
  <div className="grid grid-cols-3 gap-1 mt-1 flex-grow">
    {NOTES.map(({ title, className = '' }) =>
      <Box
        key={title}
        className={`flex-grow mb-1 h-28 print:h-auto ${className}`}
        thickBorders={thickBorders}
      >
        {title}
      </Box>
    )}
  </div>

export default Notes
