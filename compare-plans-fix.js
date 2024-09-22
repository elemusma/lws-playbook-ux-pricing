// Get the element we want to monitor
const headRow = document.querySelector('.compare-plans.head-row');

// Get the initial position of the element
const headRowInitialPosition = headRow.getBoundingClientRect().top + window.pageYOffset;

// Scroll event listener
window.addEventListener('scroll', function() {
    // Get the current position of the element relative to the viewport
    const headRowPosition = headRow.getBoundingClientRect().top;

    // If the element's top reaches 0, add the 'position-fixed' class
    if (headRowPosition <= 0) {
        headRow.classList.add('compare-plans-active');
    } else if (window.pageYOffset < headRowInitialPosition) {
        // If the user scrolls back up past its original position, remove the 'compare-plans-active' class
        headRow.classList.remove('compare-plans-active');
    }
});