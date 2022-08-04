const { assocPath, compose } = require('ramda')
const { useState, useEffect } = require('react')

const utils = require('../lib/utils')

const Apprentice = require('../components/Apprentice')
const Config = require('../components/Config')
const Wizard = require('../components/Wizard')
const School = require('../components/School')
const Soldier = require('../components/Soldier')
const Captain = require('../components/Captain')
const SecondInCommand = require('../components/SecondInCommand')
const Notes = require('../components/Notes')
const PageBreak = require('../components/PageBreak')

const HomePage = () => {
  const [ expansions, setExpansions ] = useState({
    bloodLegacy: {
      label: "Blood Legacy",
      enabled: true,
      vampireWizard: false,
    },
    intoTheBreedingPits: {
      label: "Into the Breeding Pits",
      enabled: true,
    },
  })

  const [ hasCaptain, setHasCaptain ] = useState(false)
  const [ soldierCount, setSoldierCount ] = useState(9)
  const [ allowCustomSchools, setAllowCustomSchools ] = useState(false)
  const [ customSchoolsText, setCustomSchoolsText ] = useState(null)
  const [ allSchools, setAllSchools ] = useState(utils.getSchools(expansions))

  useEffect(() => {
    if (!expansions.bloodLegacy.enabled && expansions.bloodLegacy.vampireWizard) {
      compose(
        setExpansions,
        assocPath([ 'bloodLegacy', 'vampireWizard' ], false)
      )(expansions)
    }
  }, [ expansions ])

  useEffect(() => {
    setAllSchools({
      ...utils.getSchools(expansions),
      ...(allowCustomSchools ? utils.parseCustomSchools(customSchoolsText) : {}),
    })
  }, [ allowCustomSchools, customSchoolsText, expansions ])

  const schools = Object.keys(allSchools).sort()
  const schoolCount = schools.length

  return <>
    <h1 className={`noPrint text-4xl`}>Frostgrave Character Sheet</h1>

    <Config
      expansions={{ get: expansions, set: setExpansions }}
      hasCaptain={{ get: hasCaptain, set: setHasCaptain }}
      soldierCount={{ get: soldierCount, set: setSoldierCount }}
      allowCustomSchools={{ get: allowCustomSchools, set: setAllowCustomSchools }}
      customSchoolsText={{ get: customSchoolsText, set: setCustomSchoolsText }}
    />

    <div className="figures grid grid-cols-12 gap-1">
      <div className="figures-main col-span-5 flex flex-col">
        <Wizard />
        { expansions.bloodLegacy.vampireWizard ? <SecondInCommand /> : <Apprentice />}
        { hasCaptain
          ? <Captain />
          : <div className={`box flex-grow`}>Notes</div>
        }
      </div>
      <div className="figures-soldiers col-span-7">
        {
          Array(Math.min(soldierCount, 9)).fill().map((_, idx) => <Soldier key={idx} />)
        }
      </div>
    </div>

    <PageBreak />

    { soldierCount > 9 && <>
      <div className="figures grid grid-cols-12 gap-1">
        <div className="figures-notes col-span-5 flex flex-col">
          <div className={`box flex-grow`}>Notes</div>
        </div>
        <div className="figures-soldiers col-span-7">
          {
            Array(soldierCount - 9).fill().map((_, idx) => <Soldier key={idx} />)
          }
        </div>
      </div>
      <PageBreak />
    </>}

    <div className="spells grid grid-cols-12 gap-1">
      <div
        className={`spells-schools grid grid-cols-2 gap-1 ${schoolCount > 10 ? "col-span-12" : "col-span-9"}`}
      >
        {schools
          .slice(0, 10)
          .map(name => <School key={name} name={name} spells={allSchools[name]} />)
        }
      </div>
      {schoolCount <= 10 && <div className="spells-notes col-span-3"><Notes onRight /></div>}
    </div>

    {schoolCount > 10 && <>
      <PageBreak />
      <div className="spells-schools grid grid-cols-12 gap-1">
        <div className="schools-overflow col-span-12 grid grid-cols-2 gap-1">
          {schools
            .slice(10, schoolCount)
            .map(name => <School key={name} name={name} spells={allSchools[name]} />)
          }
        </div>
      </div>
    </>}

    {schoolCount > 10 && <div className="notes-bottom grid grid-cols-2 gap-1 mt-1">
      <Notes onBottom />
    </div>}
  </>
}

export default HomePage
