gsap.registerPlugin(ScrollTrigger);

gsap.from('#text', {
  scrollTrigger: {
    trigger: '#Layer_1',
    start: 'center center',
    pin: true,
    scrub: true,
  },
  attr: { startOffset: '100%' },
});

gsap.to('.icon', {
  scrollTrigger: {
    trigger: '#Layer_1',
    start: 'center center',
  },
  alpha: 0,
  duration: 1,
});
