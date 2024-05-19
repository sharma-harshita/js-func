let str = "john";
function changeName (name){
    name += "doe"
    console.log(name, str);
}
changeName(str)

console.log(str);


let arr = [1,2,3];

function modifyArr(num){
    console.log(num, arr);

    num.push(4);
    console.log(num, arr);
}
modifyArr(arr)
console.log(arr);
