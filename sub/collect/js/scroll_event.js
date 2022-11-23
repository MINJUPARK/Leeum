window.onload = function() {
    function locate(box) {
        let now = box.clientY;
        console.log(now);
    }

    const case_intro = document.querySelector('.intro-flex');
    locate(case_intro);
}