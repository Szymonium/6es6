class Student {
    constructor({name, age}) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
        console.log(`Successfully added grade ${grade} to student ${this.name}`);
    }

    getAverage() {
        let avg = this.grades.reduce((prev, curr) => prev + curr) / this.grades.length;
        console.log(`Average grade of student ${this.name}: ${avg}`);
    }
}

const wiktorek = new Student({name: "Wiktor Łoś", age: 17});
wiktorek.addGrade(4);
wiktorek.addGrade(5);
wiktorek.addGrade(3);
wiktorek.addGrade(1);

wiktorek.getAverage();