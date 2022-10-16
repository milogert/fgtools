const classnames = require('classnames')
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
      enabled: false,
      vampireWizard: false,
    },
    intoTheBreedingPits: {
      label: "Into the Breeding Pits",
      enabled: false,
    },
  })

  const [ showPreview, setShowPreview ] = useState(true)
  const [ hasCaptain, setHasCaptain ] = useState(false)
  const [ thickBorders, setThickBorders ] = useState(false)
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
    <div className="flex justify-between items-center">
      <h1 className={`print:hidden text-4xl`}>Frostgrave Character Sheet</h1>
      <div>Find a bug? <a className="underline text-blue-500" href="https://github.com/milogert/frostgrave-sheet/issues/new">File it here!</a></div>
    </div>

    <Config
      allowCustomSchools={{ get: allowCustomSchools, set: setAllowCustomSchools }}
      customSchoolsText={{ get: customSchoolsText, set: setCustomSchoolsText }}
      expansions={{ get: expansions, set: setExpansions }}
      hasCaptain={{ get: hasCaptain, set: setHasCaptain }}
      showPreview={{ get: showPreview, set: setShowPreview }}
      soldierCount={{ get: soldierCount, set: setSoldierCount }}
      thickBorders={{ get: thickBorders, set: setThickBorders }}
    />

    {showPreview && <>
      <div className="figures printing print:m-auto grid grid-cols-12 gap-1">
        <div className="figures-main col-span-5 flex flex-col">
          <Wizard thickBorders={thickBorders} />
          { expansions.bloodLegacy.vampireWizard
            ? <SecondInCommand thickBorders={thickBorders} />
            : <Apprentice thickBorders={thickBorders} />
          }
          { hasCaptain
            ? <Captain thickBorders={thickBorders} />
            : <div className={classnames(
                'box flex-grow',
                { 'border': !thickBorders, 'border-2': thickBorders}
              )}>Notes</div>
          }
        </div>
        <div className="figures-soldiers col-span-7 flex flex-col">
          {
            Array(Math.min(soldierCount, 9))
              .fill()
              .map((_, idx) =>
                <Soldier key={idx} thickBorders={thickBorders} />
              )
          }
        </div>
      </div>

      <PageBreak />

      { soldierCount > 9 && <>
        <div className="figures printing print:m-auto grid grid-cols-12 gap-1">
          <div className="figures-notes col-span-5 flex flex-col">
            <div className={classnames(
              'box flex-grow',
              { 'border': !thickBorders, 'border-2': thickBorders}
            )}>Notes</div>
          </div>
          <div className="figures-soldiers col-span-7">
            {
              Array(soldierCount - 9)
                .fill()
                .map((_, idx) =>
                  <Soldier key={idx} thickBorders={thickBorders} />
                )
            }
          </div>
        </div>

        <PageBreak />
      </>}

      {schools.length <= 10 &&
        <div className="flex flex-col printing print:m-auto">
          <div className="schools-overflow grid grid-cols-2 gap-1">
            {schools
              .map(name => <School
                key={name}
                name={name}
                spells={allSchools[name]}
                thickBorders={thickBorders}
              />)
            }
          </div>

          <Notes thickBorders={thickBorders} />
        </div>
      }

      {schools.length > 10 && <>
        <div className="flex flex-col printing print:m-auto">
          <div className="schools-overflow grid grid-cols-2 gap-1">
            {schools
              .slice(0, 10)
              .map(name => <School
                key={name}
                name={name}
                spells={allSchools[name]}
                thickBorders={thickBorders}
              />)
            }
          </div>

          <Notes thickBorders={thickBorders} />
        </div>

        <PageBreak />

        <div className="flex flex-col printing print:m-auto">
          <div className="schools-overflow grid grid-cols-2 gap-1">
            {schools
              .slice(10, schools.length)
              .map(name => <School
                key={name}
                name={name}
                spells={allSchools[name]}
                thickBorders={thickBorders}
              />)
            }
          </div>

          <Notes thickBorders={thickBorders} />
        </div>
      </>}
    </>}
  </>
}

export default HomePage
