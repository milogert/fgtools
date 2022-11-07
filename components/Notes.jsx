import Box from './Box'

const NOTES = [
  'Base',
  'Vault, Treasury',
  'Grimoires, Scrolls, Potions',
]

const Notes = ({ thickBorders }) =>
  <div className="flex mt-1 flex-grow">
    {NOTES.map(name =>
      <Box
        key={name}
        className="flex-grow mr-1 last:mr-0 mb-1 last:mb-0 h-28 print:h-auto"
        thickBorders={thickBorders}
      >
        {name}
      </Box>
    )}
  </div>

export default Notes
