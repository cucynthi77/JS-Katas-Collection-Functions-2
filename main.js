function add(num1, num2) {
    return num1 + num2
}
add(2, 4);


function multiply(num2, num1) {
    let total = 0
    for (let index = 0; index < num2; index = add(index, 1)) {
        total = add(total, num1)


    }
    return total
}
// console.log(multiply(6, 4))

function power(num1, num2) {
    let total = 1
    for (let index = 0; index < num2; index = add(index, 1)) {
        total = multiply(total, num1)
        // console.log(index)
        // console.log(total)
    }
    return total
}
// console.log(power(6, 8))

function factorial(num1) {
    let total = 1

    for (let index = num1; index > 0; index = add(index, -1)) {
        total = multiply(total, index)
        // console.log("total" + total)
        // console.log("index" + index)
        // console.log(index)
    }
    return total


}
// console.log(factorial(4))
function fibonacci(num1){
    let array=[0,1];
    
      
     for ( let index=2;  index < num1 ; index=add(index,1)) {
         let previousnum= array[add(index,-1)]
         let previousnum2= array[add(index,-2)]
         let newnum=add(previousnum,previousnum2)
         array.push(newnum)
         console.log(array)
        }
        
       return array[add(num1,-1)] 
    }
    console.log(fibonacci(30))