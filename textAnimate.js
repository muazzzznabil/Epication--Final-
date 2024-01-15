let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if(top >= offset && top < offset + height){
        sec.classList.add('show-animate');
    }
    //if want to use repeating animation on scroll
    else{
        sec.classList.remove('show-animate');
    }
})
}