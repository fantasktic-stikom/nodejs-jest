const sum = require('./index')

// TO BE
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// TO EQUAL
test('object assignment', () => {
    const models = {one: 1}
    models['two'] = 2
    expect(models).toEqual({one: 1, two: 2})
});

// NOT TO BE
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });