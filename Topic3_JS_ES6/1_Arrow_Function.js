// Truyen thong:
function Add(a, b){
    return a + b;
}
console.log("Sum = " + Add(10, 20));

// ES6:
const add = (a, b) => a + b;
console.log("Sum 1 = " + add(10, 20));

const total = (a, b) => {
    if(a<=0 || b<=0)
        console.log("a or b must be greater than zero.");
    else
        console.log("Total = " + (a+b));
};
total(-10, 20);
total(10, 20);

const student = {
    fName: "Dung",
    lName: "Pham Tien",
    fullName: () => console.log(`Fullname is: ${student.fName} ${student.lName}`)
};

student.fullName();
