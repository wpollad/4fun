const closedCar = document.querySelector('.closed')
const openCar = document.querySelector('.open')
const print = document.querySelector('.print')
const close = document.querySelector('.close')

closedCar.addEventListener('click', ()=>{
    if(openCar.classList.contains('open')){
        openCar.classList.add('active');
        close.classList.add('active');
        closedCar.classList.remove('active');
        print.classList.remove('active');
    }
})
close.addEventListener('click', ()=>{
    if(closedCar.classList.contains('closed')){
        closedCar.classList.add('active');
        openCar.classList.remove('active');
        close.classList.remove('active');
        print.classList.add('active');
    }
})
