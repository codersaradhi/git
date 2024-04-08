// alert("SriVishunurupayanamShivya");
////////////local Storage///////////////////
localStorage.setItem('name','SriVishunurupayanamaShivya');
console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');

////////////Session Storage///////////////////
sessionStorage.setItem('name','SriMathraynamaha');
console.log(sessionStorage.getItem('name',));
// sessionStorage.removeItem('name');

//////////////////cookies//////////////////
document.cookie = 'name=SriMathraynamaha; expries=' + new Date(2024,5,8).toUTCString;
document.cookie = "Age=9283239203092342453452345234524; expries=" + new Date(2024,5,8).toUTCString;
console.log(document.cookie);