// for node js
// const usergreetings = require ('./message.js');
// // console.log(usergreetings);
// console.log(usergreetings.message());


// for html page///////
import { name, age } from "./person.js";
import message from "./message.js";

let text = "My name is " + name + ", I am " + age + ".";

document.getElementById("demo_person").innerHTML = text;
document.getElementById("demo_message").innerHTML = message();