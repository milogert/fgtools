import Box from './Box'
import EntryLine from './EntryLine'
import Stat from './Stat'
import StatLine from './StatLine'

const SecondInCommand = ({ thickBorders }) =>
  <Box className="second-in-command mb-1" thickBorders={thickBorders}>
    <div className="title">
      <span className="mr-4">2nd In Command</span>
      <Stat stat="Wounds" thickBorders={thickBorders} />
    </div>
    <div><EntryLine thickBorders={thickBorders}>Name</EntryLine></div>
    <StatLine thickBorders={thickBorders} />
    <div className="h-24">
      Items
    </div>

    <div className="h-16">
      Injuries
    </div>
  </Box>

export default SecondInCommand
