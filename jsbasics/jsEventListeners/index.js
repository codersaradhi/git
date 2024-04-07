// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

/////////adding event listeners/////////////
// grandparent.addEventListener('click',eve =>{
//     console.log("Grandparent 1 ");
// });
// grandparent.addEventListener('click',eve =>{
//     alert("SriVishunurupayanamshivya");
// });

// event deletgation
const divs = document.querySelectorAll("div");
const newDiv = document.createElement("div");

// event deletgation starts  --for normal addeventlistener function
// document.addEventListener("click", e => {
//     if (e.target.matches(".child")) {
//         console.log("hello");
// const newDiv = document.createElement("div");
// newDiv.style.width = '200px';
// newDiv.style.height = '200px';
// newDiv.style.backgroundColor = 'purple';
// document.body.append(newDiv);
//     }
// })

//event delegation for a globalfucntion call
addGlobalEventListener("click", ".child", e => {
    console.log("hi")
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'purple';
    document.body.append(newDiv);
})
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
}



// divs.forEach(div => {
//     div.addEventListener("click", () => {
//         console.log("hello World!");


//     })
// })

// const newDiv = document.createElement("div");
// newDiv.style.width = '200px';
// newDiv.style.height = '200px';
// newDiv.style.backgroundColor = 'purple';
// document.body.append(newDiv);



