

let form = document.querySelector('.sub');
let table = document.querySelector('table');
let p;
let r;
let n;
let monthly;
let total;
let due;
let interest;
let ans = document.querySelector('.ans1');
let amount = document.querySelector('.money');
let month = document.querySelector('.time')
let duee = document.querySelector('.half');
let funcount = 0;


form.addEventListener('click',(e)=>{
console.log(funcount,'top');
e.preventDefault();
p = document.querySelector('.p').value;
r = document.querySelector('.r').value;
n = document.querySelector('.n').value;


let temp = p;
let emi = Math.round((p*(r/1200)*((1+(r/1200))**(n*12)))/(((1+(r/1200))**(n*12))-1));


// if(funcount > 0) {
//     deletetable();
//     console.log(funcount,"f");
// }

for (let i = 1; i <=n*12; i++) {


total = Math.round((r/100)*temp/12);
monthly = Math.round(emi-total);
due = temp - monthly;
interest = emi-monthly;

// console.log(monthly);
// console.log(interest);
// console.log(due);
// console.log(due);


temp = due;
let tbody = document.querySelector('tbody');
let count2 = 0;
let arr = [i,monthly,interest,emi,due];

function doit() {

    
    let count = 0;
     let row = document.createElement('tr');
    for (let i=1; i<=5; i++) {
    
    let col = document.createElement('td');
    let textCell = document.createTextNode(arr[count++]);
    col.appendChild(textCell);
    row.appendChild(col);
    tbody.appendChild(row);
    table.appendChild(tbody);
    
    }
    }

doit();

}

month.innerHTML = n*12;
amount.innerHTML = p;
duee.innerHTML = emi;

if(funcount == 0) {
    funcount++;
}

console.log(funcount,"last");
});





// function deletetable(){
//     funcount = 0;
//     for(let j=0; j<=n*12; j++) {
//         table.deleteRow(0);
//     }
    
//     console.log(funcount,'outsid');
// }

