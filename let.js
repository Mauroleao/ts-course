'use strict';
var a = 1;
function func() {
    console.log(a);
    var b = 2;
    if (true) {
        var c = 3;
        console.log(b);
        console.log(c);
    }
}
func();
