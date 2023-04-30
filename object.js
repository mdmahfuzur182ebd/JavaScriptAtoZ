//What is Object
// How to declare an Object -> literal and constructor 
// How to access an Object -..

// var obj = {}
// obj.x = 10
// obj.y = 29
// console.log(obj)

// var point = {  //literal
//     x: 10,
//     y: 20,
//     z: 30
// }
// point.R = 89
// point.T = 789
// console.log(point)


// var obj = Object()  //constructor
// obj.x =19
// obj.o = 45
// console.log(obj)

// var obj = new Object()  //object create new keyword
// obj.A = 34
// obj.B = 54
// obj.C = 32

// console.log(obj)

//Accessing object Properties in JavaScript
//Dot natation and [] array natation

// var point = {
//     x: 29,
//     name: "some",
//     age : 34,
//     year: '2023'
// }

// point.name = 'Nothing'
// point['age'] = 23

// console.log(point.x)
// console.log(point.name)
// console.log(point.age)
// console.log(point['year'])
// console.log(point['x'])
// //console.log(point.d)
// point.some = undefined
// console.log(point)
// delete point.some  //remove object Properties
// console.log(point)

//compression



let obj1 = {
    x:34,
    some : 23,
    age: 24,
    name:"something"
}

let obj2 = {
    x:34,
    some : 23,
    age: 24,
    name:"something"
}

//console.log(obj1 === obj2)
if(obj1.age == obj2.age && obj1.x == obj2.x){
    console.log(true)
}else{
    console.log(false)
}
console.log(obj1)
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj1) === JSON.stringify(obj2) )

//Iteration of object

let obj3 = {
    id: 2,
    name: "Nothing",
    age: 34,
    year : '2023',
    country: ['Bangladesh', 'Nepal', 'India', 'Pakistani']
}

console.log('id' in obj3)

for(var i in obj3){
    console.log(i)
    console.log(i +':'+obj3[i])
}