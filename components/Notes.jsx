const titleCase = str => {
  const split = str.split('')
  split[0] = split[0].toUpperCase()
  return split.join('')
}

const NotesBox = ({ className, name }) =>
  <div key={name} className={className}>{titleCase(name)}</div>

const NOTES = {
  'base': { className: 'h-40' },
  'vault': { className: 'h-32' },
  'grimoires': { className: 'h-60' },
  'scrolls': { className: 'h-48' },
  'potions': { className: 'h-36' },
  'treasury': { className: 'h-16' },
}

const Notes = ({ onBottom, onRight }) => {
  const classes = [
    'box flex-grow',
    onBottom ? 'h-28 mb-0' : '',
    onRight ? 'w-full' : '',
  ].join(' ')

  return Object.keys(NOTES).map(name =>
    <NotesBox
      key={name}
      className={`${classes} ${onBottom ? '' : NOTES[name].className}`}
      name={name}
    />
  )
}

module.exports = Notes
