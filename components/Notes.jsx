const classnames = require('classnames')

const NotesBox = ({ className, name }) =>
  <div className={`${className} mb-1 last:mb-0 h-28 print:h-auto`}>{name}</div>

const NOTES = [
  'Base',
  'Vault, Treasury',
  'Grimoires, Scrolls, Potions',
]

const Notes = ({ thickBorders }) => {
  const classes = classnames(
    'box flex-grow mb-0 mr-1 last:mr-0',
    { 'border-2': thickBorders, 'border': !thickBorders },
  )

  return <div className="flex mt-1 flex-grow">
    {NOTES.map(name =>
      <NotesBox
        key={name}
        className={classes}
        name={name}
      />
    )}
  </div>
}

module.exports = Notes
