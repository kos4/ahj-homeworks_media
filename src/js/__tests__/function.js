import validCoordinate from '../functions';

test.each([
  ['51.324, -10.234', {
    lat: '51.324',
    long: '-10.234',
  }],
  ['51.324,-10.234', {
    lat: '51.324',
    long: '-10.234',
  }],
  ['[51.324, -10.234]', {
    lat: '51.324',
    long: '-10.234',
  }],
  ['2342', false],
  ['dsffss', false],
  ['51.50851,', false],
])('coordinate check: %s', (coordinate, expected) => {
  const status = validCoordinate(coordinate);

  expect(status).toEqual(expected);
});
