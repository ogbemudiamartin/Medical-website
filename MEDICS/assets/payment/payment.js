

AOS.init({
  duration: 1000,
  once: true,
});


const btn = document.querySelector('.btnpay');
const loadings = document.querySelector('.content')

btn.addEventListener('click', function(){
  loading()
});

function loading(){
    loadings.classList.add('load')
   setTimeout(()=>{
    loadings.classList.remove('load')
   },2000)
   setTimeout(()=>{
    window.location.href = '../success/success.html'
   },2100)
}