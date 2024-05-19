// function add(){
//     console.log("add function is executed")
// }

// add()

// function getSalary (){
//     return 10000;
// }

// const val = getSalary();
// console.log(val);

let arr = [1,2,]

function modifyString(str) {
    console.log(str);
    str += " World";
    console.log(str);
}

let myString = "Hello";
modifyString(myString);
console.log(myString); 

function modifyArray(arr) {
    arr.push(4);
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray);