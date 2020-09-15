function animateIt(elementId) {
  const elem = document.getElementById(elementId);
  let tick = 0;

  let timer = setInterval(function () {
    if (tick < 100) {
      elem.innerHTML = tick;
      tick++;
    } else {
      // After calling this function, a new lexical env is being created
      // This env will be alive until we call clearInterval func
      clearInterval(timer);
      console.assert(tick === 100, 'Tick is not 100');
      console.assert(elem, 'Element is not accessible via a closure');
      console.assert(timer, 'Timer reference is also accessible via closure');
    }
  }, 10);
}
