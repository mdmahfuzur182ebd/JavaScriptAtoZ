for(; ;){
    var rand = Math.round(Math.random() * 20 + 1)
    if(rand == 10){
        console.log("Winner Winner Chicken Dinner")
        break
    }else{
        console.log('You Have Got ' + rand)
    }

}


// var isRunning = true
// while(isRunning){
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if(rand == 4){
//         console.log('Winner Winner Chicken Dinner')
//        // isRunning = false
//        break
//        //continue
//     }else{
//         console.log('You have got '+ rand)
//     }
// }
