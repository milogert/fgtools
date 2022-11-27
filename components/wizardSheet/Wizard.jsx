import Box from './Box'
import EntryLine from './EntryLine'
import Stats from './Stats'
import StatLine from './StatLine'

const Wizard = ({ thickBorders }) =>
  <Box className="wizard mb-1" thickBorders={thickBorders}>
    <div className="title flex">
      <span className="mr-4">Wizard</span>
      <div className="flex-grow text-lg">
        <EntryLine thickBorders={thickBorders}>Name</EntryLine>
      </div>
    </div>
    <div><EntryLine thickBorders={thickBorders}>School</EntryLine></div>

    <Stats stats={[ 'Level', 'XP' ]} thickBorders={thickBorders} />

    <StatLine thickBorders={thickBorders} />

    <div className="h-24">
      Items
    </div>
    <div className="h-16">
      Injuries
    </div>
  </Box>

export default Wizard
