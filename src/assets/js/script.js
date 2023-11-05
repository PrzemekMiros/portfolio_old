
function animationMain() {
  
 gsap.registerPlugin(ScrollTrigger);
 locoScroll.on("scroll", ScrollTrigger.update);
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".scrollContainer", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }; 
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.defaults({ scroller: ".scrollContainer" });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  new ResizeObserver(() => locoScroll.update()).observe(document.querySelector(".scrollContainer"));


    if (document.querySelector('.swiper')) {
      var swiper = new Swiper(".swiper", {
        grabCursor: true,
        spaceBetween: 20,
        lazy: true,
        centeredSlides: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
        keyboard: {
          enabled: true
        },
        mousewheel: false,
        breakpoints: {
          460: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 2
          },
          1600: {
            slidesPerView: 3
          }
        }
      });
    }


  // Header scrolled
  locoScroll.on('scroll', (position) => {
    if ((position.scroll.y) > 50) {
    document.querySelector('.site-header').classList.add('scrolled');
  } else {
    document.querySelector('.site-header').classList.remove('scrolled');
  }  
  });
  
if (document.querySelector('.photo')) {
const details = gsap.utils.toArray(".details:not(:first-child)");
const photos = gsap.utils.toArray(".photo:not(:first-child)");

gsap.set(photos, {yPercent: 100});
/*
gsap.to(".right", {
  scrollTrigger: {
    scroller: ".scrollContainer",
	  trigger:".pin-gallery",
	  start:"top top",
	  end:"bottom bottom",
	  pin:".right"
  }
});
*/
details.forEach((detail, index)=>{
	let headline = detail.querySelector(".pin-headline");
  
 gsap.to(photos[index], {
   yPercent: 0,
   scrollTrigger: {
    scroller: ".scrollContainer",
		trigger: headline,
		start:"top 80%",
		end:"top 50%",
		scrub:1.2
   }
 });
});

};


if (document.querySelector('.split-text-lines')) {
// Paragraph --------------------------------------------------------------
let splitTextLines = [...document.querySelectorAll('.split-text-lines')];

splitTextLines.forEach(element =>{
   let mySplitText = new SplitText(element, {
     type:"lines",
     linesClass: "line"
   });
    new SplitText(element, {
     type:"lines",
     linesClass: "line-parent",
   });
   
    gsap.from(mySplitText.lines, {
        delay: .2,
        duration: 1,
        stagger: 0.05,
        yPercent: 100,
        ease: Power2. easeInOut,
        scrollTrigger: { 
          scroller: ".scrollContainer",
          trigger: element,
          start: "top 95%",
          //toggleActions: 'restart pause reverse pause',
        },
    })
});
};

// Fade in
    const fadeIn = gsap.utils.toArray('.fadeIn');
      fadeIn.forEach(fadeInItem => {
        gsap.from(fadeInItem, { 
          opacity: 0,
          y: 20,
          delay: .7,
          duration: .8,
          scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: fadeInItem,
            start: "top 95%",
          }
    })
});

// Line animation
const lineX = gsap.utils.toArray('.line-x');
lineX.forEach(lineXItem => {
  gsap.from(lineXItem, { 
    width: "0",
    duration: .7,
    delay: .3,
    ease: Power2. easeInOut,
    scrollTrigger: {
      scroller: ".scrollContainer",
      trigger: lineXItem,
      start: "top 95%",
    }
})
});

  gsap.from('.swiper-scrollbar-drag', { 
    width: "0%",
    opacity: 0,
    duration: .7,
    delay: .7,
    ease: Power2. easeInOut,
    scrollTrigger: {
      scroller: ".scrollContainer",
      trigger: '.swiper-scrollbar-drag',
      start: "top 95%",
    }
});

// Footer parallax
if (window.matchMedia("(min-width: 767px)").matches) {
  gsap.from(".footer-parallax", {
    y: "-25%",
    opacity: 0,
    scrollTrigger: {
      scroller: ".scrollContainer",
      trigger: ".site-footer",
      start: "top 95%",
      end: "bottom 90%",
      scrub: true
    }
  });
  } else {
    gsap.from(".footer-parallax", {
      y: "-15%",
      opacity: 0,
      scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".site-footer",
        start: "top 95%",
        end: "bottom 90%",
        scrub: true
      }
    });
  };

// Magnetic
if(document.querySelector('.magnetic')) {
  var magnets = document.querySelectorAll('.magnetic');
  var magnetText = document.querySelectorAll(".btn-text");
  var strength = 100;

  if(window.innerWidth > 767){
    // Mouse Reset
    magnets.forEach( (magnet) => {
      magnet.addEventListener('mousemove', moveMagnet );
      // $(this.parentNode).removeClass('not-active');
      magnet.addEventListener('mouseleave', function(event) {
        gsap.to( event.currentTarget, 1.5, {
          x: 0, 
          y: 0, 
          ease: 'Elastic.easeOut'
        });
        gsap.to( magnetText, 1.5, {
          x: 0, 
          y: 0, 
          ease: 'Elastic.easeOut'
        });
      });
    });

    // Mouse move
    function moveMagnet(event) {
      var magnetButton = event.currentTarget;
      var bounding = magnetButton.getBoundingClientRect();
      var magnetsStrength = magnetButton.getAttribute("data-strength");
      var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
      var magnetText = magnetButton.querySelector(".btn-text");

      gsap.to( magnetButton, 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: '0.005deg',
        ease: 'Power4.easeOut'
      });
      gsap.to( magnetText, 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
        rotate: '0.001deg',
        ease: 'Power4.easeOut'
      });
    }
  }; 
};

