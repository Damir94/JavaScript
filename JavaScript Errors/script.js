
/*
try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}



function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}



let num = 1;
try {
    num.toPrecision(500);
}
catch(err) {
    document.getElementById("demom").innerHTML = err.name;
}




let x = 5;
try {
    x = y + 1;
}
catch(err) {
    document.getElementById("demom").innerHTML = err.name;
}




try {
    eval("alert('Hello)");
}
catch(err) {
    document.getElementById("demom").innerHTML = err.name;
}


let num = 1;
try {
    num.toUpperCase();
}
catch(err) {
    document.getElementById("demom").innerHTML = err.name;
}
*/

try {
    decodeURI("%%%");
}
catch(err) {
    document.getElementById("demom").innerHTML = err.name;
}