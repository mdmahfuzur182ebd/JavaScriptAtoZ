//let var const
//var vs let and const

//global and Local Scope

let number = 50

function print() {
  let square = number * number

  if (number < 60) {
    var largerNumber = 80
    let anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  //console.log(anotherLargerNumber)
}


print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined
