// when accessing a variable that lives outside a function 
// you'd normally pass it into the function as a parameter.

function sum (num1, num2) {
    return num1 + num2
}
console.log(sum(2,3))


// accessing variables without a parameter
// in this case the function uses variables from its parent scope
var num3 = 4
var num4 = 5

function sum2 () {
    return num3 + num4
}

console.log(sum2())
console.dir(sum2)


function outerSum () {
    var num5 = 8
    return function innerSum() {
        return num3 + num5
    }
}

// the innerSum function keeps the outer scope it needs 'enclosed'
// a function preserves references to all the variables it needs 
// outside its scope