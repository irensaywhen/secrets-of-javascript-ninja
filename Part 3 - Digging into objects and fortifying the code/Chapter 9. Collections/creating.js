const ninjas = ['Kuma', 'Hattori', 'Yagyu'];
const samurai = new Array('Oda', 'Tomoe');

function measure(items, insertMethod, removeMethod) {
  const startTime = new Date().getTime();

  for (let i = 0; i < 500000; i++) {
    items[insertMethod]('New item');
    items[removeMethod]();
  }

  return new Date().getTime() - startTime;
}

console.log(
  `Pop/push methods are around ${Math.round(
    measure(ninjas, 'push', 'pop') / measure(ninjas, 'shift', 'unshift')
  )} times faster`
);

module.exports = { ninjas, samurai };
