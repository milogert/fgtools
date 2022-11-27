import Box from './Box'
import EntryLine from './EntryLine'
import StatLine from './StatLine'

const Apprentice = ({ thickBorders }) =>
  <Box className="apprentice mb-1" thickBorders={thickBorders}>
    <div className="title">
      <span className="mr-4">Apprentice</span>
      <div className="flex-grow text-lg">
        <EntryLine thickBorders={thickBorders}>Name</EntryLine>
      </div>
    </div>
    <StatLine thickBorders={thickBorders} />
    <div className="h-24">
      Items
    </div>

    <div className="h-16">
      Injuries
    </div>
  </Box>

export default Apprentice
