// findindex() method in js
// returns element index of number that satisfy condition 

let arr = [10,20,30,40,50]

let check = arr.findIndex(test)
function test(num){
    return num >=19;
}
console.log(check);// 1 is returned bcuz it only returns index


