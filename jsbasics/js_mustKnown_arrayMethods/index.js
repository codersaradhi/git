const bucketList =[
{name:"neckband earphones", price:1799},
{name: "belt", price:800},
{name: "watch", price:1300},
{name: "phone case", price:300},
{name: "perfume", price:500},
{name: "full slevee shirts and polo shirts", price:3000}
]


///////////////////filter Method//////////////////////////////
const filteredItems = bucketList.filter((list) =>{
    return list.price <= 1000;
}) //reuturns in the form of array
console.log(filteredItems);

///////////////////filter Method//////////////////////////////