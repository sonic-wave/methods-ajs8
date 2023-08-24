import Magician from '../Classes/Magician';

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
