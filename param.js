// function add(a, b){
//     a = a === undefined ? 10 : a;
//     console.log(a);
//     console.log(a+b);
// }
// add(20, 30)


function add(a = 10, b){
    console.log(a+b);
}
add(20, 30)


function sub (a, b , c, ...d){
    console.log(a, b, c, d);
}

sub(1,3,2,3,5,5,5,6,6,7,8,9010,2842)