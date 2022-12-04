

AOS.init({
    duration: 3000,
    once: true,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const icon = document.querySelector(".fa-solid");
const links = document.querySelector(".header-list");
const background = document.querySelector(".body");
// const iconss = document.querySelector(".fa-xmark")

icon.addEventListener('click', ()=>{
    links.classList.toggle("active");
    icon.classList.toggle('fa-xmark')
    background.classList.toggle("open");
})

// iconss.addEventListener('click', ()=>{
//     iconss.classList.remove('active')
//     iconss.classList.remove('.open')
// })

const form = document.querySelector('form')
const names = document.getElementById('name');
const Affilation = document.getElementById('Affilation');
const email = document.getElementById('email');
const number = document.getElementById('number');
const Department = document.getElementById('Department');
const date = document.getElementById('date');
const Message = document.getElementById('Message');
const output = document.querySelector('.output')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    sweetAlert()
    bookedAppointment()


    names.value = ''
    Affilation.value = ''
    email.value = ''
    number.value = ''
    Department.value = ''
    date.value = ''
    Message.value = ''
   
  removeStyle()
  bookmarkLink()
 
});

const setError = (element, message) => {
    const inputControl = element.parentElement;


    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;

    
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
 
    const usernameValue = names.value.trim();
    const emailValue = email.value.trim();
    const AffilationValue = Affilation.value.trim();
    const numberValue = number.value.trim();
    const DepartmentValue = Department.value.trim();
    const DateValue = date.value.trim();
    const MessageValue = Message.value.trim();
  
    if(usernameValue === '') {
        setError(names);
    } else {
        setSuccess(names);
    }
  
    if(AffilationValue === '') {
        setError(Affilation);
    } else {
        setSuccess(Affilation);
    }
  
    if(numberValue < 6) {
        setError(number);
    } else {
        setSuccess(number);
    }
  
    if(DepartmentValue === '') {
        setError(Department);
    } else {
        setSuccess(Department);
    }
    if(MessageValue === '') {
        setError(Message);
    } else {
        setSuccess(Message);
    }
    if(DateValue === '') {
        setError(Message);
    } else {
        setSuccess(Message);
    }
  
    if(emailValue === '') {
        setError(email)
    } else if (!isValidEmail(emailValue)) {
        setError(email);
    } else {
        setSuccess(email);
    }
}

function sweetAlert(){
    const alertSuccess = form.classList.contains('success')

    if(alertSuccess){
    //    Swal.fire({
    //        position: 'top-end',
    //        icon: 'success',
    //        title: 'Your Appointment as been booked',
    //        showConfirmButton: false,
    //        timer: 2500
    //      })
     console.log('success')
    }
    else{
       Swal.fire({
           icon: 'error',
           title: 'error...',
           text: 'Please fill all required filled!',
         })
    }
 
}


function bookedAppointment(){
    const booksucces = form.classList.contains('success')
        if(booksucces){
           setTimeout(()=>{
            form.classList.add('formDisplayNone')
           }, 2000)
           setTimeout(()=>{
            form.classList.add('formDisplay')
            form.classList.remove('formDisplayNone')
           }, 5000)
        }
}

function removeStyle(){
     
    const bordersuccess = form.classList.contains('success')

    setTimeout(()=>{
      if(bordersuccess){
        form.classList.remove('success')
        names.parentElement.classList.remove('success')
        Affilation.parentElement.classList.remove('success')
        email.parentElement.classList.remove('success')
        number.parentElement.classList.remove('success')
        Department.parentElement.classList.remove('success')
        date.parentElement.classList.remove('success')
        Message.classList.remove('success')
      }
    },1500)
}
function bookmarkLink(){
    const succesTrue = form.classList.contains('success');

    setTimeout((e)=>{
        if(succesTrue){
            const link = 'http://127.0.0.1:5504/assets/booking/booking.html'
            window.location.href = link
        } else{
            console.log('error')
        }
      },2000);
}

/*


AOS.init({
    duration: 3000,
    once: true,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const icon = document.querySelector(".fa-solid");
const links = document.querySelector(".header-list");
const background = document.querySelector(".body");
// const iconss = document.querySelector(".fa-xmark")

icon.addEventListener('click', ()=>{
    links.classList.toggle("active");
    icon.classList.toggle('fa-xmark')
    background.classList.toggle("open");
})

// iconss.addEventListener('click', ()=>{
//     iconss.classList.remove('active')
//     iconss.classList.remove('.open')
// })

const form = document.querySelector('form')
const names = document.getElementById('name');
const Affilation = document.getElementById('Affilation');
const email = document.getElementById('email');
const number = document.getElementById('number');
const Department = document.getElementById('Department');
const date = document.getElementById('date');
const Message = document.getElementById('Message');
const output = document.querySelector('.output')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    sweetAlert()
    bookedAppointment()


    names.value = ''
    Affilation.value = ''
    email.value = ''
    number.value = ''
    Department.value = ''
    date.value = ''
    Message.value = ''
   
  removeStyle()
});

const setError = (element, message) => {
    const inputControl = element.parentElement;


    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;

    
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
 
    const usernameValue = names.value.trim();
    const emailValue = email.value.trim();
    const AffilationValue = Affilation.value.trim();
    const numberValue = number.value.trim();
    const DepartmentValue = Department.value.trim();
    const DateValue = date.value.trim();
    const MessageValue = Message.value.trim();
  
    if(usernameValue === '') {
        setError(names);
    } else {
        setSuccess(names);
    }
  
    if(AffilationValue === '') {
        setError(Affilation);
    } else {
        setSuccess(Affilation);
    }
  
    if(numberValue < 6) {
        setError(number);
    } else {
        setSuccess(number);
    }
  
    if(DepartmentValue === '') {
        setError(Department);
    } else {
        setSuccess(Department);
    }
    if(MessageValue === '') {
        setError(Message);
    } else {
        setSuccess(Message);
    }
    if(DateValue === '') {
        setError(Message);
    } else {
        setSuccess(Message);
    }
  
    if(emailValue === '') {
        setError(email)
    } else if (!isValidEmail(emailValue)) {
        setError(email);
    } else {
        setSuccess(email);
    }
}

function sweetAlert(){
    const alertSuccess = form.classList.contains('success')

    if(alertSuccess){
       Swal.fire({
           position: 'top-end',
           icon: 'success',
           title: 'Your Appointment as been booked',
           showConfirmButton: false,
           timer: 2500
         })
   
    }
    else{
       Swal.fire({
           icon: 'error',
           title: 'error...',
           text: 'Please fill all required filled!',
         })
    }
 
}


function bookedAppointment(){
    const booksucces = form.classList.contains('success')
        if(booksucces){
           setTimeout(()=>{
            form.classList.add('formDisplayNone')
           }, 2000)
           setTimeout(()=>{
            form.classList.add('formDisplay')
            form.classList.remove('formDisplayNone')
           }, 5000)
        }
}

function removeStyle(){
     
    const bordersuccess = form.classList.contains('success')

    setTimeout(()=>{
      if(bordersuccess){
        form.classList.remove('success')
        names.parentElement.classList.remove('success')
        Affilation.parentElement.classList.remove('success')
        email.parentElement.classList.remove('success')
        number.parentElement.classList.remove('success')
        Department.parentElement.classList.remove('success')
        date.parentElement.classList.remove('success')
        Message.classList.remove('success')
      }
    },2000)
}
*/