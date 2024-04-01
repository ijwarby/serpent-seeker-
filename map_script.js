// Sample data for markers
const markersData = [
    { x: 100, y: 200 },
    { x: 300, y: 100 },
    { x: 450, y: 250 }
];

// Function to initialize the map
function initMap() {
    const map = document.getElementById('world-map');

    // Add markers to the map
    markersData.forEach((marker, index) => {
        const markerElement = document.createElement('div');
        markerElement.classList.add('marker');
        markerElement.style.left = `${marker.x}px`;
        markerElement.style.top = `${marker.y}px`;
        markerElement.setAttribute('data-index', index);
        map.appendChild(markerElement);
    });

    // Event listener for clicking markers
    map.addEventListener('click', function(event) {
        if (event.target.classList.contains('marker')) {
            const index = event.target.getAttribute('data-index');
            alert(`You clicked marker ${index}`);
        }
    });
}

// Initialize the map when the page loads
window.onload = initMap;
