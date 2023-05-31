//Get form element
var form = document.getElementById("formId");
function submitForm(event) {
  //Preventing page refresh
  event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener("submit", submitForm);

function on() {
  const elm = (document.getElementById("demo").innerHTML = "you clicked");
}
function add() {
  const elm = (document.getElementById("demo").style.fontSize = "50px");
}
function sub() {
  const elm = (document.getElementById("demo").style.fontSize = "10px");
}
function photo() {
  const elm = (document.getElementsByTagName("img")[0].style.width = "1000px");
}
const elm = (document.getElementById("name").innerHTML = "khloud Alabdullah");
//form list =================
function list() {
  //querySelector # for id and . for class
  let name = document.querySelector("#name1").value;
  let age = +document.getElementById("age").value;
  let c = "name is: " + name + " age:" + age;
  let list = document.getElementById("list");
  list.innerHTML = c;
}
//===========================
function addnumber() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let add = num1 + num2;
  let p = document.getElementById("p");
  p.innerHTML = add;
}
function subnumber() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let add = num1 - num2;
  let p = document.getElementById("p");
  p.innerHTML = add;
}
function multnumber() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let add = num1 * num2;
  let p = document.getElementById("p");
  p.innerHTML = add;
}
function divnumber() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let add = num1 / num2;
  let p = document.getElementById("p");
  p.innerHTML = add;
}

const clickCount = 0;
document.addEventListener("click", (event) => {
  clickCount + 1;
  if (clickCount === 2) {
    window.scrollTo(0, 0);
    clickCount = 0;
  }
});
