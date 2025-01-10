class Calculator {
    add({a, b}) {
        let sum = a + b;
        console.log(`Addition: ${sum}`);
    }

    subtract({a, b}){
        let sum = a - b;
        console.log(`Subtraction: ${sum}`);
    }

    multiply({a, b}) {
        let sum = a * b;
        console.log(`Multiplication: ${sum}`);
    }

    divide({a, b}) {
        let sum = a / b;
        console.log(`Division: ${sum}`);
    }
}

const kalkulator = new Calculator();

kalkulator.add({a: 10, b: 2});
kalkulator.subtract({a: 10, b: 2});
kalkulator.multiply({a: 10, b: 2});
kalkulator.divide({a: 10, b: 2});