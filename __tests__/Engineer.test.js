const Engineer = require('../lib/Engineer');

test('can set GitHub account', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Bob', 1, 'test@test.com', testValue);

    expect(e.github).toBe(testValue);
});

test('getRole() returna automatically "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Bob', 1, 'test@test.com', 'GitHubUser');

    expect(e.getRole()).toBe(testValue);
});

test('can get GitHub username with getGithub() function', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Bob', 1, 'test@test.com', testValue);

    expect(e.getGithub()).toBe(testValue);
});