window.onload = function() { 
    // const step = document.querySelectorAll('.process-step li');
    const method = document.querySelectorAll('.method-list li');
    let vh = document.documentElement.clientHeight;  
    let vh_05 = vh * 0.5 ;  
    let vh_03 = vh * 0.3 ;  

    function borderEvent() {
        for ( i = 0; i < method.length; i++) {
            if(vh_05 > method[i].getBoundingClientRect().top) {
                method[i].classList.add("border-effect");
            }
        }
        if(vh_03 < method[0].getBoundingClientRect().top) {
            for ( i = 0; i < method.length; i++) {
                method[i].classList.remove("border-effect");
            }
        }
    }
    document.addEventListener("scroll", borderEvent);
}

