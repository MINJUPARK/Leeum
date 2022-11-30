// const step = document.querySelectorAll('.process-step li');
const method = document.querySelectorAll('.method-list li');
let vh = document.documentElement.clientHeight;  
let vh07 = vh * 0.7 ;  
let vh03 = vh * 0.3 ;  

function borderEvent() {
    for ( i = 0; i < method.length; i++) {
        if(method[i].getBoundingClientRect().top < vh07) {
            method[i].classList.add("border-effect", "opacity");
        }
    }
    if(method[0].getBoundingClientRect().top > vh03) {
        for ( i = 0; i < method.length; i++) {
            method[i].classList.remove("border-effect", "opacity");
        }
    }
}
document.addEventListener("scroll", borderEvent);

