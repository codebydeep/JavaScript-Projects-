const disp = document.getElementById('display');

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let val = btn.innerHTML;
    disp.innerText = val;
})
const btn2 = document.getElementById('btn2');
btn.addEventListener('click', () => {
    let val2 = btn2.innerHTML;
    disp.innerText = val2;
})
