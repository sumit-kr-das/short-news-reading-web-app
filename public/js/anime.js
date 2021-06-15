// Type Rider Effect
const words = ['Sort News', 'Updated', '5minutes']
// blinking cursor
let cursor = gsap.to('.cursor', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1
})
// Twin Effect
let boxTl = gsap.timeline()
boxTl.to('.box', {
    duration: 1,
    width: "11vw",
    delay: 0.5,
    ease: "power4:inOut"
}).from('.hi', {
    duration: 1,
    y: "7vw",
    ease: "power3.out"
}).to('.box', {
    duration: 1,
    height: "7vw",
    ease: "elastic.out"
})
let masterTl = gsap.timeline({
    repeat: -1
})
words.forEach(word => {
    let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
    })
    tl.to('.text', {
        duration: 1,
        text: word
    })
    masterTl.add(tl)
})