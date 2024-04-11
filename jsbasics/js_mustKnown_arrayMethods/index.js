// const bucketList =[
// {name:"neckband earphones", price:1799},
// {name: "belt", price:800},
// {name: "watch", price:1300},
// {name: "phone case", price:300},
// {name: "perfume", price:500},
// {name: "full slevee shirts and polo shirts", price:3000}
// ]


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
// const list = [1,2,3,4,5,6];

// const includesTwo = list.includes(2);
// console.log(includesTwo);

///////////////////includes Method//////////////////////////////


///////////////20+ Array Methods ////////////////////////
const people =[
    {name: "Siva",Age:23},
    {name: "Shankari",Age:18},
    {name: "Upendra",Age:33},
    {name: "Bhrama",Age:54},
]
const numbers =[
    [23,2323],[2342],[223,[234234],[23424]],[[983],[28938]],[2049,[949]],2040924
]

/////////////////group by/////////////////
// const a = Object.groupBy(people, person => person.name[0]);

// console.log(a);
///////////////////////////////////////////////////

// const a = people.with(1,7);
// console.log(a, people);


// const a = people.at(-1); //same like people[1] but it uses -ve numbers also
// console.log(a, people);


// const a = people.fill(1,1,3); //.fill(value you want to fill, starting index ,ending index)
// console.log(people);

// const a = people.reverse(); 
// console.log(people);
// const a = people.splice(); 
// console.log(people);
// const a = people.sort(); 
// console.log(people);

// const a = numbers.flat(Number.POSITIVE_INFINITY)
// console.log(a);


const listN = [1,2,3,0,5,6]; //find and findLast
// const a= listN.findLast(n => n < 2); ////////it checks and find from the last
const a= listN.reduceRight(n => n > 2); //reduce and reduceRight
console.log(a);




