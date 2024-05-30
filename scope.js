let a = 10;
function add(){
    let b = 20;
    console.log("value of a, b is: ",a, b);
    function sub(){
        let c = 30;
        console.log("value of a, b, c", a, b, c);
        function mul (){
            let d = 40;
            
        }
    }
    sub()
    console.log("value c ", c);
}

add();
