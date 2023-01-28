gsap.registerPlugin(ScrollTrigger);
const heroTitle = new SplitType('#heroTxt');


var tlHero = gsap.timeline({repeat: 0, repeatDelay: 1});

tlHero.to(".char", {y: 0,stagger: 0.05,delay: 0.2,duration: 0.5});
tlHero.to(".char", {
    scrollTrigger: {
        trigger: ".hero",
        start: "300 300",
        end: "300",
        scrub: true,
        // markers: true
    },
    y: -200,
    stagger: -0.5,
    duration: 3
});

