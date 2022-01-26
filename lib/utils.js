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
    'Chronomancer': [
      'Crumble',
      'Decay',
      'Fast Act',
      'Fleet Feet',
      'Petrify',
      'Slow',
      'Time Store',
      'Time Walk',
      ...(mEle('Slowfall', intoTheBreedingPits)),
    ],
    'Elementalist': [
      'Call Storm',
      'Destructive Sphere',
      'Elemental Ball',
      'Elemental Bolt',
      'Elemental Hammer',
      'Elemental Shield',
      'Scatter Shot',
      'Wall',
      ...(mEle('Elemental Lash', intoTheBreedingPits)),
    ],
    'Enchanter': [
      'Animate Construct',
      'Control Construct',
      'Embed Enchantment',
      'Enchant Armour',
      'Enchant Weapon',
      'Grenade',
      'Strength',
      'Telekinesis',
    ],
    'Illusionist': [
      'Blink',
      'Beauty',
      'Fool’s Gold',
      'Glow',
      'Illusionary Soldier',
      'Invisibility',
      'Teleport',
      'Transpose',
      ...(mEle('Flash', intoTheBreedingPits)),
    ],
    'Necromancer': [
      'Animate Skull',
      'Bone Dart',
      'Bones of the Earth',
      'Control Undead',
      'Raise Zombie',
      'Spell Eater',
      'Steal Health',
      'Strike Dead',
    ],
    'Sigilist': [
      'Absorb Knowledge',
      'Bridge',
      'Draining Word',
      'Explosive Rune',
      'Furious Quill',
      'Power Word',
      'Push',
      'Write Scroll',
      ...(mEle('Capture Incatation', intoTheBreedingPits)),
    ],
    'Soothsayer': [
      'Awareness',
      'Combat Awareness',
      'Mind Control',
      'Mind Lock',
      'Reveal Secret',
      'Suggestion',
      'True Sight',
      'Wizard Eye',
      ...(mEle('Deflect', intoTheBreedingPits)),
    ],
    'Summoner': [
      'Control Demon',
      'Imp',
      'Leap',
      'Plague of Insects',
      'Planar Tear',
      'Plane Walk',
      'Possess',
      'Summon Demon',
    ],
    'Thaumaturge': [
      'Banish',
      'Blinding Light',
      'Circle of Protection',
      'Destroy Undead',
      'Dispel',
      'Heal',
      'Miraculous',
      'Shield',
    ],
    'Witch': [
      'Animal Companion',
      'Brew Potion',
      'Control Animal',
      'Curse',
      'Familiar',
      'Fog',
      'Mud',
      'Poison Dart',
    ],

    ...(mEnt('Beastcrafter', [
      'Animal Manipulation',
      'Animal Mutation',
    ], intoTheBreedingPits)),

    ...(mEnt('Vampire', [
      'Animal Form',
      'Call Blood-Drinker Bat',
      'Ghoul Call',
      'Hypnotic Gaze',
      'Lifedrain',
      'Mist Form',
      'Psychic Leech',
      'Thralldom',
    ], bloodLegacy)),
  }

  return schools
}

const parseCustomSchools = customSchools => {
  if (!customSchools) {
    return {}
  }

  return customSchools
    .split('\n')
    .map(schoolText => {
      const [school, spells] = schoolText.split(':')
      let name = school.trim()
      if (name === '') {
        name = "A Nameless School"
      }
      return { [name]: (spells || '').split(',').map(x => x.trim()) }
    })
  .reduce((x, acc) => ({ ...acc, ...x }), {})
}

module.exports = {
  mEnt,
  mEle,
  parseCustomSchools,
  getSchools,
}
