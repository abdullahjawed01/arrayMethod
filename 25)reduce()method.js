// reduce() method in js
// runs a fucntion on each element to reduce to it to a single value


// reduce method has 3 parameters 
// 1. accumulator step => stores the previous step
//2 . currentValue ==> current array element
//3. initialValue ==> starting value


let numbers = [10,20,30,40,50]

let total = numbers.reduce((acc,cur)=> {
    return acc + cur;
}, 0)

console.log(total);


// with string
let numberss = ["h","e","l","l","o"]

let totals = numberss.reduce((acc,cur)=> {
    return acc + cur;
}, )

console.log(totals);

