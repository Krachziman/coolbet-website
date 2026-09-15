// Count up animation for counter card numbers

$( document ).ready(function() {

// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );

// The animation function, which takes an Element
const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt( el.dataset.target || el.innerHTML, 10 );
    const suffix = el.dataset.suffix || "";
    const displayTarget = el.dataset.display 
        ? parseInt( el.dataset.display, 10 ) 
        : countTo;

    const counter = setInterval( () => {
        frame++;
        const progress = easeOutQuad( frame / totalFrames );
        const currentCount = Math.round( displayTarget * progress );

        el.innerHTML = currentCount + suffix;

        if ( frame === totalFrames ) {
            clearInterval( counter );
        }
    }, frameDuration );
};

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
	const countupEls = document.querySelectorAll( '.countup' );
	countupEls.forEach( animateCountUp );
};

runAnimations(); 

});