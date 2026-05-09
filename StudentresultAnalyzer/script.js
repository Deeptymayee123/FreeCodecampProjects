const Student = [
  { id: 1, name: "Amit", marks: 78 },
  { id: 2, name: "Neha", marks: 45 },
  { id: 3, name: "Raj", marks: 92 },
  { id: 4, name: "Sara", marks: 36 },
  { id: 5, name: "John", marks: 67 },
  { id: 6, name: "Pooja", marks: 81 },
];

// filter std for pass
const passStd = Student.filter((std) => std.marks >= 40);
// console.log(passStd);

// reduce((accumulator, currentValue) => {}, initialValue)
const TotalMark = Student.reduce((totalM, std) => {
  return totalM + std.marks;
}, 0);

console.log(TotalMark);

const avgMark = TotalMark / Student.length;

let finalResult = [];
const FinalResult = Student.map((item) => {
  finalResult.push({
    name: item.name.toUpperCase(),
    Status: item.marks >= avgMark ? "Pass" : "Fail",
  });
});
console.log(finalResult);
