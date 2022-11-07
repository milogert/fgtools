import Box from './Box'
import EntryLine from './EntryLine'
import Stat from './Stat'
import Stats from './Stats'
import StatLine from './StatLine'

const Wizard = ({ thickBorders }) =>
  <Box className="wizard mb-1" thickBorders={thickBorders}>
    <div className="title">
      <span className="mr-4">Wizard</span>
      <Stat stat="Wounds" thickBorders={thickBorders} />
    </div>
    <div><EntryLine thickBorders={thickBorders}>Name</EntryLine></div>
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
