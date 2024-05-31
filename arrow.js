let num = [1,2,3,4,5];

const newNum = num.map(function(i){
    return i * 5
})

const newNum2 = num.map(i => i*5);
console.log(newNum, num, newNum2);