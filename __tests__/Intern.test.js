const Intern = require('../lib/Intern');

test('can set school via constructor', () => {
    const testValue = 'KU';
    const e = new Intern('Bob', 1, 'test@test.com', testValue);

    expect(e.school).toBe(testValue);
});

test('getSchool() gets employees school', () => {
    const testValue = 'KU';
    const e = new Intern('Bob', 1, 'test@test.com', testValue);

    expect(e.getSchool()).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
    const testValue = 'Intern';
    const e = new Intern('Bob', 1, 'test@test.com', 'KU');

    expect(e.getRole()).toBe(testValue);
});