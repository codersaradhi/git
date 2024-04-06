// Top-to bottom Dom Travesing/////////////////////////////////////////////////////////

// using id travesal
// const grandparent = document.getElementById("grandparent-id");

//using class
// const parent = Array.from(document.getElementsByClassName("parent"));

//query selector for ids
// const grandparent = document.querySelector("#grandparent-id");

//query selector for classes
// const parent = document.querySelectorAll(".parent");

//selecting childern 
// const grandparent =document.querySelector("#grandparent-id");
// const parents = Array.from(grandparent.children);
// const parentOne = parents[0];
// const childern = Array.from(parentOne.children);

//selecting Descendants
// const grandparent = document.querySelector("#grandparent-id");
// const childOne = grandparent.querySelector(".child");
// const childs = Array.from(grandparent.querySelectorAll(".child"));



// changecolor(grandparent); --for id
// parent.forEach(changecolor); --for multiple classes
// changecolor(grandparent); -- for querySelector (ids) and it selects the first element it encounter with
// parent.forEach(changecolor); --for querySelectorAll (classes)
// childern.forEach(changecolor); --for selecting childern elements
// changecolor(childern[1]); --for selecting particular childern elements
// changecolor(childs[3]); --for selecting particular descendants

//////////////////////////////////////////////////////////////////////
// Bottom to Top Traversing
//selecting parents
// const childOne = document.querySelector("#child-One");
// const parent = childOne.parentElement;
// const grandparent = parent.parentElement;



//selecting Ancestors
// const childOne = document.querySelector("#child-One");
// const grandparent  = childOne.closest(".grandparent");

//selecting sibling elements
// const childOne = document.querySelector("#child-One");
// const childTwo = childOne.nextElementSibling;

// changecolor(grandparent); --for selecting parents
// changecolor(grandparent); --for selecting Ancestors
// changecolor(childTwo); --for nextElementSibling
// changecolor(childTwo.previousElementSibling);  // --for previousElementSibling



////////////////////////////////////////////////////////////////////////////////////

function changecolor(element){
    element.style.backgroundColor ="#333";
    element.style.borderRadius = "50px";
}

