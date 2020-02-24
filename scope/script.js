// scope : variable access

// default is root scope- window object.

var fun = 5;

function funFunction() {
    //child scope
    var fun = "helllo";
    console.log(1, fun);
}

function funnerFunction() {
    var fun = "Byeeeee";
    console.log(2, fun);
}

function funnestFunction() {
    fun = "AHHHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funnerFunction();
funnestFunction();