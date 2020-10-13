// Create a map
const ninjaIslandMap = new Map();

const ninja1 = { name: 'Yoshi' };
const ninja2 = { name: 'Hattori' };
const ninja3 = { name: 'Kuma' };

// Create a mapping
ninjaIslandMap.set(ninja1, { homeIsland: 'Honshu' });
ninjaIslandMap.set(ninja2, { homeIsland: 'Hokkaido' });

const directory = new Map();
directory.set('Yoshi', '+7 999');
directory.set('Kuma', '+7 888');
directory.set('Hiro', '+7 777');

module.exports = { ninjaIslandMap, ninja1, ninja2, ninja3, directory };
