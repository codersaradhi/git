const bucketList =[
{name:"neckband earphones", price:1799},
{name: "belt", price:800},
{name: "watch", price:1300},
{name: "phone case", price:300},
{name: "perfume", price:500},
{name: "full slevee shirts and polo shirts", price:3000}
]


///////////////////filter Method////////////////////////////// filters w.r.to condition
// const filteredItems = bucketList.filter((list) =>{
//     return list.price <= 1000;
// }) //reuturns in the form of array
// console.log(filteredItems);

///////////////////filter Method//////////////////////////////

///////////////////Map Method//////////////////////////////returns w.r.to key or values set 
// const itemNames = bucketList.map((list) =>{
//     return list.name
// }) //reuturns in the form of array
// console.log(itemNames);
///////////////////Map Method//////////////////////////////

///////////////////find Method//////////////////////////////returns very first item in a array in the form of array 
// const findItem = bucketList.find((list) =>{
//     return list.name === "belt";
// }) //reuturns in the form of array
// console.log(findItem);
///////////////////find Method//////////////////////////////

///////////////////forEach Method////////////////////////////// return every value in the array
// bucketList.forEach((list) =>{
//     console.log(list.name);
// })
    // let n = list.length;
    // let total_price =0;
    //     while(n !== 0 ){
    //     total_price += list.price[n];
    //     n -=1;
    // }
    // console.log(total_price);
 //reuturns in the form of array
///////////////////forEach Method//////////////////////////////




///////////////////some Method////////////////////////////// 
// const hasInExpensiveItems = bucketList.some((list)=>{
//     return list.price <= 500;
// }) //returns if some of the items in the list are true to the condition the it returns true
// console.log(hasInExpensiveItems);
///////////////////some Method//////////////////////////////

///////////////////every Method////////////////////////////// 
// const hasInExpensiveItems = bucketList.every((list)=>{
//     return list.price <= 2000;
// }) //returns if every  item in the list are true to the condition the it returns true
// console.log(hasInExpensiveItems);
///////////////////every Method//////////////////////////////

///////////////////reduce Method////////////////////////////// 
// const totalWorth = bucketList.reduce((currentTotal, item)=>{
//     return item.price + currentTotal;
// },0) 
// console.log(totalWorth);

// //////////normal way ////////////
// let totalWorth =0;
// bucketList.forEach((list)=>{
//       totalWorth += list.price;
// });
// console.log(`The worth of total items in your Bucket list are: ${totalWorth}` );
///////////////////reudce Method//////////////////////////////

///////////////////includes Method//////////////////////////////
const list = [1,2,3,4,5,6];

const includesTwo = list.includes(2);
console.log(includesTwo);

///////////////////includes Method//////////////////////////////




