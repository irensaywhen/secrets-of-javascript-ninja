const createNegativeArrayProxy = require('./proxiesForNegativeArrayIndexes');

function measure(items) {
  const startTime = new Date().getTime();

  for (let i = 0; i < 500000; i++) {
    items[0] === 'Yoshi';
    items[1] === 'Kuma';
    items[2] === 'Hattori';
  }

  return new Date().getTime() - startTime;
}

const ninjas = ['Yoshi', 'Kuma', 'Hattori'];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

console.log(
  `Proxies are around ${Math.round(
    measure(proxiedNinjas) / measure(ninjas)
  )} times slower`
);
