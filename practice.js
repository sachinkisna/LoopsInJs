//All Even numbers

// let x;
// for(x=0;x<=100;x++){
//     if(x%2==0){
//     console.log(x);
// }
// }


//user gace

let gameNumber=56;
let userNumber=prompt('Guess the game number: Below');
while(userNumber!=gameNumber){
    userNumber=prompt('Guess the game number: Below');
}
console.log('Congradulation You Win');