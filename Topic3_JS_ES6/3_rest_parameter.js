// Su dung tham so rest
function sumNumber(...numbers){
    let total=0;
    for (const item of numbers) {
        total += item;
    }
    return total;
}

// console.log(sumNumber(1, 2, 3));
// console.log(sumNumber(1, 2, 3, 4, 5));
// console.log(sumNumber(1, 2));

// Toan tu: Spread (rải)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2, 10, 15, 20];
console.log(arr3);

// Ket hop giua ham voi tham so rest va toan tu rai spread
console.log(sumNumber(...arr3));