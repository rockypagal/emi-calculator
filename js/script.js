

let form = document.querySelector('form');

let p;
let r;
let n;
let monthly;

let amount = document.querySelector('.amount');
let month = document.querySelector('.interest')
let duee = document.querySelector('.due');
let tot = document.querySelector('.total');
form.addEventListener('submit',(e)=>{
e.preventDefault();
p = document.querySelector('.p').value;
r = document.querySelector('.r').value;
n = document.querySelector('.n').value;
console.log(p,n,r);
let table = document.querySelector('.table');
let temp = p;
let emi = Math.round((p*(r/1200)*((1+(r/1200))**(n*12)))/(((1+(r/1200))**(n*12))-1));

amount.innerHTML = "";
month.innerHTML = "";
duee.innerHTML = "";
tot.innerHTML = "";

for (let i = 0; i < n*12; i++) {


let total = Math.round((r/100)*temp/12);
monthly = Math.round(emi-total);
let due = temp - monthly;
let interest = emi-monthly;

console.log(monthly);
console.log(interest);
console.log(due);
temp = due;
console.log(due);

// let text = document.createTextNode(monthly);
// td.appendChild(text);



amount.innerHTML += "<br/>" +monthly+"<br/>";
month.innerHTML += "<br/>"+interest+"<br/>";
duee.innerHTML += "<br/>" +due+"<br/>";
tot.innerHTML += "<br/>" +emi +"<br/>";
}

});



 
