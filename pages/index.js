const classnames = require('classnames')
const { assocPath, compose } = require('ramda')
const { useEffect, useMemo, useState } = require('react')

const utils = require('../lib/utils')

const Apprentice = require('../components/Apprentice')
const Captain = require('../components/Captain')
const Config = require('../components/Config')
const ExperienceChecks = require('../components/ExperienceChecks')
const Notes = require('../components/Notes')
const PageBreak = require('../components/PageBreak')
const School = require('../components/School')
const SecondInCommand = require('../components/SecondInCommand')
const Soldier = require('../components/Soldier')
const Wizard = require('../components/Wizard')

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

  const [ allSchools, setAllSchools ] = useState(utils.getSchools(expansions))
  const [ allowCustomSchools, setAllowCustomSchools ] = useState(false)
  const [ customSchoolsText, setCustomSchoolsText ] = useState(null)
  const [ expChecks, setExpChecks ] = useState(true)
  const [ hasCaptain, setHasCaptain ] = useState(false)
  const [ showPreview, setShowPreview ] = useState(true)
  const [ showSpellDetails, setShowSpellDetails ] = useState(true)
  const [ soldierCount, setSoldierCount ] = useState(9)
  const [ thickBorders, setThickBorders ] = useState(false)

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

  const schools = useMemo(() => Object.keys(allSchools).sort(), [ allSchools ])

  return <>
    <div className="print:hidden flex justify-between items-center">
      <h1 className="text-4xl">Frostgrave Character Sheet</h1>
      <div>Find a bug? <a className="underline text-blue-500" href="https://github.com/milogert/frostgrave-sheet/issues/new">File it here!</a></div>
    </div>

    <Config
      allowCustomSchools={{ get: allowCustomSchools, set: setAllowCustomSchools }}
      customSchoolsText={{ get: customSchoolsText, set: setCustomSchoolsText }}
      expChecks={{ get: expChecks, set: setExpChecks }}
      expansions={{ get: expansions, set: setExpansions }}
      hasCaptain={{ get: hasCaptain, set: setHasCaptain }}
      showSpellDetails={{ get: showSpellDetails, set: setShowSpellDetails }}
      showPreview={{ get: showPreview, set: setShowPreview }}
      soldierCount={{ get: soldierCount, set: setSoldierCount }}
      thickBorders={{ get: thickBorders, set: setThickBorders }}
    />

    {showPreview && <>
      <div className="figures printing print:mx-auto print:mt-2 grid grid-cols-12 gap-1">
        <div className="figures-main col-span-5 flex flex-col">
          <Wizard thickBorders={thickBorders} />
          { expansions.bloodLegacy.vampireWizard
            ? <SecondInCommand thickBorders={thickBorders} />
            : <Apprentice thickBorders={thickBorders} />
          }
          { hasCaptain
            ? <Captain thickBorders={thickBorders} />
            : <div className={classnames(
                'box flex flex-col flex-grow',
                { 'border': !thickBorders, 'border-2': thickBorders}
              )}>
                <div className="flex-grow">Notes</div>
                {expChecks && <ExperienceChecks />}
              </div>
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
        <div className="figures printing print:mx-auto print:mt-2 grid grid-cols-12 gap-1">
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

      {schools.length <= 12 &&
        <div className="flex flex-col printing print:mx-auto print:mt-2">
          <div className="schools-overflow grid grid-cols-3 gap-1">
            {schools
              .map(name => <School
                key={name}
                name={name}
                spells={allSchools[name]}
                thickBorders={thickBorders}
                showSpellDetails={showSpellDetails}
              />)
            }

            {schools.length % 3 > 0 &&
              <div className={classnames(
                'box',
                schools.length % 3 === 1
                  ? 'col-span-2'
                  : 'col-span-1',
                { 'border': !thickBorders, 'border-2': thickBorders}
              )}>
                  <div className="flex-grow">Misc Notes</div>
              </div>
            }
          </div>

          <Notes thickBorders={thickBorders} />
        </div>
      }

      {schools.length > 12 && <>
        <div className="flex flex-col printing print:mx-auto print:mt-2o">
          <div className="schools-overflow grid grid-cols-3 gap-1">
            {schools
              .slice(0, 15)
              .map(name => <School
                key={name}
                name={name}
                spells={allSchools[name]}
                thickBorders={thickBorders}
                showSpellDetails={showSpellDetails}
              />)
            }

            {schools.slice(12, schools.length).length % 3 > 0 &&
              <div className={classnames(
                'box',
                schools.length % 3 === 1
                  ? 'col-span-2'
                  : 'col-span-1',
                { 'border': !thickBorders, 'border-2': thickBorders}
              )}>
                  <div className="flex-grow">Misc Notes</div>
              </div>
            }
          </div>
        </div>

        <PageBreak />

        <div className="flex flex-col printing print:m-auto">
          <div className="schools-overflow grid grid-cols-3 gap-1">
            {schools
              .slice(15, schools.length)
              .map(name => <School
                key={name}
                name={name}
                spells={allSchools[name]}
                thickBorders={thickBorders}
                showSpellDetails={showSpellDetails}
              />)
            }

            {schools.slice(15, schools.length).length % 3 > 0 &&
              <div className={classnames(
                'box',
                schools.length % 3 === 1
                  ? 'col-span-2'
                  : 'col-span-1',
                { 'border': !thickBorders, 'border-2': thickBorders}
              )}>
                  <div className="flex-grow">Misc Notes</div>
              </div>
            }
          </div>

          <Notes thickBorders={thickBorders} />
        </div>
      </>}
    </>}
  </>
}

export default HomePage
