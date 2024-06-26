const arr = [10, 20, 30, 40, 50];
const obj = {
    fName: "Dung",
    lName: "Pham Tien",
    age: 20
};

// Array destructuring
const [x, y, z, ...rest] = arr;
console.log(x);
console.log(y);
console.log(z);
console.log(rest);

// Object destructuring
const {fName, lName, age} = obj;
console.log(`${fName} ${lName} - ${age}`);

const {fName:f, lName:l, age:a} = obj;
console.log(`${f} ${l} - ${a}`);
