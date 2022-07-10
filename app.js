const closedCar = document.querySelector('.closed')
const openCar = document.querySelector('.open')
const print = document.querySelector('.print')

closedCar.addEventListener('click', ()=>{
    if(openCar.classList.contains('open')){
        openCar.classList.add('active');
        closedCar.classList.remove('active');
        print.classList.remove('active');
    }
})
openCar.addEventListener('click', ()=>{
    if(closedCar.classList.contains('closed')){
        closedCar.classList.add('active');
        openCar.classList.remove('active');
        print.classList.add('active');
    }
})