gsap.from(".outer", {
	duration: 2,
	delay: 2.5,
	ease: "back.out",
	scale: 0,
	opacity: 0,
});
gsap.from(".inner", {
	duration: 2,
	delay: .25,
	ease: "back.out",
	yPercent: -200,
	scale: 0,
//	rotate: 360,
	stagger: {
		amount: 1,
	}
});