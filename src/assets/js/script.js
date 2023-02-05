function animationMain() {
 Splitting();
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
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  new ResizeObserver(() => locoScroll.update()).observe(document.querySelector(".scrollContainer"));

    const reveal = document.querySelectorAll(".char");
    
    gsap.from(reveal, {
      y: "100%",
      duration: .6,
      stagger: .03,
      ease: Power3,
      scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".word",
        start: "top 80%",
      }
    })

    const fadeIn = gsap.utils.toArray('.fadeIn');

      fadeIn.forEach(fadeInItem => {
        gsap.from(fadeInItem, { 
          opacity: 0,
          y: 80,
          duration: 1,
          ease: Power3,
          scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: fadeInItem,
            start: "top 90%",
          }
    })
});

const lineX = gsap.utils.toArray('.line-x');

lineX.forEach(lineXItem => {
  gsap.from(lineXItem, { 
    width: "0",
    duration: 1,
    ease: Power3,
    scrollTrigger: {
      scroller: ".scrollContainer",
      trigger: lineXItem,
      start: "top 90%",
    }
})
});

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
})

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
	duration: .8,
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
});

// Greeting
if (document.querySelector("#greeting")) {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  const welcomeTypes = ["Dzień dobry", "Dobry wieczór"];
  let welcomeText = "";
  if (hour < 18) welcomeText = welcomeTypes[0];
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
}


}

// Intro
gsap.from(".scrollContainer", {
  autoAlpha: 0,
  opacity: 0,
  duration: 1
});

gsap.from(".site-header", {
  "mix-blend-mode": "difference",
  delay: 3,
  duration: 1
})

gsap.to(".logo-wrap-inner", {
  opacity: 0, 
  delay: 3,
  duration: 1,
	ease: 'Expo.easeInOut'
});

gsap.from(".menu-toggle", {
  autoAlpha: 0,
  opacity: 0,
  delay: 3,
})

gsap.from(".logo", {
  "pointer-events": "none",
  duration: 3,
});
gsap.from(".logo-line-1", {
  height: 0,
  duration: 2.1,
  ease: Power3,
});
gsap.from(".logo-line-2", {
  height: 0,
  duration: 1.8,
  ease: Power3,
});
gsap.from(".logo-line-3", {
  height: 0,
  duration: 2.4,
  ease: Power3,
});

tlintro = gsap.timeline();

if (window.matchMedia("(min-width: 767px)").matches) {
tlintro.from(".logo-wrap", {
  y: "28vh",
  x: "61%",
  width: "540%",
  delay: 2,
  duration: 1
});
} else {
  tlintro.from(".logo-wrap", {
    y: "28vh",
    x: "13%",
    width: "475%",
    delay: 2,
    duration: 1
  });
}