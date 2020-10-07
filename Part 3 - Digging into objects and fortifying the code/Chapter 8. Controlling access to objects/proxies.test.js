const { emperor, representative } = require('./proxies');

test('We can assign value through proxy object', () => {
  representative.nickname = 'Emperor';

  expect(emperor.nickname).toBe('Emperor');
  expect(representative.nickname).toBe('Emperor');
});
