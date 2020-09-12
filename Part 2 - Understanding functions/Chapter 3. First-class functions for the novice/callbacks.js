let text = 'Domo arigato!';

function useless(ninjaCallback) {
  return ninjaCallback();
}

function getText() {
  return text;
}

const data = {
  useless,
  getText,
  text,
};

module.exports = data;
