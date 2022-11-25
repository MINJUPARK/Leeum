// $(function() {
//    $('#close a').click(function(e) {
//         $('.slide-in')
//         .animate({marginTop : "100vh"}, 300)
//     });
// });

window.onload = function() {
    const close = document.querySelector('#close > a');
    const slide = document.querySelector('.slide-in');
    // const top = document.getElementById('top');
    let page = document.referrer;
    
    close.addEventListener('click', e => {
        e.preventDefault();
        // window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        slide.classList.add("silde-out");
        setTimeout(() => {
            location.href = `${page}`;
        }, 400); 
    });
}