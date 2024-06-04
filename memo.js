

function multBy10 (x) {
    let cache = {};
    return function memo (){
        if(cache[x]){
            console.log(cache, "inside");
            return cache[x]
        }
    
        console.log("outside", cache);
        const result = x * 10;
        cache[x] = result
        return result;
    }
}


const a = multBy10(4)
console.log(a);
a(4)
a(4)
a(4)
a(4)

a(5)
a(8)
a(5)
a(10)