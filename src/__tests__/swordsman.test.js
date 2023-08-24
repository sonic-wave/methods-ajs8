import Swordsman from '../Classes/Swordsman';

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
