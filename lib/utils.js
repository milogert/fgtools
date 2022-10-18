const mEle = (value, predicate) =>
  predicate ? [ value ] : []

const mEnt = (key, value, predicate) =>
  predicate ? { [key]: value } : {}

const getSchools = config => {
  const {
    bloodLegacy: { enabled: bloodLegacy },
    intoTheBreedingPits: { enabled: intoTheBreedingPits },
  } = config

  const schools = {
    'Chronomancer': {
      'Crumble': { range: 'L', castingNumber: 10 },
      'Decay': { range: 'L', castingNumber: 12 },
      'Fast Act': { range: 'L', castingNumber: 8 },
      'Fleet Feet': { range: 'L', castingNumber: 10 },
      'Petrify': { range: 'L', castingNumber: 10 },
      'Slow': { range: 'L', castingNumber: 10 },
      'Time Store': { range: 'S', castingNumber: 14 },
      'Time Walk': { range: 'S', castingNumber: 14 },
      ...(mEnt('Slowfall', {}, intoTheBreedingPits)),
    },

    'Elementalist': {
      'Call Storm': { range: 'A', castingNumber: 12 },
      'Destructive Sphere': { range: 'A', castingNumber: 12 },
      'Elemental Ball': { range: 'L', castingNumber: 12 },
      'Elemental Bolt': { range: 'L', castingNumber: 12 },
      'Fremental Hammer': { range: 'L', castingNumber: 10 },
      'Elemental Shield': { range: 'S', castingNumber: 10 },
      'Scatter Shot': { range: 'L', castingNumber: 12 },
      'Wall': { range: 'L', castingNumber: 10 },
      ...(mEnt('Elemental Lash', {}, intoTheBreedingPits)),
    },

    'Enchanter': {
      'Animate Construct': { range: 'OB', castingNumber: 10 },
      'Control Construct': { range: 'L', castingNumber: 12 },
      'Embed Enchaniment': { range: 'OA', castingNumber: 14 },
      'Enchant Armor': { range: 'L', castingNumber: 8 },
      'Enchant Weapon': { range: 'L', castingNumber: 8 },
      'Grenade': { range: 'L', castingNumber: 10 },
      'Strengt': { range: 'L', castingNumber: 10 },
      'Telekinesis': { range: 'L', castingNumber: 10 },
    },

    'Illusionist': {
      'Beauty': { range: 'S', castingNumber: 10 },
      'Blink': { range: 'L', castingNumber: 12 },
      'Fools\' Gold': { range: 'L', castingNumber: 10 },
      'Glow': { range: 'L', castingNumber: 10 },
      'Illusionary Soldier': { range: 'OB/T', castingNumber: 12 },
      'Invisibility': { range: 'T', castingNumber: 12 },
      'Teleport': { range: 'S', castingNumber: 10 },
      'Transpose': { range: 'L', castingNumber: 12 },
      ...(mEnt('Flash', {}, intoTheBreedingPits)),
    },

    'Necromancer': {
      'Animate Skull': { range: 'L', castingNumber: 8 },
      'Bone Dart': { range: 'L', castingNumber: 10 },
      'Bones Of The Earth': { range: 'L', castingNumber: 10 },
      'Control Undead': { range: 'L', castingNumber: 12 },
      'Raise Zombie': { range: 'OB/T', castingNumber: 10 },
      'Spell Eater': { range: 'L', castingNumber: 12 },
      'Steal Health': { range: 'L', castingNumber: 10 },
      'Strike Dead': { range: 'L', castingNumber: 18 },
    },

    'Sigilist': {
      'Absorb Knowledge': { range: 'OA', castingNumber: 12 },
      'Bridge': { range: 'L', castingNumber: 10 },
      'Draining Word': { range: 'A', castingNumber: 14 },
      'ExpLive Rune': { range: 'L', castingNumber: 10 },
      'Furious Ouill': { range: 'L', castingNumber: 10 },
      'Power Word': { range: 'A', castingNumber: 14 },
      'Push': { range: 'L', castingNumber: 8 },
      'Write Scroll': { range: 'OA', castingNumber: 12 },
      ...(mEnt('Capture Incatation', {}, intoTheBreedingPits)),
    },

    'Soothsayer': {
      'Awareness': { range: 'OB', castingNumber: 12 },
      'Combat Awareness': { range: 'T', castingNumber: 12 },
      'Mind Control': { range: 'L', castingNumber: 12 },
      'Mind Lock': { range: 'L', castingNumber: 12 },
      'Reveal Secret': { range: 'OB', castingNumber: 12 },
      'Suggestion': { range: 'L', castingNumber: 12 },
      'True Sight': { range: 'S', castingNumber: 10 },
      'Wizard Eye': { range: 'L', castingNumber: 8 },
      ...(mEnt('Deflect', {}, intoTheBreedingPits)),
    },

    'Summoner': {
      'Control Demon': { range: 'L', castingNumber: 10 },
      'Imp': { range: 'L', castingNumber: 10 },
      'Leap': { range: 'L', castingNumber: 8 },
      'Plague Of Insects': { range: 'L', castingNumber: 10 },
      'Planar Tear': { range: 'L', castingNumber: 12 },
      'Plane Walk': { range: 'S', castingNumber: 10 },
      'Posess': { range: 'L', castingNumber: 12 },
      'Summon Demon': { range: 'T', castingNumber: 12 },
    },

    'Thaumaturge': {
      'Banish': { range: 'L', castingNumber: 10 },
      'Blinding Light': { range: 'L', castingNumber: 14 },
      'Circle Of Protection': { range: 'T', castingNumber: 12 },
      'Destroy Undead': { range: 'L', castingNumber: 10 },
      'Dispel': { range: 'L', castingNumber: 12 },
      'Heal': { range: 'L', castingNumber: 8 },
      'Miraculous Cure': { range: 'OA', castingNumber: 16 },
      'Shield': { range: 'L', castingNumber: 10 },
    },

    'Witch': {
      'Animal Companion': { range: 'OB', castingNumber: 10 },
      'Brew Potion': { range: 'OB', castingNumber: 12 },
      'Control Animal': { range: 'L', castingNumber: 12 },
      'Curse': { range: 'L', castingNumber: 8 },
      'Familiar': { range: 'OB', castingNumber: 10 },
      'Fog': { range: 'L', castingNumber: 8 },
      'Mud': { range: 'L', castingNumber: 10 },
      'Poison Dart': { range: 'L', castingNumber: 10 },
    },

    ...(mEnt(
      'Beastcrafter',
      {
        'Animal Manipulation': {},
        'Animal Mutation': {},
      },
      intoTheBreedingPits
    )),

    ...(mEnt(
      'Vampire',
      {
        'Animal Form': {},
        'Call Blood-Drinker Bat': {},
        'Ghoul Call': {},
        'Hypnotic Gaze': {},
        'Lifedrain': {},
        'Mist Form': {},
        'Psychic Leech': {},
        'Thralldom': {},
      },
      bloodLegacy
    )),
  }

  return schools
}

const spellRegex = /(?<name>.*) (?<range>area|los|out|touch) (?<castingNumber>\d+)/

const parseSpell = spellText => {
  const trimmed = spellText.trim()
  const matched = trimmed.match(spellRegex).groups
  if (matched === null) {
    return { [spellText]: {} }
  }
  const { name, ...details } = matched.groups
  return { [name]: details }
}

const parseCustomSchool = schoolText => {
  const [school, spellsText] = schoolText.split(':')
  let name = school.trim()
  if (name === '') {
    name = "A Nameless School"
  }
  const spells = spellsText
    .split(',')
    .map(parseSpell)
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})
  return { [name]: spells }
}

const parseCustomSchools = customSchools => {
  if (!customSchools) {
    return {}
  }

  return customSchools
    .split('\n')
    .map(parseCustomSchool)
    .reduce((x, acc) => ({ ...acc, ...x }), {})
}

module.exports = {
  mEnt,
  mEle,
  parseCustomSchools,
  getSchools,
}
