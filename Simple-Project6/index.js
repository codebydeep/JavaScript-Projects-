const display = document.getElementById('display');
const btn = document.querySelectorAll('button');
btn.forEach(button => {
  button.addEventListener('click', () => {
    if(button.textContent === 'AC'){
      display.value = '';
    }else{
      display.value += button.textContent;
    }
  })
}) 

const sol = document.getElementById('ans');
sol.addEventListener('click', () => {
  display.value = eval(display.value);
})
