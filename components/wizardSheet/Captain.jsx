import Box from './Box'
import EntryLine from './EntryLine'
import StatLine from './StatLine'
import Stats from './Stats'

const Captain = ({ thickBorders }) =>
  <Box className="captain flex-grow" thickBorders={thickBorders}>
    <div className="title">
      <span className="mr-4">Captain</span>
      <div className="flex-grow text-lg">
        <EntryLine thickBorders={thickBorders}>Name</EntryLine>
      </div>
    </div>
    <Stats stats={[ 'Level', 'XP' ]} thickBorders={thickBorders} />
    <StatLine thickBorders={thickBorders} />
    <div className="h-24">
      Items
    </div>
    <div className="flex-grow">
      Tricks of the Trade
    </div>
    <div className="h-16">
      Injuries
    </div>
  </Box>

export default Captain
