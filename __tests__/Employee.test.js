const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should check if initialized object is an instance of Employee Class", () => {
            const e = new Employee();

            expect(e instanceof Employee).toBe(true);
        });

        it("should check if initialized employee name is processed correctly through constructor", () => {
            const name = 'Bob';
            const e = new Employee(name);

            expect(e.name).toBe(name);
        });

        it('should check if the initialized employee ID is processed correctly through constructor', () => {
            const name = 'Bob';
            const id = '1';
            const e = new Employee(name, id);

            expect(e.id).toBe(id);
        });

        it('should check if the initialized employee email is processed correctly through constructor', () => {
            const name = 'Bob';
            const id = 1;
            const email = 'test@test.com';
            const e = new Employee(name, id, email);

            expect(e.email).toBe(email);
        });
    });

    describe('the get functions', () => {
        it('getName() should return the name of the employee', () => {
            const name = 'Bob';
            const e = new Employee(name);

            expect(e.getName()).toEqual(name);
        });

        it('getId() should return the ID of the employee', () => {
            const name = 'Bob';
            const id = 1;
            const e = new Employee(name, id);

            expect(e.getId()).toEqual(id);
        });

        it('getEmail() should return the email of the employee', () => {
            const name = 'Bob';
            const id = 1;
            const email = 'test@test.com';
            const e = new Employee(name, id, email);
        
            expect(e.getEmail()).toEqual(email);
        });

        it('getRole() should return the role of the employee', () => {
            const name = 'Bob';
            const id = 1;
            const email = 'test@test.com';
            const role = 'Employee';
            const e = new Employee(name, id, email);

            expect(e.getRole()).toEqual(role);
        });
    });
});