function getName(name = "Pham Tien Dung"){
    console.log(`Name is ${name}`);
}

getName();
getName("Nguyen Tuan Anh");

function getFullName(fName, lName = "Hoang Tuan"){
    console.log(`Fullname is ${fName} ${lName}`);
}

getFullName("Duc");
getFullName("Binh", "Nguyen Hai");