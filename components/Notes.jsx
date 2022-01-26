const { default: classNames } = require("classnames")

const cls = require('../styles/notes.module.scss')
const clsUtils = require('../styles/utils.module.scss')

const titleCase = str => {
  const split = str.split('')
  split[0] = split[0].toUpperCase()
  return split.join('')
}

const NotesBox = ({ className, name }) =>
  <div key={name} className={`${className} ${cls[name]}`}>{titleCase(name)}</div>

const NOTES = [
  "base",
  "vault",
  "grimoires",
  "scrolls",
  "potions",
  "treasury",
]

const Notes = ({ onBottom, onRight }) => {
  const boxClass = classNames([ clsUtils.box, cls.notes ], {
    [cls.bottom]: onBottom,
    [cls.right]: onRight,
  })

  return NOTES.map(name => <NotesBox key={name} className={boxClass} name={name} />)
}

module.exports = Notes
