const { assocPath, compose } = require('ramda')
const { useState, useEffect } = require('react')

const cls = require('../styles/page.module.scss')
const clsUtils = require('../styles/utils.module.scss')
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

  const [ hasCaptain, setHasCaptain ] = useState(true)
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
    <div className={`${clsUtils.noPrint} ${cls.header}`}>Frostgrave Character Sheet</div>

    <Config
      expansions={{ get: expansions, set: setExpansions }}
      hasCaptain={{ get: hasCaptain, set: setHasCaptain }}
      soldierCount={{ get: soldierCount, set: setSoldierCount }}
      allowCustomSchools={{ get: allowCustomSchools, set: setAllowCustomSchools }}
      customSchoolsText={{ get: customSchoolsText, set: setCustomSchoolsText }}
    />

    <div className={cls.figures}>
      <div className={cls.left}>
        <Wizard />
        { expansions.bloodLegacy.vampireWizard ? <SecondInCommand /> : <Apprentice />}
        { hasCaptain
          ? <Captain />
          : <div className={`${clsUtils.box} ${cls.notes}`}>Notes</div>
        }
      </div>
      <div className={cls.right}>
        {
          Array(Math.min(soldierCount, 9)).fill().map((_, idx) => <Soldier key={idx} />)
        }
      </div>
    </div>

    <PageBreak />

    { soldierCount > 9 && <>
      <div className={cls.figures}>
        <div className={cls.left}>
          <div className={`${clsUtils.box} ${cls.notes}`}>Notes</div>
        </div>
        <div className={cls.right}>
          {
            Array(soldierCount - 9).fill().map((_, idx) => <Soldier key={idx} />)
          }
        </div>
      </div>
      <PageBreak />
    </>}

    <div className={cls.spellsAndNotes}>
      <div className={schoolCount > 10 ? cls.top : cls.left}>
        {schools
          .slice(0, 10)
          .map(name => <School key={name} name={name} spells={allSchools[name]} />)
        }
      </div>
      {schoolCount <= 10 && <div className={cls.right}><Notes onRight /></div>}
    </div>

    {schoolCount > 10 && <>
      <PageBreak />
      <div className={cls.spellsAndNotes}>
        <div className={cls.top}>
          {schools
            .slice(10, schoolCount)
            .map(name => <School key={name} name={name} spells={allSchools[name]} />)
          }
        </div>
      </div>
    </>}

    {schoolCount > 10 && <div className={`${cls.spellsAndNotes} ${cls.bottom}`}>
      <Notes onBottom />
    </div>}
  </>
}

export default HomePage
