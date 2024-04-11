// Select all area elements
const areas = document.querySelectorAll('area');

// Add event listeners to each area
areas.forEach(area => {
  // Log when area is clicked
  area.addEventListener('click', function() {
    console.log(`Clicked: ${this.alt}`);
  });

  // Log when mouse hovers over area
  area.addEventListener('mouseover', function() {
    console.log(`Hovered: ${this.alt}`);
  });
});

// Make image map responsive

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});
