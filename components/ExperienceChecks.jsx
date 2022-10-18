const { range } = require('ramda')

const ExperienceRow = ({ name, boxes }) =>
    <div
      className="even:bg-gray-300 flex justify-between items-center p-1"
    >
      <div className="text-xs">{name}</div>
      <div className="flex">
        {range(0, boxes).map(i =>
          <div
            key={`box-${i}`}
            className="h-3 w-3 border border-black mr-1 last:mr-0"
          />
        )}
      </div>
    </div>



const ExperienceChecks = () => {
  return (
    <div className="border-t-black border-t">
      <div className="ml-1 text-sm">Experience Checks</div>

      <ExperienceRow name="Wizard Participated (40xp)" boxes={1} />
      <ExperienceRow name="Failed Cast + Dmg (5xp)" boxes={11} />
      <ExperienceRow name="Successful Cast (10xp)" boxes={11} />
      <ExperienceRow name="Treasure Secured (40xp)" boxes={11} />
      <ExperienceRow name="Monsters Slain (5xp)" boxes={11} />
    </div>
  )
}

module.exports = ExperienceChecks
