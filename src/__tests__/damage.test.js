import Character from '../Classes/Character';

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
