
var isRunning = true
while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 4){
        console.log('Winner Winner Chicken Dinner')
       // isRunning = false
       break
       //continue
    }else{
        console.log('You have got '+ rand)
    }
}


var n = 7;

for(var i = 1 ; i<=n ; i++){
    var result = " ";
    for(var j=1; j<i; j++){
        result += j + ''
    }
    console.log(result)
}



var n =7
for (var i = 1; i<=n; i++){
    var result = ''
    for(var j=1; j<n; j++){
         result += '*' + ''
    }
    console.log(result)
}