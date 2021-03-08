const { useState } = require('react')

const schoolToSpells = school => {
  switch (school) {
    case 'Chronomancer':
      return [ 'Crumble', 'Decay', 'Fast Act', 'Fleet Feet', 'Petrify', 'Slow', 'Time Store', 'Time Walk' ]
    case 'Elementalist':
      return [ 'Call Storm', 'Destructive Sphere', 'Elemental Ball', 'Elemental Bolt', 'Elemental Hammer', 'Elemental Shield', 'Scatter Shot', 'Wall' ]
    case 'Enchanter':
      return [ 'Animate Construct', 'Control Construct', 'Embed Enchantment', 'Enchant Armour', 'Enchant Weapon', 'Grenade', 'Strength', 'Telekinesis' ]
    case 'Illusionist':
      return [ 'Blink', 'Beauty', 'Fool’s Gold', 'Glow', 'Illusionary Soldier', 'Invisibility', 'Teleport', 'Transpose' ]
    case 'Necromancer':
      return [ 'Animate Skull', 'Bone Dart', 'Bones of the Earth', 'Control Undead', 'Raise Zombie', 'Spell Eater', 'Steal Health', 'Strike Dead' ]
    case 'Sigilist':
      return [ 'Absorb Knowledge', 'Bridge', 'Draining Word', 'Explosive Rune', 'Furious Quill', 'Power Word', 'Push', 'Write Scroll' ]
    case 'Soothsayer':
      return [ 'Awareness', 'Combat Awareness', 'Mind Control', 'Mind Lock', 'Reveal Secret', 'Suggestion', 'True Sight', 'Wizard Eye' ]
    case 'Summoner':
      return [ 'Control Demon', 'Imp', 'Leap', 'Plague of Insects', 'Planar Tear', 'Plane Walk', 'Possess', 'Summon Demon' ]
    case 'Thaumaturge':
      return [ 'Banish', 'Blinding Light', 'Circle of Protection', 'Destroy Undead', 'Dispel', 'Heal', 'Miraculous', 'Shield' ]
    case 'Witch':
      return [ 'Animal Companion', 'Brew Potion', 'Control Animal', 'Curse', 'Familiar', 'Fog', 'Mud', 'Poison Dart' ]
    default: [ 'none' ]
  }
}

const Stat = ({ stat, abbrivate = false }) =>
  <div className={`stat ${abbrivate && 'abbrivate'}`}>{abbrivate ? stat[0] : stat}</div>

const Stats = ({ stats, abbrivate = false }) => {
  return <div className={`stat-line grid grid-cols-${stats.length}`}>
    {stats.map(stat => <Stat stat={stat} abbrivate={abbrivate} />)}
  </div>
}

const StatLine = () => <Stats
  stats={[ 'Move', 'Fight', 'Shoot', 'Armor', 'Will', 'Health' ]}
  abbrivate
/>

const Wizard = () => {
  return <div className="box wizard">
    <div className="title">
      Wizard
      <Stat stat="Wounds" />
    </div>
    <div className="header"></div>
    <div className="entry-line">Name</div>
    <div className="entry-line">School</div>
    <Stats stats={[ 'Level', 'XP' ]} />

    <StatLine />

    <div className="free-form items">
      Items
    </div>

    <div className="free-form injuries">
      Injuries
    </div>
  </div>
}

const Apprentice = () => {
  return <div className="box apprentice">
    <div className="title">
      Apprentice
      <Stat stat="Wounds" />
    </div>
    <div className="entry-line">Name</div>
    <StatLine />
    <div className="free-form items">
      Items
    </div>

    <div className="free-form injuries">
      Injuries
    </div>
  </div>
}

const Captain = () => {
  return <div className="box captain">
    <div className="title">
      Captain
      <Stat stat="Wounds" />

    </div>
    <div className="entry-line">Name</div>
    <Stats stats={[ 'Level', 'XP' ]} />
    <StatLine />
    <div className="free-form items">
      Items
    </div>
    <div className="free-form tricks-of-the-trade">
      Tricks of the Trade
    </div>
    <div className="free-form injuries">
      Injuries
    </div>
  </div>
}

const Soldier = () => {
  return <div className="box soldier">
    <div className="line">
      <div className="entry-line">Name</div>
      <div className="entry-line">Type</div>
    </div>
    <StatLine />
    <div className="line">
      <div className="entry-line">Equipment</div>
      <div className="entry-line">Item</div>
    </div>
  </div>
}

const School = ({ school }) => {
  return <div className="box school">
    <div className="header">{school}</div>
    {schoolToSpells(school).map(spell => <div className="spell">
      <div className="spell-name">{spell}</div>
      <div className="entry-line">Casting No.</div>
    </div>)}
  </div>
}

const PageBreak = () =>
  <div className="pagebreak">
    <div className="no-print mb-1 bg-gray-300 text-center text-2xl p-3">New page starts here</div>
  </div>


const HomePage = () => {
  const [ hasCaptain, setHasCaptain ] = useState(true)
  const [ soldierCount, setSoldierCount ] = useState(9)

  console.log(soldierCount)

  return <>
    <div className="no-print mb-4">
      <div className="text-4xl mb-2">Frostgrave Character Sheet</div>
      <div className="">
        <div className="form-row">
          <label for="captain">Captain?</label>
          <input
            id="captain"
            type="checkbox"
            checked={hasCaptain}
            onChange={() => setHasCaptain(!hasCaptain)}
          />
        </div>
        <div className="form-row">
          <label for="soldierCount">Soldier Count</label>
          <input
            id="soldierCount"
            type="number"
            value={soldierCount}
            onChange={e => setSoldierCount(parseInt(e.target.value))}
            max={18}
          />
        </div>
      </div>
    </div>
    <div className="front">
      <div className="left">
        <Wizard />
        <Apprentice />
        { hasCaptain || soldierCount > 9
          ? <Captain />
          : <div className="box notes flex-grow">Notes</div>
        }
      </div>
      <div className="right">
        {
          Array(Math.min(soldierCount, 9)).fill().map((_, idx) => <Soldier key={idx} />)
        }
      </div>
    </div>
    <PageBreak />
    { soldierCount > 9 && <>
      <div className="front">
        <div className="left">
          <div className="box notes flex-grow">Notes</div>
        </div>
        <div className="right">
          {
            Array(soldierCount - 9).fill().map((_, idx) => <Soldier key={idx} />)
          }
        </div>
      </div>
      <PageBreak />
    </>}
    <div className="back">
      <div className="left">
        <div className="box base">Base</div>
        <div className="box vault">Vault</div>
        <div className="box grimoires">Grimoires</div>
        <div className="box scrolls">Scrolls</div>
        <div className="box potions">Potions</div>
        <div className="box treasury">Treasury</div>
      </div>
      <div className="right">
        <School school="Chronomancer" />
        <School school="Elementalist" />
        <School school="Enchanter" />
        <School school="Illusionist" />
        <School school="Necromancer" />
        <School school="Sigilist" />
        <School school="Soothsayer" />
        <School school="Summoner" />
        <School school="Thaumaturge" />
        <School school="Witch" />
        <div className="notes"></div>
      </div>
    </div>
  </>
}

export default HomePage

