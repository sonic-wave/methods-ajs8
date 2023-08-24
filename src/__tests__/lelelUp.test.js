import Character from '../Classes/Character';

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
