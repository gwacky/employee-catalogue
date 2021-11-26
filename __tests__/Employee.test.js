const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('can initiant employee instance', () => {
        const e = new Employee();

        expect(e).toBe('object');
    });

    it('can set name', () => {
        const name = 'Grace';
        const e = new Employee();

        expect(e.name).toBe(name);
    });

    it('can set id', () => {
        const testValue = 4;
        const e = new Employee();

        expect(e.id).toBe(testValue);
    });

    it('can set email', () => {
        const testValue = 'test@test.com';
        const e = new Employee();

        expect(e.email).toBe(testValue);
    });

    describe('getName funtion', () => {
        it('can get name using getName()', () => {
            const testValue = 'Grace';
            const e = new Employee(testValue);

            expect(e.getName()).toBe(testValue);
        });
    });

    describe('getId function', () => {
        it('can get id using getId()', () => {
            const testValue = 4;
            const e = new Employee();

            expect(e.getId()).toBe(testValue);
        });
    });

    describe('getEmail function', () => {
        it('can get email using getEmail()', () => {
            const testValue = 'test@test.com';
            const e = new Employee();

            expect(e.getEmail()).toBe(testValue);
        });
    });

    describe('getRole function', () => {
        it('getRole() returns automatically "Employee"', () => {
            const testValue = 'Employee';
            const e = new Employee();

            expect(e.getRole()).toBe(testValue);
        });
    });
});