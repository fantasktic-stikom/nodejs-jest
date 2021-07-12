test('there is no red', () => {
    expect('blue').not.toMatch(/red/)
})

test('but there is a "mic" at michel', () => {
    expect('michel').toMatch(/mic/)
})