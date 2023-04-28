
// console.log("hello world!")
// console.log(45)
// console.log(60.7787)
// console.log('mY fav no '+ 9)
// console.log( 9 +'9')

// var n = 7
// var str =  ''

// if(n % 2 === 0){
//     str = 'EVEN'
// }else{
//     str= 'ODD'
// }
// console.log(str)

// var result = n % 2 === 0 ? 'Even': 'ODD'
// console.log(result);

//condition ? true : false




//Search array
let arr = [12, 33, 43, 56, 34 , 23]

let target = 293
let isFound = false
let temp = 0

for(let i = 0 ; i<arr.length; i++){
    let element = arr[i]
    if(element == target){
        console.log("Data Found At Index :" + i)
        isFound = true
        temp +=1
        console.log(temp)
        break
    }
}

if(temp == 0){
  console.log("Data Not Found!!")
}

if(!isFound){
    console.log("Data Not Found -->>")
}

