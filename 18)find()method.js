// find() method in js

// returns the first element that satisfy a condition

let arr = [10,20,30,40,50]

let check = arr.find(test)
function test(num){
    return num >=19;
}
console.log(check);// 20 is returned

// output
// 20
