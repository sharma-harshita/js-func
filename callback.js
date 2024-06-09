let a = 10;

setTimeout(()=>{
    console.log(a, "inside settimeout");
}, 1000)

function x(temp){
    temp()
}
function y (){
    console.log("inside x", a);
}

x(y)

