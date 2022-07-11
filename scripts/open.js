const closedCar = document.querySelector('.closed')
const openCar = document.querySelector('.open')
const print = document.querySelector('.print')
const wheel1 = document.querySelector('.first')
const wheel2 = document.querySelector('.second')
const wheel3 = document.querySelector('.third')


closedCar.addEventListener('click', ()=>{
    if(openCar.classList.contains('open')){
        openCar.classList.add('active');
        closedCar.classList.remove('active');
        wheel1.classList.add('inactive');
        wheel2.classList.add('inactive');
        wheel3.classList.add('inactive');
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
