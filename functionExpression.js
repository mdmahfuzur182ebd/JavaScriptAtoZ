//What is Function Expression 

// function sum(){
//     console.log('this is user define Function..')
// }

// sum()

var addition = function(a, b){
   console.log(a+b)
}

addition(2,3)

setTimeout(function(){
    console.log('After 5 second print this statement')
}, 5000)

var add = addition
//console.log(add)
add(4,5)