// Dinh nghia 1 doi tuong Promise quan ly hanh dong sinh ra 1 so ngau nhien trong khoang [0,1]
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNumber = Math.random();
        if (randomNumber < 0.5)
            resolve(`Random number is: ${randomNumber}`);
        else
            reject("Error: Random number is greater than 0.5");
    }, 2000);
});

// Dinh nghia 1 action cho phep nhieu request client goi cung 1 thoi diem
async function generateNumber() {
    // Thuc thi doi tuong Promise
    await myPromise
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

// Mo ta request tu client
generateNumber();





