// every() method in js

// check if every element pass a test

let arr = [10,20,30,40,50]

let check = arr.every(test)
 function test(num){
    return num % 2 == 0;
 }

 console.log(check);// true bcuz every single one of them satisfy that they are even number


 