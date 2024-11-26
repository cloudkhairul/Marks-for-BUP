let name = document.querySelector('#name');
let ssc = document.querySelector('#ssc');
let hsc = document.querySelector('#hsc');
let button = document.querySelector('#button');

let dname = document.querySelector('#dname');
let dssc = document.querySelector('#dssc');
let dhsc = document.querySelector('#dhsc');

button.addEventListener('click', (event)=> {
  event.preventDefault();
  let userName = name.value;
  let sscMarks = ssc.value;
  let hscMarks = hsc.value;
  
  let mssc = sscMarks*20/1300;
  let mhsc = hscMarks*25/1300;
  
  dssc.innerHTML = mssc.toFixed(2);
  dhsc.innerHTML = mhsc.toFixed(2);
  
  let total = mssc + mhsc;
  
  dtotal.innerHTML = total.toFixed(2);
  dname.innerHTML = userName;
}
) 