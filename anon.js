// const add = function (){
//     return 10;
// }

// const a = add()
// console.log(a);


function addition (f, a, b){
    let res = a+b
    f(res)
}

const print = function (val){
    console.log(val)
}

addition(print, 10, 50)