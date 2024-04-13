

//calling functions
changeColor();





//retrieves the dropdown menu 
function displayContinents() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//closes the dropdown menu if the user clicks outside of it
//reference: https://www.w3schools.com/howto/howto_js_dropdown.asp
window.onclick = function(event) {
  if (!event.target.matches('#cont-dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//dynamically change background color for navigation bar
function changeColor() {
  var header = document.querySelector(".header");
  var body = document.body
  var color = document.querySelector(".default-color");
  var navBar = document.querySelector(".nav-bar");
  var pageName = window.location.pathname.split("/").pop().split(".")[0];

  if (pageName === "index") {
    navBar.classList.add("default-nav");
    header.classList.add("default-header");
    body.classList.add("default-body");
    color.classList.add("default-color");

  } else {
    console.log("changing pageName: " + pageName);
    navBar.classList.remove("default-nav");
    navBar.classList.add(pageName + "-nav");
    header.classList.remove("default-header");
    header.classList.add(pageName + "-header");
    body.classList.remove("default-body");
    body.classList.add(pageName + "-body");
    color.classList.remove("default-color");
    color.classList.add(pageName + "-color");
    console.log("changed pageName: " + pageName);
  }
};


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
