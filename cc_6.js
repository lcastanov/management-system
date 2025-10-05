// Coding Challenge 6a

// Step 2
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `The employee ${this.name} works for the ${this.department} department`;
    }
}

// Step 3
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize
    }
    describe(){
        return `${this.name} manages in the department of ${this.department} a team of ${this.teamSize}`;
    }
}

// Step 4

let emp1 = new Employee('Lynn', 'Marketing');
let emp2 = new Employee('Noah', 'Finance');
let emp3 = new Employee('Ana', 'Customer Relations');

let man1 = new Manager('Horacio', 'Marketing');
let man2 = new Manager('Ruby', 'Finance');
let man3 = new Manager('Robert', 'Customer Relations');