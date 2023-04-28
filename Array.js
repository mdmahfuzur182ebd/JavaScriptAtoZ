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


var arr = [1,2,4,9,34]
//insert 44 index 3

arr[3] = 44
arr.push(44)
arr.unshift(44)
arr.splice(3, 0, 44, 55) //insert

//delete

arr[3] = null
arr[3] = undefined
arr.pop()
arr.shift()
arr.splice(3,1)

//update and Replace

arr[3] =45
arr.splice(2,1,35)

console.log(arr)
console.log(arr.length)