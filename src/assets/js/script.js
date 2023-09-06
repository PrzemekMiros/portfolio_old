function worksCarousel() {
if (document.querySelector('.carousel')) {
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll(".carousel-item")[0],
arrowIcons = document.querySelectorAll(".carousel-arrow");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.opacity = carousel.scrollLeft == 0 ? "0.5" : "1";
    arrowIcons[1].style.opacity = carousel.scrollLeft == scrollWidth ? "0.5" : "1";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
  
}
};


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
        duration: 1,
        stagger: 0.05,
        yPercent: 100,
        ease: Power2. easeInOut,
        scrollTrigger: { 
          scroller: ".scrollContainer",
          trigger: element,
          start: "top 90%",
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
          y: 30,
          duration: 1,
          ease: Power2. easeInOut,
          scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: fadeInItem,
            start: "top 90%",
          }
    })
});

// Line animation
const lineX = gsap.utils.toArray('.line-x');
lineX.forEach(lineXItem => {
  gsap.from(lineXItem, { 
    width: "0",
    duration: .7,
    ease: Power2. easeInOut,
    scrollTrigger: {
      scroller: ".scrollContainer",
      trigger: lineXItem,
      start: "top 90%",
    }
})
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
  const welcomeTypes = ["Dzień dobry", "Dobry wieczór"];
  let welcomeText = "";
  if (hour < 20) welcomeText = welcomeTypes[0];
  else welcomeText = welcomeTypes[1];
  greeting.innerHTML = welcomeText;
}

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
  }


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
  }

  // Cursor image
  if (document.querySelector(".hover-reveal-wrap")) {
  const link = document.querySelectorAll('.hover-reveal-wrap');
  const linkHoverReveal = document.querySelectorAll('.hover-reveal');
  const linkImages = document.querySelectorAll('.hidden-img');
  
  for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('mousemove', (e) => {
      linkHoverReveal[i].style.opacity = 1;
      linkHoverReveal[i].style.transform = `translate(-95%, -45% )`;
      
      // linkHoverReveal[i].style.transform = `translate(-50%, -50% ) rotate(5deg)`;
      
      linkImages[i].style.transform = 'scale(1, 1)';
      linkHoverReveal[i].style.left = e.clientX + "px";
    })
    
    link[i].addEventListener('mouseleave', (e) => {
      linkHoverReveal[i].style.opacity = 0;
      linkHoverReveal[i].style.transform = `translate(-95%, -45%) rotate(-5deg)`;
      linkImages[i].style.transform = 'scale(0.8, 0.8)';
    })
  }
}; 

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

}

// Intro
gsap.from(".scrollContainer", {
  autoAlpha: 0,
  opacity: 0,
  duration: 1
});

gsap.from(".site-header", {
  delay: 3.5,
  duration: 1
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
