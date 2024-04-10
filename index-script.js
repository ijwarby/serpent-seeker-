function handleDropdown() {
    // Get the dropdown menu, the body element, and the map-label element
    var dropdown = document.querySelector('.dropdown-options');
    var body = document.querySelector('body');
    var map = document.querySelector('#map');
    var mapLabel = document.querySelector('#map-label');

    // Add an event listener to the dropdown menu
    dropdown.addEventListener('mouseover', function() {
        // When the mouse is over the dropdown menu, add a class that disables pointer events
        // and hide the map-label element
        body.classList.add('disable-pointer-events');
        map.classList.add('hide');
        mapLabel.classList.add('hide');
    });

    dropdown.addEventListener('mouseout', function() {
        // When the mouse leaves the dropdown menu, remove the class that disables pointer events
        // and show the map-label element
        body.classList.remove('disable-pointer-events');
        map.classList.remove('hide');
        mapLabel.classList.remove('hide');
    });
}

window.onload = function() {
    handleDropdown();
};