const btn = document.getElementById('eval');
btn.addEventListener('click', () => {
    const display = document.getElementById('display');
    const input = display.value;

    const dateObj = new Date(input);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth()+1;
    const days = dateObj.getDate();

    const currDateObj = new Date();
    const currYear = currDateObj.getFullYear();
    const currMonth = currDateObj.getMonth()+1;
    const currDays = currDateObj.getDate();

    document.getElementById('years').innerText = currYear-year;
    document.getElementById('months').innerText = currMonth-month;
    document.getElementById('days').innerText = currDays-days;
})