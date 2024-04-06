// adding elements
// const body = document.body;
// body.append("SriVishnurupayanamshivaya");

// creating elements and 
// const body = document.body;
// const div = document.createElement("div");
// div.innerHTML =  "SriVishnurupayanamshivaya";
// div.textContent = "SriMathraynamaha";

// body.append(div);

//modify  elements text
// const div = document.querySelector("div");
// console.log(div.textContent);
// console.log(div.innerText);

//modifying elements HTML
// const body = document.body;
// const div = document.createElement("div");
// const strong = document.createElement("strong");
// strong.innerText = "Hello world 2";
// div.append(strong);
// body.append(div);


//removing elements
// const body = document.body;
// const div = document.querySelector('div');
// const spanhi = document.querySelector('#hi');
// const spanbye = document.querySelector('#bye');

// spanbye.remove()
// div.append(spanbye)

//modifiying element Attributes
// const body = document.body;
// const div = document.querySelector('div');
// const spanhi = document.querySelector('#hi');
// const spanbye = document.querySelector('#bye');
// console.log(spanhi.getAttribute("id"));
// console.log(spanhi.setAttribute("id","asdfjkoasjdfo"));
// console.log(spanhi.id = "asdfasdfasdf");
// spanbye.removeAttribute("id");

//modifying data attributes
// const body = document.body;
// const div = document.querySelector('div');
// const spanhi = document.querySelector('#hi');
// const spanbye = document.querySelector('#bye');

// console.log(spanhi.dataset.test); --printing the data set
// spanhi.dataset.newName = "Helloworld!"; --seting the new dataset

//modifiying element class
const body = document.body;
const div = document.querySelector('div');
const spanhi = document.querySelector('#hi');
const spanbye = document.querySelector('#bye');
// spanhi.classList.add("new-class-list");
// spanhi.classList.remove("new-class-list");
// spanhi.classList.toggle("new-class-list" ,true); --adding class with boolen
// spanhi.classList.toggle("new-class-list" ,false); --removing class with boolen

/////////////modifying style elements css to convert that attribute to camel case then you can modify
// spanbye.style.color = "red";
// spanbye.style.backgroundColor = "red";