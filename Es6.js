// let - let us reassing / replace
let name = 'mehedi'
name = 'hasan'


// const age = 20 ;
// age = 23;
// console.log(age);


// const - dont allow to reassing /replace
const age =20 ;
// age = 23;
// console.log(age);
const student = { name: 'mehedi' ,age: 29,roll:464298}
student.age = 333;
delete student.age;
// student = {name:'moon'}
// console.log(student);


const bondu = 'moon';
function friend(){
    const bondu = 'moon';
    // console.log(bondu);
    console.log('accass from inside block',bondu);
}
console.log('accass from outside block',bondu);
// console.log(bondu);
friend();