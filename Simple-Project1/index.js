// function changeBackgroundcolor(){
//     document.body.style.backgroundColor = 'purple';
// }

changeBackground = (color) =>{
    document.body.style.backgroundColor = color;
}

const bton = document.getElementById('btn');
bton.addEventListener('click', function() {
    changeBackground('green');
});

bton.addEventListener('click', function() {
    changeBackground('yellow');
})

const themeButton = document.getElementById('theme');
themeButton.addEventListener('click', function() {
    const currColor = document.body.style.backgroundColor;
    if (currColor !== 'black') {
        changeBackground('black');
        themeButton.innerText = 'Dark Mode';
    }
    else{
        changeBackground('white');
        themeButton.innerText = 'Light Mode';
    }
})

