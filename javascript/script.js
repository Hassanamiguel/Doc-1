
let ul = document.querySelector('.menu');
let MobileMenu = document.querySelector('.MobileMenu');

MobileMenu.addEventListener('click',()=>{
        if(ul.classList.contains('open')){
            ul.classList.remove('open') 
    }else{
        ul.classList.add('open');
    }
})

