import ChangelogEntry from '../ChangelogEntry'

const changelog = [
  {
    date: '2022-12-03',
    changes: [
      'Update school information for Blood Legacy.',
    ]
  },
  {
    date: '2022-12-02',
    changes: [
      'Save expansion state to browser.',
      'When navigating to other pages the menu closes.',
    ]
  },
  {
    date: '2022-11-28',
    changes: [
      'Corrected a bunch of spelling errors.',
      'Fixed printing issues.',
      'Added gold piece box in the treasury.',
    ]
  },
  {
    date: '2022-11-27',
    changes: [
      'Update Vampire spells to include text and casting numbers.',
      'Added Fire Giant school of magic.',
    ]
  },
  {
    date: '2022-11-26',
    changes: [
      'Add Thaw of the Lich Lord spells.',
      'Add an All Schools spell card selection.',
      'Fix expansion table.',
      'Wizard sheet excludes unlearnable schools.',
    ]
  },
  {
    date: '2022-11-21',
    changes: [
      'Finish spell card implementation.',
      'Re-arrange code for better organization.',
      'Add favicon.',
      'Add expansion table',
      'Finish implementing stray things.',
    ]
  },
  {
    date: '2022-11-19',
    changes: [
      'Makes slightly more mobile friendly.',
      'Sets up for school adjustment card.',
    ]
  },
  {
    date: '2022-11-06',
    changes: [
      'Adds Spell Cards.',
      'Makes expansions app-wide.',
    ]
  },
  {
    date: '2022-10-27',
    changes: [
      'Initial release',
    ]
  },
]

const Changelog = () =>
  changelog.map(({ date, changes }) =>
    <ChangelogEntry key={date} title={date}>
      {changes.map(change => <li key={change}>{change}</li>)}
    </ChangelogEntry>
  )

export default Changelog
