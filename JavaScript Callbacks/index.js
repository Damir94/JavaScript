/*
function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum)
}

myCalculator(5, 5, myDisplayer);



setTimeout(myFunction, 3000);

function myFunction() {
    document.getElementById("demo").innerHTML = "I love You!";
}



setTimeout(function() { myFunction("I love you");}, 3000);
function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}



setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}



function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    
    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error")
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);



function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}


async function myFunction() {return "Hello";}

myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}    
);
    
    
    
    

async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("I love you!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
*/

