let iconToggle = document.querySelector('#iconToggle');
let nav = document.querySelector('nav');
let right = document.querySelector('#right');
let notif = document.querySelector('.notif');
let notifBlock = document.querySelector('.notif-block');

iconToggle.addEventListener('click', () => {
    // nav.style.display = 'none';
    // right.style.flexBasis = '100%';

    nav.classList.toggle('active');
    if(nav.classList.contains('active')){
        console.log('yay')
        right.classList.add('right_toggle');
    }
});

notif.addEventListener('click', () => {
    // notifBlock.classList.toggle('active-notif');
    if(!notifBlock.classList.contains('active-notif') ){
        notifBlock.classList.add('active-notif')
    }else{
        notifBlock.classList.remove('active-notif')
    }
})