// => speed detecting program
function speedDetector (speed){
    // defining our variables
    let lmtSpeed= 70
    let demerit= 5
    let overSpeed= (speed-lmtSpeed)
    let demeritPoints= (overSpeed/demerit)
    let excess= (lmtSpeed+60)
    
    //executing our function using if and whatif statements
    if (speed <=lmtSpeed) {console.log ('OK')}
    else if (speed>=excess) {console.log ("licence suspended")}
    else if (speed>overSpeed) {console.log (demeritPoints + "points")}
     }
    speedDetector(80)
