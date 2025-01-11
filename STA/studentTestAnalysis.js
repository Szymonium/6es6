class Analyzer {
  constructor([obj = {name: "", testResult: 0}, ...args]) {
    this.results = [obj, ...args];
  }

  getAverage() {
    let onlyResults =  this.results.map(studentResult => studentResult.testResult)

    let avg = onlyResults.reduce((prev, curr) => prev + curr) / onlyResults.length

    console.log(`Average result: ${avg}`);
  }

  getMinAndMax() {
    let minAndMax = this.results.map(studentResult => studentResult).sort((a, b) => a.testResult - b.testResult);
    minAndMax.splice(1, minAndMax.length - 2);

    console.log(`Student with minimal result: ${minAndMax[0].name}, Test result: ${minAndMax[0].testResult}`);
    console.log(`Student with maximal result: ${minAndMax[1].name}, Test result: ${minAndMax[1].testResult}`);
  }

  showAll() {
    this.results.forEach(studentResult => {
      console.log(`Student name: ${studentResult.name}, Test result: ${studentResult.testResult}`);
    })
  }
}

const testResults = [{name: "Szymon Karpiszen", testResult: 92},
  {name: "Wiktor Woś", testResult: 72},
  {name: "Kornel Janiuk", testResult: 53},
  {name: "Julian Kulwicki", testResult: 93},
  {name: "Kuba Rodziewicz", testResult: 80},
  {name: "Łukasz Darmofał", testResult: 67},
  {name: "Skibidi Sigma", testResult: 100},
  {name: "Jan kowalski", testResult: 12},
  {name: "Pilny uczeń", testResult: 100},
  {name: "Marceli Szerszeń", testResult: 99},
  {name: "Marsel Castalano", testResult: 0},
];

const testAnalyzer = new Analyzer(testResults);

testAnalyzer.getAverage();
testAnalyzer.getMinAndMax();
testAnalyzer.showAll();