// Client logos
gsap.from(".client-item", {
  opacity: 0,
  autoAlpha: 0,
  y: 20,
  duration: 1,
  delay: .3,
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".clients-wrap",
    scroller: ".scrollContainer",
  }
});
  
// Nav menu
const menuToggle = document.getElementById("menuToggle");
const menuBar = gsap.timeline();
var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration: 0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg', {
	duration: .8,
	opacity: 0,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration: 1.3,
	y:"110%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
}, "-=0.6");

tl.from('.nav-info', {
	duration: .6,
	opacity: 0,
  y: 20,
  ease: Power3,
}, "-=0.8");

tl.from('.h-line-y', {
	duration: 1,
	height: "0",
	ease: 'Expo.easeInOut'
}, "-=1.3");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
  // menuWrap.classList.toggle("active");
});

// Greeting
if (document.querySelector("#greeting")) {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  const isMorning = hour >= 3 && hour < 18;
  let welcomeText = isMorning ? "Dzień dobry !" : "Dobry wieczór !";
  greeting.innerHTML = welcomeText;
};

// parallax 
if (window.matchMedia("(min-width: 767px)").matches) {
    gsap.utils.toArray(".parallax-wrap").forEach(function(container) {
      let image = container.querySelector("img");
    
      let tl = gsap.timeline({
          scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: container,
            scrub: true,
            pin: false,
          },
        }); 
        tl.from(image, {
          yPercent: -10,
          ease: "none",
        }).to(image, {
          yPercent: 10,
          ease: "none",
        }); 
    });
  };


  // Loop text
  if (document.querySelector(".loop-text")) {
  gsap.to(".loop-text", { xPercent: -50, ease: 'none', duration: 13, repeat: -1 })
  }
  // Acordion
  if (document.querySelector(".accordion")) {
  let t = document.getElementsByClassName("accordion");
  for (let e = 0; e < t.length; e++) t[e].addEventListener("click", function () {
    let e = this.nextElementSibling;
    if (e.style.maxHeight) e.style.maxHeight = null, this.classList.remove("open");
    else {
      for (let a = 0; a < t.length; a++) t[a].classList.remove("open"), t[a].nextElementSibling.style.maxHeight = null;
      e.style.maxHeight = e.scrollHeight + "px", this.classList.toggle("open");
    }
  });
  };

// Cursor image
  

// Scroll progress
if (document.querySelector(".scrollprogress")) {
gsap.to(".scrollprogress", {
  height: "calc(100% - 65px)",
  ease: 'none',
  scrollTrigger: { 
    scroller: ".scrollContainer",
    trigger: ".content",
    start: "top 80px",
    end: "bottom 99%",
    scrub: true,
  }
});
};
// End animation function
}

function addMenuClass() {
  MenuClass = document.querySelector("body");
  MenuToggle = document.querySelector(".menu-toggle");

  MenuToggle.addEventListener('click', () => {
    MenuClass.classList.toggle("menu-open");
  });

}
addMenuClass();

function removeMenuClass() {
  document.querySelector("body").classList.remove("menu-open");
}

// Intro
gsap.from(".scrollContainer", {
  autoAlpha: 0,
  opacity: 0,
  duration: 1
});

gsap.from(".site-header", {
  delay: 3.5,
  duration: 1,
  onComplete: function() {
    // Dodaj klasę "done" po zakończeniu animacji
    document.querySelector(".site-header").classList.add("done");
  }
});

gsap.to(".logo-wrap-inner", {
  opacity: 0, 
  duration: .2,
  delay: 4.04,
	ease: Power3
});

gsap.from(".menu-toggle-wrap", {
  autoAlpha: 0,
  opacity: 0,
  delay: 4,
});

gsap.from(".logo-wrap a", {
  pointerEvents: "none",
  delay: 3.5,
});

gsap.from(".logo", {
  pointerEvents: "none",
  duration: 3.5,
});
gsap.from(".logo-line-1", {
  height: 0,
  duration: 2.2,
  delay: .5,
  ease: Power3,
});
gsap.from(".logo-line-2", {
  height: 0,
  duration: 2,
  delay: .4,
  ease: Power3,
});
gsap.from(".logo-line-3", {
  height: 0,
  duration: 2.4,
  delay: .3,
  ease: Power3,
});


gsap.from(".ls-stroke", 3.3, {
  strokeDashoffset: "60%"
});
gsap.from(".ls-filled", {
  strokeWidth: "5px",
  delay: 3
});
gsap.from(".ls-filled", 3.3, {
  strokeDashoffset: "90%"
});
gsap.from(".ls-filled", 1.3, {
  fill: "#000",
  delay: 2.2
});
gsap.from(".ls-opacity", {
  opacity: 0,
  duration: 1,
  delay: 2.3
});


tlintro = gsap.timeline();

if (window.matchMedia("(min-width: 767px)").matches) {
tlintro.from(".logo-wrap", {
  y: "28vh",
  x: "33%",
  width: "320%",
  delay: 3.2,
  duration: 1.2,
  ease: 'Expo.easeInOut'
});
} else {
  tlintro.from(".logo-wrap", {
    y: "28vh",
    x: "7%",
    width: "160%",
    delay: 3.2,
    duration: 1.2,
    ease: 'Expo.easeInOut'
  });
}
