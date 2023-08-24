import Bowerman from '../Classes/Bowerman';

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
