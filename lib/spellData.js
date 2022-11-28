import {
  EXPANSION_BLOOD_LEGACY,
  EXPANSION_CORE,
  EXPANSION_FROSTGRAVE_FOLIO,
  EXPANSION_INTO_THE_BREEDING_PITS,
  EXPANSION_THAW_OF_THE_LICH_LORD,
  RANGE_AREA,
  RANGE_LOS,
  RANGE_OOG_A,
  RANGE_OOG_B,
  RANGE_REACTION,
  RANGE_SELF,
  RANGE_TOUCH,
} from './constants'

const spellData = {
  'Chronomancer': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Elementalist', 'Necromancer', 'Soothsayer' ],
      opposed: [ 'Enchanter' ],
    },

    spells: {
      'Crumble': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'This spell can only target inanimate structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Move Roll (TN22) or fall to the next level down and taking damage appropriately. If this spell is cast on a wall created by the Wall spell, the wall is completely destroyed. If it is cast on terrain holding a Wizard Eye, the Wizard Eye is cancelled.'
      },
      'Decay': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The spellcaster selects and attacks a target\'s weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted). This spell has no effect on creatures (unless they are specifically identified as being equipped with a weapon from the General Arms and Armour List).'
      },
      'Fast Act': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'This spell may only be cast on a member of the spellcaster\'s warband or an uncontrolled creature. This figure will activate at the end of the current phase instead of in its normal phase. For example, if an apprentice casts this spell on an uncontrolled creature, the creature will activate at the end of that player\'s Apprentice phase instead of the Creature phase. Spellcasters may not cast this spell on themselves, nor on a figure that has already activated in the current turn.'
      },
      'Fleet Feet': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target receives +2 Move for the rest of the game. Multiple castings of Fleet Feet on the same target have no effect.'
      },
      'Petrify': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it receives no actions in its next activation. Furthermore, the figure suffers -3 Fight (to a minimum of +0) and may not have Leap cast upon it until after it makes its next move action. Large creatures receive +8 to their Will Roll to resist this spell.'
      },
      'Slow': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target is reduced to a maximum of one action per activation (which can be any action, it does not have to be movement). It may make an Will Roll verses the Casting Roll at the end of each of its activations. If successful the spell is cancelled.'
      },
      'Time Store': {
        range: RANGE_SELF,
        castingNumber: 14,
        text: 'The spellcaster captures a fragment of their own present to save for future use. To cast this spell, the spellcaster must be able to take two actions during their activation. They must spend the first action casting Time Store. If successful, the second action is lost. This spellcaster is now considered to have a stored ‘extra action\' that they may use in a future turn. This action can only be used during the spellcaster\'s activation and can give the spellcaster three actions in one activation.'
      },
      'Time Walk': {
        range: RANGE_SELF,
        castingNumber: 14,
        text: 'Wizard only. The wizard will activate again in the Apprentice phase and the Soldier phase. This is in addition to the figures that can normally activate in those phases. The wizard may not activate any additional soldiers or be part of a group activation in these phases. The wizard may perform one action in each of these two phases and may take any action – they are not limited to movement. If the wizard moved at all in a previous activation during the turn, any additional move actions are at half rate. If a wizard casts this spell in consecutive turns, they immediately suffer 8 points of damage.'
      },
      'Slowfall': {
        range: [ RANGE_REACTION, RANGE_LOS ],
        castingNumber: 8,
        text: 'This spell allows the target to fall any distance and take no damage. This spell may be cast any time a figure falls within line of sight of the spellcaster (as with any Line of Sight spell, this include the spellcaster himself). If the spell is successfully cast, the target falls as normal but takes no damage regardless of the distance fallen. Alternatively, this spell may be cast during a spellcaster\'s activation as a regular Line of Sight spell. In this case the target of the spell may fall any distance during its next activation without taking any damage. In this case, however, the distance fallen by the figure counts agains its movement allowance for the activation - if it exceeds the normal maximum movement for the activation, it must stop where it lands; if the fall is shorter than the maximum movement allowance, then the figure may, upon landing, continue to move.',
        expansion: EXPANSION_INTO_THE_BREEDING_PITS,
      },
    },
  },

  'Elementalist': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Chronomancer', 'Enchanter', 'Summoner' ],
      opposed: [ 'Illusionist' ],
    },

    spells: {
      'Call Storm': {
        range: RANGE_AREA,
        castingNumber: 12,
        text: 'All bow and crossbow attacks are made with -1 Shoot for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters), with each additional casting increasing the penalty by a further -1, up to a maximum of -5.'
      },
      'Destructive Sphere': {
        range: RANGE_AREA,
        castingNumber: 12,
        text: 'Every figure within 3" of the spellcaster (but not counting the spellcaster) suffers a +5 elemental magic attack.'
      },
      'Elemental Ball': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The spellcaster selects an enemy figure within 16" and line of sight and hurls a ball of destructive elemental energy at it. The target and every figure within 1" and line of sight of the target immediately suffers a +5 elemental magic shooting attack. Roll this shooting attack separately for each figure. Treat the target figure as the origin of the attack for the purposes of determining cover or intervening terrain for all other figures suffering the attack. This spell may not target an enemy figure that is even partially obscured by another figure.'
      },
      'Elemental Bolt': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The spellcaster makes a +7 elemental magic shooting attack against a target figure within 16" and line of sight.'
      },
      'Elemental Hammer': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'This spell is cast upon a weapon. The next time the figure wielding this weapon wins a round of combat and does at least 1 point of damage, this weapon inflicts an additional 5 points of elemental magic damage. If cast on a normal weapon, which is then used against a creature that is Immune to Normal Weapons, this weapon will only deal the 5 points of elemental magic damage. If cast on a bow or crossbow the spell only applies to the next attack.'
      },
      'Elemental Shield': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'The spellcaster forms a floating shield that absorbs the next 3 points of damage the spellcaster would normally suffer in combat or from a shooting attack. Once 3 points have been absorbed the spell is cancelled. A spellcaster may only have one Elemental Shield active at any time.'
      },
      'Scatter Shot': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The spellcaster makes a +0 elemental magic shooting attack against every enemy figure (either from an opposing warband or uncontrolled creature) within 12" and line of sight. This may include enemy figures in combat, although the normal rules for shooting into combat are followed in this case.'
      },
      'Wall': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'This spell creates a 6"-long, 3"-high wall, part of which must be within 10" and line of sight of the spellcaster. This wall can be climbed as normal. At the end of each turn, after the turn in which the spell was cast, roll a die, on a 1–4 the wall vanishes.'
      },
      'Elemental Lash': {
        range: RANGE_REACTION,
        castingNumber: 12,
        text: 'This spell may be castwhenever an enemy figure comes with in 1" of the spellcaster. The caster makes a +3 shooting attack agains the target. If the spell does at least one point of damage, the target is move 1" directly away from the caster, its movement ends, and any additional actions it had are lost.',
        expansion: EXPANSION_INTO_THE_BREEDING_PITS,
      },
    },
  },

  'Enchanter': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Elementalist', 'Sigilist', 'Witch' ],
      opposed: [ 'Chronomancer' ],
    },

    spells: {
      'Animate Construct': {
        range: RANGE_OOG_B,
        castingNumber: 10,
        text: 'It is assumed that the spellcaster has built a construct prior to using this spell to animate it. If the spell is successfully cast, the construct immediately becomes a permanent member of the warband, taking the place of a soldier. A spellcaster must declare the size of construct they are attempting to animate (small, medium, or large – page 183 before rolling to cast the spell. The larger the construct, the harder it is to animate, so the following modifiers are applied to the Casting Roll: Small -0, Medium -3, Large -6. There is no limit to the number of constructs in a warband other than the normal limits for soldiers. Large constructs count as specialist soldiers, the others as standard soldiers.'
      },
      'Control Construct': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The target construct must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the construct becomes a temporary member of the spellcaster\'s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one construct at a time.'
      },
      'Embed Enchaniment': {
        range: RANGE_OOG_A,
        castingNumber: 14,
        text: 'This spell causes any one Enchant Armour or Enchant Weapon spell that is still active at the end of a game to become permanent, and the weapon or armour in question to become a magic weapon or armour. The newly created magic weapon or armour takes up an item slot as normal.'
      },
      'Enchant Armor': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'This spell may only be cast on a figure wearing armour. The armour worn by the target now counts as magic armour and grants +1 Armour for the rest of the game. Multiple castings of this spell on the same target have no effect.'
      },
      'Enchant Weapon': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'This spell targets a weapon of the spellcaster\'s choosing. If cast on a melee weapon, this weapon counts as a magic weapon with +1 Fight. Bows and crossbows count as magic weapons with +1 Shoot, but the attacks made with them do not count as magic attacks. This spell may be cast on a single arrow or crossbow bolt, in which case that ammunition gives +1 Shoot and its attack counts as magic, but for the next shooting attack only. This spell may only be cast once on each weapon. When using both a magic missile weapon and magic ammunition, the shooter may choose to apply the bonus of one or the other, but not both.'
      },
      'Grenade': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The spellcaster takes an object, commonly a simple rock, imbues it with magic energy and throws it at their target, whereupon it explodes into hundreds of fragments. The spellcaster picks a target point within 14". Every figure, including allies, within 1.5" of that point immediately suffers a +3 magic shooting attack. Use the target point as the origin of the attack for working out line of sight and cover.'
      },
      'Strength': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target receives +2 Fight. Multiple Strength spells on the same target have no effect.'
      },
      'Telekinesis': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The spellcaster may move any treasure token within 16" by up to 6" in any direction, so long as it remains in line of sight the entire time. If the treasure moves out of line of sight, it immediately falls straight to the ground. This spell has no effect on a treasure token that has any special requirements for how and when it can be picked up, nor on one being carried by a figure. This spell may not target the central treasure, until after that treasure has been picked up for the first time.'
      },
    }
  },

  'Illusionist': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Sigilist', 'Soothsayer', 'Thaumaturge' ],
      opposed: [ 'Necromancer' ],
    },

    spells: {
      'Beauty': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'This spell causes anyone who looks on the spellcaster to see a paragon of beauty. Any member of an opposing warband must make a Will Roll with a Target Number equal to the Casting Roll if they wish to do any of the following: move into combat with the spellcaster, make a shooting attack that could potentially hit the spellcaster (including shooting attacks generated by spells), or cast any spell that targets the spellcaster. Spellcasters may empower this Will Roll in the same way they would to resist a spell. A figure may only attempt such a Will Roll once per turn. This spell has no effect on creatures (anything found in Chapter Six: Bestiary, page 176) or war hounds.'
      },
      'Blink': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'This spell may target any figure within 12". Move that figure 4" in a random direction. A figure may make a Will Roll with a Target Number equal to the Casting Roll in order to resist this spell. If successful, the figure does not move. Uncontrolled creatures will always attempt this Will Roll.'
      },
      'Fools\' Gold': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'This spell may only be cast on a figure carrying a treasure token. That figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the spellcaster may take the treasure token from the figure and move it up to 4" in any direction, provided the final spot is within line of sight of the spellcaster.'
      },
      'Glow': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'A brightly glowing light surrounds the target figure. For the rest of the game, all shooting attacks against this figure from any source are at +3. Multiple castings of Glow on the same target have no effect.'
      },
      'Illusionary Soldier': {
        range: [ RANGE_OOG_B, RANGE_TOUCH ],
        castingNumber: 12,
        text: 'An illusionary soldier becomes a temporary member of the warband for the next battle (if cast Out of Game) or until the end of the game (if cast during a battle). This soldier can be of any type found on the Soldier Tables (pages 30 and 31) except an apothecary. This soldier cannot pick up treasure, nor can it deal damage, but will otherwise count as a regular soldier for all other the purposes - it may engage in combat, albeit dealing no damage if it wins (it would still have the option to push back its opponent, however), lend support to other figures in combat, etc. If the illusionary soldier ever suffers damage, it is removed. A warband may only have one illusionary soldier at any given time. The player must reveal which member of their warband is the illusionary soldier.',
        fullText: 'An illusionary soldier becomes a temporary member of the warband for the next battle (if cast Out of Game) or until the end of the game (if cast during a battle). This soldier can be of any type found on the Soldier Tables (pages 30 and 31) except an apothecary. This soldier cannot pick up treasure, nor can it deal damage, but will otherwise count as a regular soldier for all other the purposes - it may engage in combat, albeit dealing no damage if it wins (it would still have the option to push back its opponent, however), lend support to other figures in combat, etc. If the illusionary soldier ever suffers damage of any type, it is removed. A warband may only have one illusionary soldier at any given time. The player must reveal which member of their warband is the illusionary soldier.'
      },
      'Invisibility': {
        range: RANGE_TOUCH,
        castingNumber: 12,
        text: 'The target figure becomes invisible. No figure may move into combat with the invisible figure, nor target it with any attack or spell (although it may still be affected by area effects, such as the blast radius of a Grenade spell). If the invisible figure moves into combat, casts a spell, or picks up a treasure token, the Invisibility spell is cancelled. This spell may be cast on a figure already carrying treasure, rendering both invisible. In this case, if the figure drops the treasure, the spell is cancelled.'
      },
      'Teleport': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'The spellcaster immediately moves to any location within line of sight, but may take no other actions this turn after casting this spell. This spell may not be used to enter combat or to move off the table.'
      },
      'Transpose': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'This spell switches the position of two figures on the table. The two figures being transposed must both be within line of sight of the spellcaster and within 12" of one another. The spellcaster may cast Transpose to switch themselves with another figure. Members of opposing warbands are eligible targets for being transposed but may make a Will Roll with a Target Number equal to the Casting Roll to attempt to resist the spell. If successful, the spell is cancelled and no figures are moved. Friendly figures and uncontrolled creatures will not make such Will Rolls.'
      },
      'Flash': {
        range: RANGE_REACTION,
        castingNumber: 8,
        text: 'This spell may be cast whenever a spellcaster is in combat. When cast, every figure in combat with the spellcaster must make a Will roll versus the casting roll of the spell. Any figure that fails this roll is reduced to one action during its next activation (or current activation if cast during an enemy activation). If ALL figures in combat with the spellcaster fail this roll, the spellcaster may immediately make a free 2" move. No figure may force combat with the spellcaster during this move, but otherwise all rules for movement apply.',
        expansion: EXPANSION_INTO_THE_BREEDING_PITS,
      },
    }
  },

  'Necromancer': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Chronomancer', 'Summoner', 'Witch' ],
      opposed: [ 'Thaumaturge' ],
    },

    spells: {
      'Animate Skull': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'The spellcaster fills a skull with magic malice and throws it at an opponent. Place one animated skull (page 190) within 6" of the spellcaster. It can be placed directly into combat. This skull is an uncontrolled creature. The spellcaster may not cast this spell again until this creature is removed from the table, but may spend an action to cancel the spell, in which case the animated skull is immediately removed from the table.'
      },
      'Bone Dart': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'This spell fires a small, sharp shard of bone. The spellcaster makes a +5 shooting attack against any figure within line of sight and 12". This does not count as a magic attack.'
      },
      'Bones Of The Earth': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'A skeletal hand reaches out of the ground and grabs the target\'s ankle. The figure may not take any move actions until it escapes. Any form of magic movement, except the Leap spell, allows a figure to escape the hand; otherwise, the only way to escape is to fight the hand, which has Fight +0, Health 1. If the hand takes one point of damage, it vanishes, and the target is free. Other figures in base contact may attack the hand or give a support bonus. If the hand wins the fight, it does damage as normal. This spell may only be cast against a target that is standing on the ground. Large creatures are unaffected by this spell. The maximum range for this spell is 18".'
      },
      'Control Undead': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The target undead creature must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the undead creature becomes a temporary member of the spellcaster\'s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one undead creature at a time.'
      },
      'Raise Zombie': {
        range: [ RANGE_OOG_B, RANGE_TOUCH ],
        castingNumber: 10,
        text: 'The spellcaster adds one zombie (page 193) to their warband as a temporary member. If the spell is cast before the game, the zombie can be deployed normally. If it is cast during a game, the zombie appears in base contact with the spellcaster. A warband may only have one raised zombie at any one time. If the zombie is killed or exits the table, Raise Zombie can be cast again to create another.'
      },
      'Spell Eater': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'Casting this spell causes the spellcaster to immediately take 1 point of damage. When this spell is cast, it cancels the effects of a single casting of any one spell currently in play. This spell cannot unsummon a creature, but it can cancel the control of a creature.'
      },
      'Steal Health': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target must make an immediate Will Roll with a Target Number equal to the Casting Roll. If failed, the target immediately loses 3 Health and the spellcaster regains 3 Health. The spellcaster gains 3 Health, even if the target had less Health than that remaining. This may not take the spellcaster above their starting Health. This spell has no effect on undead or constructs. A spellcaster may target a member of their own warband – if they do, however, the target immediately (and permanently) leaves the warband and is treated as an uncontrolled creature for the rest of the game.'
      },
      'Strike Dead': {
        range: RANGE_LOS,
        castingNumber: 18,
        text: 'This spell targets a figure within 8". The target must make a Will Roll with a Target Number equal to the Casting Roll or be immediately reduced to 0 Health. All figures may empower their Will Roll to resist this spell, even non-spellcasters. The spellcaster immediately loses 1 Health upon attempting this spell (even if it is cast successfully), in addition to any loss incurred by failure or empowerment. This spell has no effect on undead or constructs.'
      },
      'Lichdom': {
        range: RANGE_OOG_A,
        castingNumber: 20,
        text: 'Refer to page 40 of Thaw of the Lich Lord.',
        expansion: EXPANSION_THAW_OF_THE_LICH_LORD,
      },
      'Revenant': {
        range: RANGE_OOG_A,
        castingNumber: 14,
        text: 'Refer to page 43 of Thaw of the Lich Lord.',
        expansion: EXPANSION_THAW_OF_THE_LICH_LORD,
      },
    },
  },

  'Sigilist': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Chronomancer', 'Thaumaturge', 'Illusionist' ],
      opposed: [ 'Summoner' ],
    },

    spells: {
      'Absorb Knowledge': {
        range: RANGE_OOG_A,
        castingNumber: 12,
        text: 'Wizard only. This spell allows a wizard to absorb the knowledge from a written work without having to read it. A wizard immediately gains 40 experience points for casting this spell to represent the speed with which they can gain knowledge. This experience does not count against the maximum that can be earned in one game. This spell may only be cast after a game in which the wizard was not reduced to 0 Health.'
      },
      'Bridge': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The spellcaster uses the parchment of a long scroll to create a temporary bridge, ramp, or staircase. Place a bridge 6" long and 2" wide anywhere that is completely in the line of sight of the spellcaster. The bridge is essentially two-dimensional. The ends of this bridge do not have to be on the same horizontal plane, nor do the ends of the bridge need to be anchored on terrain, they may float in the air. Figures may move along this bridge at their normal movement rate, even when essentially climbing. Each spellcaster may only have one bridge in play at any time. Whenever the spellcaster activates, they may cancel this spell as a free action. Otherwise roll a die at the end of every turn: on a 1–2 the bridge vanishes. Figures on the bridge when it vanishes will fall to the ground.',
        fullText: 'The spellcaster uses the parchment of a long scroll to create a temporary bridge, ramp, or staircase. Place a bridge 6" long and 2" wide anywhere that is completely in the line of sight of the spellcaster. The bridge has no appreciable thickness and is essentially two-dimensional. The ends of this bridge do not have to be on the same horizontal plane, nor do the ends of the bridge need to be anchored on terrain, they may float in the air. Figures may move along this bridge at their normal movement rate, even when essentially climbing. Each spellcaster may only have one bridge in play at any time. Whenever the spellcaster activates, they may cancel this spell as a free action. Otherwise roll a die at the end of every turn: on a 1–2 the bridge vanishes. Figures on the bridge when it vanishes will fall to the ground.'
      },
      'Draining Word': {
        range: RANGE_AREA,
        castingNumber: 14,
        text: 'This spell draws a bright rune of power in the sky. The spellcaster may choose one spell for Draining Word to affect. All rolls to attempt to cast that particular spell are at -3 for the rest of the game. A spellcaster may only have one Draining Word spell in effect at a time. Only one Draining Word can be active for each specific target spell at one time.'
      },
      'Explosive Rune': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The spellcaster draws a bright, glowing rune of power on the ground or a wall anywhere within 4" and line of sight. A marker should be placed on the table. If any character or creature that was not part of the spellcaster\'s warband at the start of the game moves within 1" of the rune, it explodes, and every figure, friend or foe, within 2" suffers an immediate +5 magic attack. Note that if the rune is placed within 1" of a figure, it does not explode immediately – that figure must move to set it off. A spellcaster may have up to three such runes in play at any time. At the end of any turn, they may choose to cancel any or all their runes. If the spellcaster that placed a rune is no longer on the table, roll a die for each rune at the end of each turn: on an 11+ the rune vanishes.',
        fullText: 'The spellcaster draws a bright, glowing rune of power on the ground or a wall anywhere within 4" and line of sight. A marker should be placed on the table to represent the rune. If any character or creature that was not part of the spellcaster\'s warband at the start of the game moves within 1" of the rune, it explodes, and every figure, friend or foe, within 2" suffers an immediate +5 magic attack. Note that if the rune is placed within 1" of a figure, it does not explode immediately – that figure must move to set it off. A spellcaster may have up to three such runes in play at any time. At the end of any turn, they may choose to cancel any or all their runes. If the spellcaster that placed a rune is no longer on the table, roll a die for each rune at the end of each turn: on an 11+ the rune vanishes.'
      },
      'Furious Ouill': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target is attacked by a sharp animated quill. Although the quill does no damage, it is highly irritating and extremely distracting. While under attack, the target suffers -1 Move, -2 Fight, -4 Shoot, and -2 to all Casting Rolls. Whenever the target is activated, it may make a Will Roll with a Target Number equal to the Casting Roll – if successful, the quill is caught and destroyed. Multiple castings of Furious Quill against the same target have no effect.'
      },
      'Power Word': {
        range: RANGE_AREA,
        castingNumber: 14,
        text: 'This spell draws a bright rune of power in the sky. The spellcaster may pick one spell for the Power Word to affect. All rolls to cast that particular spell are at +3 for every spellcaster for the rest of the game. A spellcaster may only have one Power Word spell in effect at a time. Only one Power Word can be active for each specific target spell at one time.'
      },
      'Push': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'The target suffers an immediate +10 attack. Instead of taking damage from this attack, the target is moved 1" directly away from the spellcaster for every point of damage they would have taken. If this pushes the target into the edge of the table or a piece of terrain over 1⁄2" high, they stop immediately. Other figures do not stop (or get hit by) a pushed figure – they are assumed to step out of the way. If this spell is cast from beneath a figure it will push them up. If the target is pushed up or off a height, it suffers falling damage as normal. This spell can push a figure out of combat, and as it is not a shooting attack, the target is not randomized.'
      },
      'Write Scroll': {
        range: RANGE_OOG_A,
        castingNumber: 12,
        text: 'This spell creates one scroll. The scroll must be of a spell that the spellcaster either knows or a spell for which they own the grimoire. The scroll may be sold, given to a figure, or stored in the wizard\'s vault.'
      },
      'Capture Incatation': {
        range: RANGE_REACTION,
        castingNumber: 12,
        text: 'Refer to page 30 of Into the Breeding Pits.',
        expansion: EXPANSION_INTO_THE_BREEDING_PITS,
      },
    },
  },

  'Soothsayer': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Chronomancer', 'Thaumaturge', 'Illusionist' ],
      opposed: [ 'Witch' ],
    },

    spells: {
      'Awareness': {
        range: RANGE_OOG_B,
        castingNumber: 12,
        text: 'If this spellcaster is on the table, its warband may add +2 to its Initiative Rolls for the purposes of determining the primary player only. This bonus stacks so, if both the wizard and the apprentice have cast this spell and are both on the table, the player may add +4 to their Initiative Rolls. The maximum possible bonus is +4. This spell counts as active on the spellcaster during the game and may be cancelled by anything that cancels spells.'
      },
      'Combat Awareness': {
        range: RANGE_TOUCH,
        castingNumber: 12,
        text: 'This spell gives the target a magic insight into the moves their opponent will attempt in a fight. It grants the target +1 Fight and +1 Armour for the remainder of the game. Multiple castings of this spell on the same target have no effect.'
      },
      'Mind Control': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the target temporarily joins the spellcaster\'s warband, activating as normal. After the figure activates each turn, it must make another Will Roll with a Target Number equal to the Casting Roll. If successful, the spell is cancelled and the figure returns to its normal allegiance. A spellcaster may only have one active Mind Control spell at a time. A figure under Mind Control cannot purposely take any action that causes it immediate damage but can be moved into combat and may attack. A figure under Mind Control is not allowed to move off the table. A spellcaster may cancel an active Mind Control at the end of any turn. This spell has no effect on spellcasters.',
        fullText: 'The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the target temporarily joins the spellcaster\'s warband, activating as normal. After the figure activates each turn, it must make another Will Roll with a Target Number equal to the Casting Roll. If successful, the spell is cancelled and the figure returns to its normal allegiance. A spellcaster may only have one active Mind Control spell at a time. A figure under Mind Control cannot purposely take any action that causes it immediate damage but can be moved into combat and may attack an enemy figure. A figure under Mind Control is not allowed to move off the table. A spellcaster may cancel an active Mind Control at the end of any turn. This spell has no effect on spellcasters.'
      },
      'Mind Lock': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The target of this spell becomes immune to Mind Control and Suggestion spells for the rest of the game, and any current Mind Control spells on the figure are cancelled. The figure gains +2 Will for the rest of the game.'
      },
      'Reveal Secret': {
        range: RANGE_OOG_B,
        castingNumber: 12,
        text: 'This spell imparts knowledge on some lost treasure. Every successful casting of this spell before a game allows the player to make two rolls for a single treasure token (other than the central treasure, which is unaffected by this spell) after the game and choose which one to take.'
      },
      'Suggestion': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The target of this spell immediately drops any treasure tokens it is carrying. The spellcaster may move the figure up to 3" in any direction provided this does not move the figure into combat or cause it any immediate damage (e.g. falling more than 3"). The target of this spell may make a Will Roll with a Target Number equal to the Casting Roll. If successful, the spell has no effect.'
      },
      'True Sight': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'The spellcaster, and all friendly figures within 6" of the spellcaster, can see invisible figures and are immune to the effects of the Beauty spell. Furthermore, if an invisible figure is within 6" of the spellcaster, the Invisibility spell is cancelled. If an Illusionary Soldier is within 6" of the spellcaster, it is immediately removed from the table.'
      },
      'Wizard Eye': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'This spell may be cast on any terrain feature within 12" that has a flat side, such as most ruins. Place a token on or next to the terrain feature to represent the Wizard Eye. For the rest of the game, the caster may choose to draw line of sight from the Wizard Eye instead of from the figure when casting spells. The Wizard Eye has 180-degree field of vision. A spellcaster may only maintain one Wizard Eye at a time. If the terrain piece on which the Wizard Eye is placed is damaged or destroyed (such as by a Crumble spell) the spell is cancelled. The spellcaster may cancel this spell at the end of any turn.'
      },
      'Deflect': {
        range: RANGE_REACTION,
        castingNumber: 12,
        text: 'Refer to page 30 of Into the Breeding Pits.',
        expansion: EXPANSION_INTO_THE_BREEDING_PITS,
      },
    },
  },

  'Summoner': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Witch', 'Necromancer', 'Elementalist' ],
      opposed: [ 'Sigilist' ],
    },

    spells: {
      'Control Demon': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target demon must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it becomes a temporary member of the spellcaster\'s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one demon at a time.'
      },
      'Imp': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The spellcaster places an imp (page 184) on the table anywhere within the spellcaster\'s line of sight, but no closer than 3" to any other figure. The imp follows the normal rules for uncontrolled creatures and will activate in the next Creature phase. If the spellcaster casts this spell a second time, the first imp immediately vanishes.'
      },
      'Leap': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'This spell may only be cast on a member of the spellcaster\'s warband. Immediately move the target figure up to 10" in any direction, including vertically. This move must either be in a straight line or an arc. It cannot curve around corners. If this move leaves the figure above the ground, it immediately falls, taking damage as normal. If the target is carrying treasure, this move is reduced to 5". This move may not take a figure off the table or into combat. The target of the Leap spell may take no other actions this turn, though it may have taken actions previously.'
      },
      'Plague Of Insects': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target figure is attacked by a cloud of stinging or biting insects that irritate and distract. The cloud of insects has a 1" radius centred on, and moving with, the target figure. It affects all figures, including the target figure, fully or partially within this radius. While being pestered by the insects, a figure has -4 Fight and -4 Shoot (to a minimum of +0) and -2 to Casting Rolls. After this figure activates each turn, it may make a Will Roll with a Target Number equal to the Casting Roll. If successful, the spell is cancelled. Other figures within the radius may simply move away to escape. A figure may only ever be affected by one Plague of Insects spell at a time, whether as a target or by virtue of being within the 1" radius. Large creatures, undead, and constructs are immune to this spell.'
      },
      'Planar Tear': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The spellcaster creates a small tear in the fabric of the universe. This rift is painful to humans and creatures, but lethal to demons. The spellcaster selects a target point. All figures within 2" of that point must make a Will Roll with a Target Number equal to the Casting Roll or suffer 2 points of damage. Demons that fail the Will Roll take damage equal to the Casting Roll.'
      },
      'Plane Walk': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'Although the spellcaster remains in the same physical location, they move briefly between planes of existence. For the rest of this turn, they can ignore all terrain when moving, thus walking through walls or across chasms. They may not be the target of any shooting attacks or spells. The spellcaster will never be considered in combat during the turn, nor can they be attacked by any figure. They may not, however, pick up treasure or in any way affect other figures or terrain on the table. If they are carrying treasure, they drop it. It is incredibly draining to move between planes of existence, so if a spellcaster attempts to cast this spell in a second consecutive turn, they suffer a -5 modifier to their Casting Roll, -10 if they attempt it on a third turn, -15 on the fourth turn, etc.',
        fullText: 'Although the spellcaster remains in the same physical location, they move briefly between planes of existence. For the rest of this turn, they can ignore all terrain when moving, thus walking through walls or across chasms. They may not be the target of any shooting attacks or spells. The spellcaster will never be considered in combat during the turn, nor can they be attacked by any figure. They may not, however, pick up treasure or in any way affect other figures or terrain on the table. If they are carrying treasure, they drop it. It is incredibly draining to move between planes of existence, so if a spellcaster attempts to cast this spell in a second consecutive turn, they suffer a -5 modifier to their Casting Roll, -10 if they attempt it three turns in a row, and -15 on the fourth turn and beyond.'
      },
      'Possess': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'This spell may only be cast on a permanent or temporary member of the spellcaster\'s own warband, except the wizard, apprentice, or demons. The target is possessed by a demon and gains +2 Fight, +1 Armour, and -2 Will and counts as a demon (i.e. it will be affected by Banish, Control Demon, Circle of Protection, etc.). This figure may not be part of a group activation. If removed from the game for any reason (such as being hit by a Banish spell), check for the character\'s survival as normal. A spellcaster may only have one Possess spell active at a time.'
      },
      'Summon Demon': {
        range: RANGE_TOUCH,
        castingNumber: 12,
        text: 'Immediately place a demon on the table within 1" of the spellcaster. It may not be placed straight into combat. This demon is considered to be under the effects of a Control Demon spell, and thus this spell may not be cast if the spellcaster is already controlling a demon. The type of demon summoned depends on the amount by which the spellcaster succeeded on their Casting Roll: 0–5 imp, 6–12 minor demon, 13+ major demon. If a spellcaster rolls a 1 while attempting to cast this spell, they summon an uncontrolled demon and must place this demon in combat with the spellcaster. Roll to determine the type: 1–10 imp, 11–17 minor demon, 18+ major demon. A spellcaster cannot empower a roll of 1 when casting this spell but there is no limit on empowering this spell.'
      },
    },
  },

  'Thaumaturge': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Soothsayer', 'Sigilist', 'Illusionist' ],
      opposed: [ 'Necromancer' ],
    },

    spells: {
      'Banish': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'All demons within line of sight of the spellcaster must pass an immediate Will Roll with a Target Number equal to the Casting Roll. If a demon fails the roll and its current Will is +4 or less, it is immediately reduced to 0 Health and removed from the table. If its current Will is +5 or higher, it suffers damage equal to three times the amount by which it failed the Will Roll.'
      },
      'Blinding Light': {
        range: RANGE_LOS,
        castingNumber: 14,
        text: 'The target must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it may not attack, shoot, or cast Line of Sight spells. Its Fight stat is reduced to +0 and its Move to 1. At the end of each turn, the figure may attempt another Will Roll with the same Target Number. If successful, the spell is cancelled.'
      },
      'Circle Of Protection': {
        range: RANGE_TOUCH,
        castingNumber: 12,
        text: 'Creates a circle with a 3" diameter which no demon or undead creature can enter or pass through. If something forces them into contact with the circle, they stop at its edge. A spellcaster may only have one active circle of protection at a time, but they do not have to remain within it. The spellcaster may cancel this spell at the end of any turn. Otherwise, roll a die at the end of every turn: on a 1–3 the spell is cancelled.'
      },
      'Destroy Undead': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target undead creature must make a Will Roll with a Target Number equal to the Casting Roll. If the undead creature fails the roll and its current Will is +2 or less, it is immediately reduced to 0 Health and is removed from the table. If its current Will is +3 or higher, it suffers damage equal to three times the amount by which it failed the Will Roll.'
      },
      'Dispel': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'Immediately cancels the ongoing effect of any one casting of any one spell. It cannot unsummon a creature, but it can cancel the control of a creature that is a temporary member of a warband.'
      },
      'Heal': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'This spell restores up to 5 points of lost Health to a target figure within 6". This spell cannot take a model above its starting Health. This spell has no effect on undead or constructs.'
      },
      'Miraculous Cure': {
        range: RANGE_OOG_A,
        castingNumber: 16,
        text: 'Wizard only. This spell may be used in several different ways. A successful casting of this spell will remove all permanent injuries from one figure. For example, a wizard suffering from Lost Fingers regrows all their missing digits, regardless of how many times they have suffered that particular injury. Or, it may be cast on a Badly Wounded figure – if successful, the soldier is healed and may participate in the next game with no penalty. Finally, it may be used to attempt to bring a figure back from the dead. The figure must have died in the game just played, and using the spell in this fashion incurs a -4 penalty to the Casting Roll. If successful, the figure is restored to life, and may participate in the next game with no penalty.',
        fullText: 'Wizard only. This spell may be used in several different ways. A successful casting of this spell will remove all permanent injuries from one figure. For example, a wizard suffering from Lost Fingers regrows all their missing digits, regardless of how many times they have suffered that particular injury. Or, it may be cast on a Badly Wounded figure – if successful, the soldier is healed and may participate in the next game with no penalty. Finally, it may be used to attempt to bring a figure back from the dead. The figure must have died in the game just played, and using the spell in this fashion incurs a -4 penalty to the Casting Roll. If successful, the figure is restored to life, and may participate in the next game with no penalty. If Miraculous Cure is cast using a scroll, it cannot be used to resurrect the dead.'
      },
      'Shield': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The target receives +2 Armour for the rest of the game. This may not take a figure above Armour 14 (i.e. figures with Armour 13 go to Armour 14). Multiple castings of Shield on the same target have no effect.'
      },
    },
  },

  'Witch': {
    expansion: EXPANSION_CORE,

    schoolAdjustment: {
      aligned: [ 'Necromancer', 'Enchanter', 'Summoner' ],
      opposed: [ 'Soothsayer' ],
    },

    spells: {
      'Animal Companion': {
        range: RANGE_OOG_B,
        castingNumber: 10,
        text: 'The spellcaster summons an animal companion of their choice from the following options to become a permanent member of their warband: bear (page 179), ice toad (page 180), snow leopard (page 182), or wolf (page 182). All Animal Companions count as standard soldiers. Animal companions are more strong-willed than wild examples of their species and receive a permanent +3 Will. A spellcaster may only have one animal companion at any time.'
      },
      'Brew Potion': {
        range: RANGE_OOG_B,
        castingNumber: 12,
        text: 'The spellcaster creates one Lesser Potion of their choice (page 86) that may be sold, stored in the wizard\'s vault, or given to a member of the warband. A wizard (and only a wizard) may use this spell to create a Greater Potion (page 87). First, they must declare what potion they are attempting to brew and pay the listed ingredients cost. The wizard should then roll to cast Brew Potion with a -4 to the Casting Roll. If successful, the potion is created and can be immediately assigned to a figure in the warband, sold, or stored in the wizard\'s vault. If unsuccessful, the potion is not created and the money spent on ingredients is lost.'
      },
      'Control Animal': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'The target animal must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the animal becomes a temporary member of the spellcaster\'s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one animal at a time.'
      },
      'Curse': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'The target suffers -2 to all die rolls. At the end of each turn, the target may make a Will Roll with the Target Number equal to the Casting Roll (at -2, of course). If successful, this spell is cancelled. Curse cannot be cast on a figure already suffering the effects of a Curse spell.'
      },
      'Familiar': {
        range: RANGE_OOG_B,
        castingNumber: 10,
        text: 'The spellcaster gains a familiar, which can take the form of any small creature. It is not depicted on the table, unless the player wants to include it on the spellcaster figure. A spellcaster with a familiar gains +2 Health (write as a split stat). If the spellcaster is ever reduced to 1 Health or less, the familiar is destroyed. At the start of the next game, the spellcaster reverts to their normal Health, unless another Familiar spell is successfully cast'
      },
      'Fog': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'Place a line of fog, 6" long, 3" high, and 1" thick anywhere on the table as long as some part of it is within line of sight of the spellcaster and all of it is within 24". Figures can move through the fog with no penalty, but line of sight may not be drawn through it. At the start of each new turn, roll a die. On a result of 1–4 the fog dissipates and is removed from the table.'
      },
      'Mud': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'All ground within 3" of a target point becomes rough ground.'
      },
      'Poison Dart': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'Make an immediate plus +3 poisoned shooting attack against the target figure. This is a non-magic attack.'
      },
      'Homunculus': {
        range: RANGE_OOG_A,
        castingNumber: 12,
        text: 'Refer to page 39 of Thaw of the Lich Lord.',
        expansion: EXPANSION_THAW_OF_THE_LICH_LORD,
      },
    }
  },

  'Beastcrafter': {
    expansion: EXPANSION_INTO_THE_BREEDING_PITS,

    spells: {
      'Animal Manipulation': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'The spellcaster may choose to give the target animal either +2 Fight or +2 Move for the rest of the game. When the spell is cast, the animal immediately takes 2 points of damage. If the animal is not part of the same warband as the spellcaster it can make a Will roll to resist the effects of the spell. Animals under nobody\'s control will always attempt this Will roll. This spell may only be learned or cast by a spellcast with the Beastcrafter II trait.'
      },
      'Animal Mutation': {
        range: RANGE_LOS,
        castingNumber: 14,
        text: 'This spell may only be cast on any animal in the spellcaster\'s warband. The spellcaster may choose to EITHER permanently increase the animal\'s Move, Fight, or Armour stat by +1 OR to allow it to pick up and carry treasure just like any other soldier. Whichever option is selected, the animal also suffers a -1 to Will. This spell may only be cast one upon any given animal. This spell may only be learned or cast by a spellcaster with the Beastcrafter III trait.'
      },
    }
  },

  'Spiritualist': {
    expansion: EXPANSION_INTO_THE_BREEDING_PITS,
    unlearnable: true,

    schoolAdjustment: {
      aligned: [ 'Necromancer', 'Thaumaturge' ],
      opposed: [],
    },

    spells: {
      'Nightmare': {
        range: RANGE_OOG_B,
        castingNumber: 12,
        text: 'This spell comes from the extinct Spiritualist school of magic, which counts as aligned with the Necromancer and Thaumaturge schools, and neutral towards all other schools. This spell may never be learned. It may only be cast immediately before a game. The spell targets a wizard from on of the opposing warbads in the forthcoming game. When experience is calculated after the game, the target of the spell suffers -20 experience points. This cannot take the experience earned in the game below 0. The effects of this spell continue in every subsequent game which includes both the caster and the target. This spell cannot be cancelled with Dispell or Spelleater, nor is it affeted by any kind of null energy. The only way to end the ffects of this spell is for the target to participate in a game in which the caster is reduced to 0 Health. As soon as this happens the spell is cancelled. If this occurs in the next game immediately following the spell being cast, the target suffers no experience penalty.',
      },
    },
  },

  'Astromancer': {
    expansion: EXPANSION_FROSTGRAVE_FOLIO,
    unlearnable: true,

    schoolAdjustment: {
      aligned: [ 'Elementalist', 'Sigilist' ],
      opposed: [],
    },

    spells: {
      'Shape Starfire Elemental': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'This spell comes from the lost school of magic known as Astromancy, which counts as aligned with the Elementalist and Sigilist schools, and neutral towards all other schools. This spell may never be learned, and my only be cast from a scroll. This spell creates a starfire elemental (see Frostgrave Folio, page 59). The spellcaster may palce a starfire elemental anywhere within 6" and line of sight. This elemental is under the control of the spellcaster and moves during the soldier phase. Any effect that cancels magic, such as Dispel spell, can cancel the control of the elemental, in which case it would become an uncontrolled creature.',
      },
    },
  },

  'Vampire': {
    expansion: EXPANSION_BLOOD_LEGACY,

    schoolAdjustment: {
      aligned: [ '', '', '' ],
      opposed: [ '' ],
    },

    spells: {
      'Animal Form': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'The caster transforms itself into either a giant bat, gaining the flying trait; or a large wolf, increasing its Move to 8. All the caster’s other stats remain unaffected. While in animal form the caster may not pick up or carry treasure, and any treasure being carried is dropped. The caster may not use any items. In combat the caster suffers no penalty for being unarmed and its attacks are still magical. The caster can cast spells while in animal form. The caster may end this spell and return to its normal form as a free action during their activation. The caster can switch to another animal form by casting the spell again.',
      },
      'Call Blood-Drinker Bat': {
        range: RANGE_AREA,
        castingNumber: 10,
        text: 'The vampire may immediately place a blood-drinker bat (see Bestiary, page 73) adjacent to the table edge, anywhere within their warbands’ deployment zone for that game. This bat always activates in the soldier phase. It receives only one action the turn it arrives but receives the normal two afterwards. The bat counts as being under a Control Animal spell as cast by the vampire. A spellcaster may only have one controlled bat on the table at any time.',
      },
      'Ghoul Call': {
        range: RANGE_AREA,
        castingNumber: 12,
        text: 'The vampire summons a ghoul to temporarily join his warband. This ghoul may placed on the table anywhere the vampire’s warband was allowed to deploy for the scenario, as long as it is no closer than 3” to an enemy figure. The caster may not cast this spell again until the ghoul either leaves the table or ceases to be part of his warband. The ghoul may pick up and carry treasure but can never have or use items.',
      },
      'Hypnotic Gaze': {
        range: RANGE_LOS,
        castingNumber: 14,
        text: 'This spell may be cast while the caster is in combat, otherwise it has a maximum range of 2”. Select a target figure; that figure must make a Will Roll to resist. If the Will Roll fails, the target suffers the effects of a Mind Control spell. However, the spell is immediately cancelled if the target is ever out of line of sight, or more than 12” away from the caster. The target must attempt a new Will Roll versus the Casting Roll at the end of each of its activations to cancel the spell.',
      },
      'Lifedrain': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'This spell may be cast while the vampire is in combat. For the rest of this turn and the next, the vampire gains the Energy Drain trait. The vampire takes 1 point of damage when this spell is cast; however, if it damages a creature during the turn, that is not immune to Energy Drain, this point of damage is regained.',
      },
      'Mist Form': {
        range: RANGE_SELF,
        castingNumber: 10,
        text: 'The caster turns into a cloud of mist and gains the flying trait. While in mist form, the caster may move through any space, no matter how small. While in mist form the caster may not pick up or carry treasure, and any treasure being carried is dropped. The caster may not cast spells or use any items, nor may it attack or make a shooting attack. The caster is immune to all forms of non- magic damage. Other figures can move into combat with the caster and attack; however, no figure may force combat against the caster. If in combat, the caster may move out of combat freely. The caster may end this spell as a free action either at the end of a turn or at any point during its activation.',
      },
      'Psychic Leech': {
        range: RANGE_LOS,
        castingNumber: 10,
        text: 'This spell may only be cast on an undead creature with a Will Stat of +2 or less that is not under the control of another Spellcaster. If this creature is controlled by another caster, this spell is cancelled. Whenever the target of this spell causes damage to another creature, that is not undead, construct, or demon, the caster of this spell regains 1 point of Health. This may not take the caster above its starting Health. A caster may have a maximum of 2 castings of this spell active at any time. The caster may cancel a casting of this spell at any time as a free action.',
      },
      'Thralldom': {
        range: RANGE_OOG_A,
        castingNumber: 8,
        text: 'The vampire can add one soldier of any type to his warband as a permanent member without paying its cost. The soldier suffers a permanent -1 Will penalty. If this soldier is reduced to 0 Health during a game roll a die, on 1–10 the soldier has either died or escaped the vampire’s control. On 11+ it recovers and continues as part of the warband.',
      },
    },
  },

  'Fire Giant': {
    expansion: EXPANSION_BLOOD_LEGACY,

    schoolAdjustment: {
      aligned: [ '', '', '' ],
      opposed: [ '' ],
    },

    spells: {
      'Comet': {
        range: RANGE_LOS,
        castingNumber: 14,
        text: 'The caster makes a +3 elemental magic shooting attack against a target within 16”. This attack does +4 damage. In addition, all figures in contact with the target figure also suffer a +1 elemental magic shooting attack that does +4 damage. Any figure that suffers damage from these attacks is immediately moved 2” in a random direction.'
      },
      'Earthquake': {
        range: RANGE_AREA,
        castingNumber: 12,
        text: 'The caster pounds the ground and sends a massive shockwave rolling through the earth. Every figure within 8” of the caster (but not the caster) must make an immediate Move Roll (TN20). Large creatures get +2 to this roll. If it fails, it is knocked prone. While prone, a figure is a -2 Fight, -2 Shoot, and -2 to all Casting Rolls and may not take a Move action. A figure can get back to their feet simply by spending a Move action. This requires the full move action.'
      },
      'Enflame': {
        range: RANGE_LOS,
        castingNumber: 8,
        text: 'The caster causes a weapon to burst into sudden flames. This weapon is now considered magic and does +2 damage. If cast upon a missile weapon, such as a bow, crossbow, or javelin, then the bonus only applies to the next attack made with that weapon.'
      },
      'Mist Shroud': {
        range: RANGE_AREA,
        castingNumber: 8,
        text: 'A thick blanket of mist surrounds the caster. This figure, and any figures within 3”, suffer no penalties for being Large when rolling against shooting attacks.'
      },
      'Magnify': {
        range: RANGE_OOG_A,
        castingNumber: 14,
        text: 'This spell may be cast on any magical weapon, magical armour, or potion. In the case of a magical weapon or armour, the giant can change the size of the weapon so that it is usable by a giant if it was human-sized or a human if it was giant-sized. If cast upon a normal potion, the potion is doubled so that it becomes a giant-sized potion.'
      },
      'Pyre': {
        range: RANGE_LOS,
        castingNumber: 12,
        text: 'This spell creates a 2” diameter circle of flame, that reaches 3” high, within 12” of the caster. This circle may not be placed in contact with a figure. Anytime a figure moves into contact with this circle of flame, or activates while in contact with it, it suffers an +3 elemental magic attack. This circle of flames blocks line of sight. At the end of each turn, roll a die. On 1–2 the flame is extinguished and should be removed from the table.'
      },
      'Raze': {
        range: RANGE_LOS,
        castingNumber: 14,
        text: 'This spell can target any piece of terrain within 12” of the caster. A 3” diameter section of that terrain (include all height) is completely destroyed and should be either removed from the table or marked in some way. Any figure that was standing on that terrain falls, taking damage as normal. In addition, all figures on, or within 2” of the destroyed section of terrain immediately suffer a +2 Shooting attack (these attacks are not magical).'
      },
      'Runic Stone': {
        range: [ RANGE_OOG_B, RANGE_TOUCH ],
        castingNumber: 16,
        text: 'This spell engraves potent words of power into a stone surface. This can be the wall of a building or cave, a cliff-face, a statue, or even a free- standing stone. While the caster is within 12” of this stone, it may empower all of its spells and Will Rolls on a 1-for-1 basis (one Health for one increase to the roll) instead of the 2-for-1 that is normal for Fire Giant wizards. In addition, the wizard may use the stone as a Wizard Eye (see Wizard Eye spell). A wizard may have two of these stones active at any one time but they must be at least 36” apart. A wizard may not have a Runic Stone and a Wizard Eye spell active at the same time. A wizard may cancel any casting of this spell at any time. For full rules see Blood Legacy page 23.'
      },
    },
  },
}

export default spellData
