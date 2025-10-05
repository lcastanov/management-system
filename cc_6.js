// Coding Challenge 6a

// Step 1
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `The employee ${this.name} works for the ${this.department} department`;
    }
}

// Step 2
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize
    }
    describe(){
        return `${this.name} manages in the department of ${this.department} a team of ${this.teamSize}`;
    }
}