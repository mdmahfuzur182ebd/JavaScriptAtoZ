// console.log("array ............")
// var arr = [56 ,7,9,0]
// console.log(arr)

// var arr = Array(1,2,4,5,6,8)
// console.log(arr)

// var arr = [23, 4, 5, 6, 77]
// arr[10] = 222
// console.log(arr)
// console.log('Array Length ' + arr.length)
// //console.log(arr[9])

// let array1 = [13, 4, 5 ,4 ,5]



// //  for(var i=0 ; i<array1.length; i++){
// //        // console.log(array1[i])
// //        console.log(i)
// //     }

// // let sum =0
// // for(var i = 0; i<array1.length; i++){
// //    sum += array1[i]
// // }
// // console.log(sum)

// for (let index = 0; index < array1.length; index++) {
//     if(array1[index] % 2 == 0){
//         console.log(array1[index])
//     }
    
// }

//length find out  without using length Function

//Insert , Remove $ Replace Methods


// var arr = [1,2,4,9,34]
// //insert 44 index 3

// arr[3] = 44
// arr.push(44)
// arr.unshift(44)
// arr.splice(3, 0, 44, 55) //insert

// //delete

// arr[3] = null
// arr[3] = undefined
// arr.pop()
// arr.shift()
// arr.splice(3,1)

// //update and Replace

// arr[3] =45
// arr.splice(2,1,35)

// console.log(arr)
// console.log(arr.length)


//Search from Array in JavaScript
//Search Data 

// let arr = [12, 44, 33, 23, 65, 99, 2 ,1,3,5]

// let target = 1
// let isFound = false

// for (let i = 0; i< arr.length; i++) {
//   if( arr[i] == target){
//     console.log('Data Found At Index : ' + i)
//     isFound = true
//     break
//   }
// }

// if(!isFound){
//     console.log('Data Not Found!!')
// }

//Multi Dimensional Array


// let arr = [
//     [78, 80, 90, 79],
//     [80, 82, 84, 89],
//     [79, 86, 87, 99],
// ]
// //console.log(arr)
// for ( var i = 0 ; i< arr.length; i++){
//     for(var j =0 ; j<arr[i].length; j++){
//        // console.log('Element '+ i+ ':'+  arr[i][j])
//     }
// }

// let b = [
//     [
//         [89, 67, 87, 98], [65,87,57,87]
//     ]
// ]
// //console.log(b)
// for ( var i = 0 ; i<b.length; i++){
//     for(var j =0 ; j<b[i].length; j++){
//         for(var k = 0; k<b[i][j].length; k++){
//           // console.log(b[i][j][k])
//            console.log('Element '+i+j+k+':'+  b[i][j][k])
//         }
        
//     }
// }


// let a =[
//     [
//         [
//             [89,98,76], [65,78,98], [89, 77,98]
//         ]
//     ]
// ]
// //console.log(a)



//Reverse and Array

let arr = [1,2,3,4,5,9] //[5,4,3,2,1] reverse

for (let i = 0; i < (arr.length/2); i++) {
  //  console.log(i)
   let temp = arr[i]
   //console.log(temp)
   arr[i] =arr[arr.length-1-i]
  // console.log(arr[arr.length-1-i])
   arr[arr.length-1-i] = temp
  // console.log(temp)
}
console.log(arr)
//console.log(arr.length)

// for (let i = arr.length-1; i>=0; i--) {
//     const element = arr[i];
//     console.log(element)
    
// }

//console.log(arr.reverse()) //build in function reverse
//console.log(arr.length)

//Array Function........


var arr1 = [44,23,42,12,31,32,12]
console.log(arr1.join('.'))

var arr3 = [45, 34, 23, 56]

var arr2 = arr1.concat(arr3)
console.log(arr2)


console.log(arr3.fill(undefined))
