import Undead from '../Classes/Undead';

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
