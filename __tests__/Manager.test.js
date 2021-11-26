const Manager = require('../lib/Manager');

test('can set office number', () => {
    const testValue = 100;
    const e = new Manager('Bob', 1, 'test@test.com', testValue);

    expect(e.officeNumber).toBe(testValue);
});

test('getRole() returna automatically "Manager"', () => {
    const testValue = 'Manager';
    const e = new Manager('Bob', 1, 'test@test.com', testValue);

    expect(e.getRole()).toBe(testValue);
});

test('can set office number with getOffice() function', () => {
    const testValue = 100;
    const e = new Manager('Bob', 1, 'test@test.com', testValue);

    expect(e.getOfficeNumber()).toBe(testValue);
})