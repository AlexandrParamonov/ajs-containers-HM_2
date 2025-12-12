import ErrorRepository from '../errorRepository';

test('translate message error', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(1)).toBe('count not found');
});
test('return unknown error', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(3)).toBe('Unknown error');
});
