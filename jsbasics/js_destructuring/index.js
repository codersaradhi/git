// const alphabets = ['A','B','C','D','E','F'];
// const numbers = [1,2,3,4,5,6,7,8];

// const [a,,c,...rest] = alphabets;
// const newArray = [...alphabets,...numbers]; //concatnate two array or objects 

// console.log(newArray);
// console.log(`${a} ${c} ${rest}`);

//destructing   in functions
// function sumAndMultiply(a,b){
//     return [a+b, a*b];
// }

// const [sum, multiply,divison = "no divsion"]  = sumAndMultiply(2,3);  //desturcturing for fucntions and helpful for default values
// console.log(` Sum: ${sum}\n multiply: ${multiply} \n divison: ${divison}`);


//destructing  in objects
const personOne = {
    name:"Chaitu",
    age:24,
    favoriteFood:"anything eatable",
    address:{
        city:"rajmaundry",
        state:"AndhraPradesh"
    }
}
const personTwo = {
    name:"Siva",
    age:25,
    // favoriteFood:"depends on taste",
    // address:{
    //     city:"rajmaundry",
    //     state:"AndhraPradesh"
    // }
}
///////normal way of printing objects///////
// const {name, age} = personOne;
// console.log(`name:${name} age:${age}`);

/////destructring way of printing objects
//const {name:firstName, age ,address:{ city } ,favoritePlace = "Temples"/*default values untill personOne having any favorite place */,...rest} = personOne;
//console.log(`name:${firstName} age:${age} favoritePlace:${favoritePlace} city:${city}`);

/*combining objects*/
// const personThree = {...personOne,...personTwo};
// console.log(personThree);

// console.log(rest);

//objects used in functions
/////normal way of printing the objects////
// function PrintUser(user){
//     console.log(`Name of user is ${user.name}  age is ${user.age}`);
// }
// PrintUser(personOne);
/////////////////////////////
//////printing with destructing with default values are the single most use case of desturcturing///
function PrintUser({name, age,favoritePlace ="Temples"}){
    console.log(`Name of user is ${name}  age is ${age} and his favorite place is ${favoritePlace}`);
}
PrintUser(personOne);
/////////////////////////////////////////////
