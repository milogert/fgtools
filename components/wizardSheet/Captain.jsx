import Box from './Box'
import EntryLine from './EntryLine'
import Stat from './Stat'
import StatLine from './StatLine'
import Stats from './Stats'

const Captain = ({ thickBorders }) =>
  <Box className="captain" thickBorders={thickBorders}>
    <div className="title">
      <span className="mr-4">Captain</span>
      <Stat stat="Wounds" thickBorders={thickBorders} />
    </div>
    <div><EntryLine thickBorders={thickBorders}>Name</EntryLine></div>
    <Stats stats={[ 'Level', 'XP' ]} thickBorders={thickBorders} />
    <StatLine thickBorders={thickBorders} />
    <div className="h-24">
      Items
    </div>
    <div className="h-24">
      Tricks of the Trade
    </div>
    <div className="h-16">
      Injuries
    </div>
  </Box>

export default Captain
