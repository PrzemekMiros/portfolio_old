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

tl.from('.menu-bg span', {
	duration: .8,
	y: "100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration: 1.3,
	y:"110%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
}, "-=0.8");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

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
  gsap.to(".loop-text", { xPercent: -50, ease: 'none', duration: 13, repeat: -1 })

  // Acordion
  let t = document.getElementsByClassName("accordion");
  for (let e = 0; e < t.length; e++) t[e].addEventListener("click", function () {
    let e = this.nextElementSibling;
    if (e.style.maxHeight) e.style.maxHeight = null, this.classList.remove("open");
    else {
      for (let a = 0; a < t.length; a++) t[a].classList.remove("open"), t[a].nextElementSibling.style.maxHeight = null;
      e.style.maxHeight = e.scrollHeight + "px", this.classList.toggle("open");
    }
  })

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
  duration: 1.5,
  ease: Power3,
});
gsap.from(".logo-line-2", {
  height: 0,
  duration: 1.3,
  ease: Power3,
});
gsap.from(".logo-line-3", {
  height: 0,
  duration: 1.8,
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