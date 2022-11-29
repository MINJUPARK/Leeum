// const step = document.querySelectorAll('.process-step li');
const method = document.querySelectorAll('.method-list li');
let vh = document.documentElement.clientHeight;  
let vh05 = vh * 0.5 ;  
let vh03 = vh * 0.3 ;  

function borderEvent() {
    let methodMargin;
    for ( i = 0; i < method.length; i++) {
        methodMargin = method[i].getBoundingClientRect()
        if(vh05 > methodMargin.top) {
            method[i].classList.add("border-effect");
        }
    }
    if(vh03 < methodMargin.top) {
        for ( i = 0; i < method.length; i++) {
            method[i].classList.remove("border-effect");
        }
    }
}
document.addEventListener("scroll", borderEvent);

