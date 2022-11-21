import classNames from "classnames"

import Box from './Box'
import EntryLine from './EntryLine'
import StatLine from './StatLine'

const Soldier = ({ thickBorders }) =>
  <Box
    className='soldier mb-1 last:mb-0 flex-grow flex flex-col justify-between'
    thickBorders={thickBorders}
  >
    <div className="soldier-top flex items-center">
      <div className={classNames(
        "h-4 w-4 mr-2 border-black",
        { 'border': !thickBorders, 'border-2': thickBorders }
      )} />
      <EntryLine thickBorders={thickBorders}>Name</EntryLine>
      <EntryLine thickBorders={thickBorders}>
        <div className="flex justify-between items-center">
          <span>Type</span>

          <div className="flex justify-between items-center">
            <span className="text-sm mr-1">Specialist</span>
            <div className={classNames(
              "h-3 w-3 border-black",
              { 'border': !thickBorders, 'border-2': thickBorders }
            )} />
          </div>
        </div>
      </EntryLine>
    </div>
    <StatLine thickBorders={thickBorders} />
    <div className="soldier-bottom flex items-center">
      <EntryLine thickBorders={thickBorders}>Eqmt</EntryLine>
      <EntryLine thickBorders={thickBorders}>Item</EntryLine>
    </div>
  </Box>

export default Soldier
