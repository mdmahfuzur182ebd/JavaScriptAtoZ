
//function and Arguments 

function something(a, b, c){
    console.log(arguments)
    console.log(typeof b)
}

something(12, 4,55)



function add(){
    for(var i = 0; i<arguments.length; i++){
       // console.log(i)
        console.log(arguments[i])
    }
}

//add(34, 5, 22)


function sumOfSomething(){//wish your parameter
    var sum = 0
    for(var i = 0; i<arguments.length; i++){
        sum+=arguments[i]
       // console.log(arguments[i])
    }
    return sum
}

var t = sumOfSomething(23,45,66,77) //unlimited arguments given
var s = sumOfSomething(1,2,3,4,5,6,7,8,9,10)//55
//sumOfSomething(11,12,13,14,15,16,17,18,19,20)//155
//sumOfSomething(21,22,23,24,25,26,27,28,29,30)//255
//sumOfSomething(31,32,33,34,35,36,37,38,39,40)//355

console.log(s)
console.log(t)


function Person(fname, lname, age){
    return {
        firstName:fname,
        lastName: lname,
        age: age
    }
}

let person = Person('Mahfuzur', 'Rahman', 23)
console.log(person)