// Using generators for generating unique Ids
function* IdGenerator() {
  // This variable can't be modified from outside
  let id = 0;
  // A loop generating am infinite sequence of Ids
  while (true) {
    yield ++id;
  }
}

module.exports = { IdGenerator };
