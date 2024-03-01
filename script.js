var ani = gsap.timeline();

ani.from("#nav img,#nav-1 h3,#nav-2 h4,#nav-2 button", {
  y: -100,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});
ani.from("#main h1", {
  y: 100,
  duration: 1,
  opacity: 0,
});
ani.from("#main>img", {
  scale: 0,
  opacity: 0,
});
ani.from("#scroll h4", {
  scale: 0,
  opacity: 0,
});
ani.from("#icons", {
  scale: 0,
  opacity: 0,
});
ani.to("#scroll h4", {
  y: -20,
  duration: 1,
  repeat: -1,
  yoyo: true,
});
