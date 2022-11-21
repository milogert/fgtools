import { range } from 'ramda'

const ExperienceRow = ({ name, boxes }) =>
  <div
    className="even:bg-gray-300 flex justify-between items-center p-1"
  >
    <div className={`text-xs`}>{name}</div>
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
    <div className="">
      <div className="flex items-center ml-1 text-sm">
        <div className="w-4 border-t border-solid border-black" />
        <div className="mx-2">Experience Checks</div>
        <div className="flex-grow border-t border-solid border-black" />
      </div>

      <ExperienceRow name="Wizard Participated (40xp)" boxes={1} />
      <ExperienceRow name="Failed Cast + Dmg (5xp)" boxes={11} />
      <ExperienceRow name="Successful Cast (10xp)" boxes={11} />
      <ExperienceRow name="Treasure Secured (40xp)" boxes={11} />
      <ExperienceRow name="Monsters Slain (5xp)" boxes={11} />
      <ExperienceRow boxes={11} />
      <ExperienceRow boxes={11} />
      <ExperienceRow boxes={11} />
    </div>
  )
}

export default ExperienceChecks
