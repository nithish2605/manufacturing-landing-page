
//owl carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin:10,
        nav: true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause:true,
        responsive: {
            0:{ items: 1 }, 
            500:{items:2},
            600: { items: 3 },
            1000: { items: 5 }
        }
    });
});

// Responsive nav bar // 
var menubar=document.querySelector(".hamburger");
var navlinks=document.querySelector(".nav-links");
let navOpen = false;

// menubar.addEventListener('click',()=>{
//     navlinks.classList.toggle('show');
// });

// //when clicking outside the navlinks, close the navlink
// document.addEventListener('click',function(e){
//     if(!navlinks.contains(e.target)&&!menubar.contains(e.target)){
//         navlinks.classList.remove("show");
//     }
// })

menubar.addEventListener('click', (e) => {
    if (!navOpen) {
        navlinks.classList.add("show");
        gsap.to(navlinks, { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" });
        navOpen = true;
    } else {    
        gsap.to(navlinks, { y: -500, opacity: 0, duration: 0.2, ease: "power2.in", onComplete: () => {
            navlinks.classList.remove("show");
            gsap.set(navlinks, { clearProps: "all" });
            navOpen = false;
        }});
    }
});

//when clicking outside the navlinks, close the navlink
document.addEventListener('click', function(e) {
    if (navOpen && !navlinks.contains(e.target) && !menubar.contains(e.target)) {
        gsap.to(navlinks, { x: 130, opacity: 0, duration: 0.1, ease: "power2.in", onComplete: () => {
            navlinks.classList.remove("show");
            gsap.set(navlinks, { clearProps: "all" });
            navOpen = false;
        }});
    }
});

