let i;

// Simple Floop
// for(i=1;i<=10;i++){
//     console.log('Happy Tulsi Pujan Divas');
// }

//for of loop
// let name='Sachin Kumar';
// for(let i of name){
//     console.log(i);
// }


// for in loop

let student={
    name:'sachin',
    age:34,
    isPass:true,
};

for(let i in student){
    console.log(i,"=",student[i]);
}