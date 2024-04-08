/////////////////////////////promise syntax code/////////////////////////////////
// let p = new Promise((reslove,reject) =>{
//     let a = 1+2;
//     if(a==2){
//         reslove('Sucess');
//     }
//     else{
//         reject('Fali');
//     }
// })

// p.then((message)=>{
//     console.log("This promise is " + message + " standed");
// }).catch((message) => {
//     console.log("Sorry, i can't make my word of promise but I didn't " + message +" i will not accepet my rejections");
// })

////////////promises example////////////////
const userleft = false;
const userWatchingCatMemes = false;

////////////////////call back functions//////////////
// function watchTutorialCallBack(callback,errorcallback){
//     if(userleft){
//         errorcallback({
//             name:"User Left",
//             message:":("
//         })
//     }else if(userWatchingCatMemes){
//         errorcallback({
//             name:"User Watching Cat Meme \n",
//             message:"Me < Cats"
//         })
//     }else{
//         callback('Thumbs up and Subscribe');
//     }
// }
// watchTutorialCallBack((message) =>{
//     console.log('Sucess' + message);
// },(error)=>{
//     console.log(error.name + ' '+ error.message)
// })

///////////////////////////using promise////////////////////////
function watchTutorialPromise(){
    return new Promise((reslove, reject)=>{

    if(userleft){
        reject({
            name:"User Left",
            message:":("
        })
    }else if(userWatchingCatMemes){
        reject({
            name:"User Watching Cat Meme \n",
            message:"Me < Cats"
        })
    }else{
        reslove('Thumbs up and Subscribe!');
    }
})
}

watchTutorialPromise().then((message) =>{
    console.log('Sucess:' + message);
}).catch((error)=>{
    console.log(error.name + ' ' +error.message);
})

/////////////////////////////Async and wait to work with js promises

