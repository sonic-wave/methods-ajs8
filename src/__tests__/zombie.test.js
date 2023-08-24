import Zombie from '../Classes/Zombie';

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
