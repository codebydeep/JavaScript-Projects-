const decrease = document.getElementById('dec');
decrease.addEventListener('click', () => {
    const val = document.getElementById('display');
    val.innerText -= 1;
});

const reset = document.getElementById('res');
reset.addEventListener('click', () => {
    const value = document.getElementById('display');
    value.innerText = 0; 
});

const increase = document.getElementById('inc');
increase.addEventListener('click', () => {
    const dig = document.getElementById('display');
    dig.innerText = Number(dig.innerText) + 1;
});

