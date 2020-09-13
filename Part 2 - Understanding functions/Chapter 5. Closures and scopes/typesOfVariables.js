const firstConst = 'samurai';

const secondConst = {};
var globalNinja = 'Yoshi';

function reportActivity() {
  var functionActivity = 'jumping';

  for (var i = 1; i < 3; i++) {
    var forMessage = globalNinja + ' ' + functionActivity;
  }

  // i and forMessage are accessible from outside the loop
  return { i, forMessage };
}

const GLOBAL_NINJA = 'Yoshi';

function reportActivityWithLet() {
  const functionActivity = 'jumping';

  for (let i = 1; i < 3; i++) {
    let forMessage = GLOBAL_NINJA + ' ' + functionActivity;
  }

  // i and forMessage are accessible from outside the loop
  return { i, forMessage };
}

module.exports = { reportActivity, reportActivityWithLet };
