var a = "something"

// if(true){
//    // console.log(a)
//     if(true){
//         var b =34
//         console.log(b)
//     }
// }

// console.log(a)
// console.log(b)
//other language if block vitor theke acss kora jai na 

//javaScript scope ---function used kore 

function some(){
    var a = 19
    function something(){
        //var a= 223
        console.log(a)
    }
    something()
    console.log(a)
}
some()


console.log(a)



//create function n%3==0 and n%5==0

function test(n){
    function a(){
        return n%3==0;
    }

    function b(){
        return n%5==0;
    }

   // console.log(a())

    if(a() && b()){
        console.log(n + ' is the divisible by 3 and 5')
    }else{
        console.log("Not divisible ..")
    }
} 

test(30)

//parents class all access in child 
//chill class  kon kichu parent access korte parbe na"