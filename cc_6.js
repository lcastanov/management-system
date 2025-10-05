// Coding Challenge 6a

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `The employee ${this.name} works for the ${this.department} department`;
    }
}