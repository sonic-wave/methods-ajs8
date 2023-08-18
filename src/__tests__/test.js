import Bowerman from '../Classes/Bowerman';
import Daemon from '../Classes/Daemon';
import Magician from '../Classes/Magician';
import Swordsman from '../Classes/Swordsman';
import Undead from '../Classes/Undead';
import Zombie from '../Classes/Zombie';
import Character from '../Classes/Character';

test('Bowerman test', () => {
  const result = new Bowerman('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Daemon test', () => {
  const result = new Daemon('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Magician test', () => {
  const result = new Magician('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Swordsman test', () => {
  const result = new Swordsman('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Undead test', () => {
  const result = new Undead('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie test', () => {
  const result = new Zombie('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Character levelUp method test', () => {
  const testLevel = 1;
  const testHealth = 50;
  const testAttack = 10;
  const testDefence = 10;
  let tmp = 0;

  function plusLevel(level) {
    tmp = level + 1;
    return tmp;
  }
  const newLevel = plusLevel(testLevel);

  function increaseStats(stat) {
    tmp = stat * 0.2 + stat;
    return tmp;
  }
  const newAttack = increaseStats(testAttack);
  const newDefence = increaseStats(testDefence);

  const result = new Character('demo', 'Bowerman', testHealth, testLevel, testAttack, testDefence);
  result.levelUp();
  expect(result).toEqual({
    name: 'demo',
    type: 'Bowerman',
    health: 100,
    level: newLevel,
    attack: newAttack,
    defence: newDefence,
  });
});

test('Character damage method test', () => {
  const testHealth = 50;
  const testDefence = 10;
  const strength = 5;
  let tmp = 0;

  function attack(points) {
    tmp = testHealth;
    tmp -= points * (1 - testDefence / 100);
    return tmp;
  }
  const newHealth = attack(strength);

  const result = new Character('demo', 'Bowerman', testHealth, 1, 10, testDefence);
  result.damage(strength);
  expect(result).toEqual({
    name: 'demo',
    type: 'Bowerman',
    health: newHealth,
    level: 1,
    attack: 10,
    defence: testDefence,
  });
});
