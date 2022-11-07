import classNames from "classnames"

const EntryLine = ({ children, thickBorders }) =>
  <div 
    className={classNames(
      'entry-line border-black border-dotted flex-grow mr-2 last:mr-0 leading-7',
      { 'border-b': !thickBorders, 'border-b-2': thickBorders }
    )}
  >
    {children}
  </div>

export default EntryLine
