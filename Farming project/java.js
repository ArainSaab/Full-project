let button = document.getElementById('btn');

button.addEventListener('click', function (){
       window.location.assign('contact-us.html')
});
let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.addEventListener("click" , function (){
  let x = "Ali Hasan"
  let y = "Owner"
  document.getElementById('demo') .innerText = x
  document.getElementById('list') .innerText = y
    
});
next.addEventListener("click" , function (){
  let x = "Zain Rasheed"
  let y = "Customer"
  document.getElementById('demo') .innerText = x
  document.getElementById('list') .innerText = y

    
    
});