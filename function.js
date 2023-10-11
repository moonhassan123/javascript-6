// function add (num1,num2,num3,num4){
//     const totle = num1 + num2 + num3 + num4;
//     // console.log('this is a add function');
//     console.log(totle);
//     return totle;
// }
// const returnTotle = add(10, 20, 30, 40)



function sendMonyToEmploy (slary,bonous = 0){
    // const initialBonus = bonous|| 0;
    const totle = slary + bonous;
    // console.log('this is a add function');
    console.log(totle);
    return totle;
}
const returnTotle = sendMonyToEmploy(30000,15000)

const salaryWithTrasportation = returnTotle + 3500;
console.log(salaryWithTrasportation);