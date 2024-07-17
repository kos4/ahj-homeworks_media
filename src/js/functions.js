export default function validCoordinate(coordinate) {
  if (!coordinate || !/^\[?-?\d+\.?\d*,\s?-?\d+\.?\d*]?$/.test(coordinate)) return false;

  let coord = coordinate.replace(/[^\d.,-]/gi, '');
  coord = coord.split(',');

  return {
    lat: coord[0],
    long: coord[1],
  };
}
