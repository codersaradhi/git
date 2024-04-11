//normal function

// function countdown(n){
//     for(let i=0;i <= n;i++){
//         console.log(i);
//     }
//     console.log("And we are done!");
// }
// countdown(6);

//recursion 
// function recussiveCountDown(n){
//     //base case
//     if(n <= 0){
//         console.log("And we are done!");
//         return;
//     }
    
//     // recursive call with an udpation
//     recussiveCountDown(n-1);
//     // recursive defination
//     console.log(n);

// }

// recussiveCountDown(6);


///////////////////////////////////////family tree/////////////////////////////////
const tree ={
    name: "Srinivas Rao and AdiLakshmi",
    childern:[
        {
            name:"Mr.Siva Shakar babu and miss.Siva shankar",
            childern:[
                {name:"shankari" ,childern:[]},
                {name:"Siva jr 2",childern:[]}
            ]
        },
        {
            name:"Mr.Chaitanya and Miss.Chaitanya",
            childern:[
                {name:"Chaitanya jr 1" ,childern:[]},
                {name:"Chaitanya  jr 2",childern:[]}
            ]
        }
    ]
}

function familyTree(t){
    
    if(t.childern.length === 0){
        return;
    }
    
    t.childern.forEach(child =>{
            console.log(child.name);
            familyTree(child);
        })
    }

console.log(`main person's ${tree.name}`);
familyTree(tree);
/////////////////////////////////////////////////////////////////////////////////////////////////