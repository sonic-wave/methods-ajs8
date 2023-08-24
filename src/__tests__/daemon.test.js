import Daemon from '../Classes/Daemon';

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
