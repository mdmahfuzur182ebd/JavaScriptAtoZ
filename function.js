//What is Function 
//Function in Array

//Input Output Processing

// var date = new Date()
// var c = date.getFullYear()
// console.log(c)

//what is Function
// A set of statements that Performs a task or calculates a value

function functionName (){
  console.log('This is Function!')
}


//function functionName (){
 //body and statements
//}


function add(){
    var a = 20
    var b = 30
    console.log(a+b)
}

function multi(){
    var a = 90
    var b = 20
    console.log(a*b)
}


functionName()
add()
multi()
console.log(add)


for (let i = 0; i < 4; i++) {
    add()
}




// Function arguments and Parameters in js 

function totalSum(a, b){ //parameters
    var sum = a+b
    console.log('sum of :'+ sum)
}

totalSum(23, 49) //arguments
totalSum(23, 444)


//three Array Sum ....
var arr1 = [1, 2, 3]
var arr2 = [ 5,7, 9]
var arr3 = [34, 23, 12]

var sum = 0
for(var i = 0 ; i< arr1.length; i++){
      sum += arr1[i]
}
//console.log(sum)


function SumOfArray(arr){
    var sum = 0
    for(var i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    console.log(sum)
}

SumOfArray(arr1)
SumOfArray(arr2)
SumOfArray(arr3)
