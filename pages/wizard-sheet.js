import classnames from 'classnames'
import { useEffect, useMemo, useState } from 'react'

import {
  getSchools,
  parseCustomSchools,
} from '../lib/utils'
import { EXPANSION_BLOOD_LEGACY } from '../lib/constants'

import Apprentice from '../components/wizardSheet/Apprentice'
import Box from '../components/wizardSheet/Box'
import Captain from '../components/wizardSheet/Captain'
import Config from '../components/wizardSheet/Config'
import ExperienceChecks from '../components/wizardSheet/ExperienceChecks'
import Notes from '../components/wizardSheet/Notes'
import PageBreak from '../components/PageBreak'
import School from '../components/wizardSheet/School'
import SecondInCommand from '../components/wizardSheet/SecondInCommand'
import Soldier from '../components/wizardSheet/Soldier'
import Wizard from '../components/wizardSheet/Wizard'
import { useExpansion, useExpansionContext } from "../context/expansions"

const WizardSheet = () => {
  const { expansions } = useExpansionContext()
  const [ allSchools, setAllSchools ] = useState(getSchools(expansions))
  const [ allowCustomSchools, setAllowCustomSchools ] = useState(false)
  const [ customSchoolsText, setCustomSchoolsText ] = useState(null)
  const [ expChecks, setExpChecks ] = useState(true)
  const [ hasCaptain, setHasCaptain ] = useState(false)
  const [ showPreview, setShowPreview ] = useState(true)
  const [ showSpellDetails, setShowSpellDetails ] = useState(true)
  const [ soldierCount, setSoldierCount ] = useState(9)
  const [ thickBorders, setThickBorders ] = useState(false)
  const bloodLegacy = useExpansion(EXPANSION_BLOOD_LEGACY)

  useEffect(() => {
    setAllSchools({
      ...getSchools(expansions),
      ...(allowCustomSchools ? parseCustomSchools(customSchoolsText) : {}),
    })
  }, [ allowCustomSchools, customSchoolsText, expansions ])

  const schools = useMemo(() => Object.keys(allSchools).sort(), [ allSchools ])
  const schoolCount = schools.length

  return <>
    <div className="print:hidden flex justify-between items-center">
      <h2 className="text-3xl">Wizard Sheet</h2>
    </div>

    <Config
      allowCustomSchools={{ get: allowCustomSchools, set: setAllowCustomSchools }}
      customSchoolsText={{ get: customSchoolsText, set: setCustomSchoolsText }}
      expChecks={{ get: expChecks, set: setExpChecks }}
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
          { bloodLegacy.enabled
            ? <SecondInCommand thickBorders={thickBorders} />
            : <Apprentice thickBorders={thickBorders} />
          }
          { hasCaptain
            ? <Captain thickBorders={thickBorders} />
            : <Box
              className="flex flex-col flex-grow"
              thickBorders={thickBorders}
            >
              <div className="flex-grow">Notes</div>
              {expChecks && <ExperienceChecks />}
            </Box>
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

      {schoolCount <= 12 &&
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

            {schoolCount % 3 > 0 &&
              <Box
                className={schoolCount % 3 === 1 ? 'col-span-2' : 'col-span-1'}
                thickBorders={thickBorders}
              >
                <div className="flex-grow">Misc Notes</div>
              </Box>
            }
          </div>

          <Notes thickBorders={thickBorders} />
        </div>
      }

      {schoolCount > 12 && <>
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

            {schools.slice(12, schoolCount).length % 3 > 0 &&
              <Box
                className={schoolCount % 3 === 1 ? 'col-span-2' : 'col-span-1'}
                thickBorders={thickBorders}
              >
                <div className="flex-grow">Misc Notes</div>
              </Box>
            }
          </div>
        </div>

        <PageBreak />

        <div className="flex flex-col printing print:m-auto">
          <div className="schools-overflow grid grid-cols-3 gap-1">
            {schools
              .slice(15, schoolCount)
              .map(name => <School
                key={name}
                name={name}
                spells={allSchools[name]}
                thickBorders={thickBorders}
                showSpellDetails={showSpellDetails}
              />)
            }

            {schools.slice(15, schoolCount).length % 3 > 0 &&
              <Box
                className={schoolCount % 3 === 1 ? 'col-span-2' : 'col-span-1'}
                thickBorders={thickBorders}
              >
                <div className="flex-grow">Misc Notes</div>
              </Box>
            }
          </div>

          <Notes thickBorders={thickBorders} />
        </div>
      </>}
    </>}
  </>
}

export default WizardSheet
