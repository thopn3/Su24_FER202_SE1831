function Sample(){
    let x = 10;

    if(true){
        let y = 20;
        console.log(x);
        x += 2;
        console.log(y);
    }
    console.log(x);
    // console.log(y); // Error: y is not defined
}

// Sample(); // 10 20 12

function Sample1(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
    // console.log(i); // i khong dc su dung ngoai pham vi khai bao cua no
}

// Sample1();

// Constant: Hang

function Sample2(radius){
    const PI = 3.14; // Fixed

    if(radius>0){
        return PI * radius * radius;
    }else{
        return "Radius must be > 0";
    }
}

console.log(Sample2(10));
