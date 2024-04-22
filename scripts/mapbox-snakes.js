
function loadMap() {
    /* Uses Mapbox GL JS to create an interactive map of snake locations,
     if the map element exists on the page */
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    mapboxgl.accessToken = "pk.eyJ1IjoiY3liZXJtYXBwZXI5IiwiYSI6ImNsdWg2cjQ1cDFxbWsyanBrZG15N3hsYjQifQ.3Vbx53cGRAS7K3livjySgg";
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/cybermapper9/cluh9p4y4016m01prakl7gwke', 
        zoom: 1.5,
        maxZoom: 5 
    });

    /*Add snake locations to the map using .Popup method, 
    Reference: https://docs.mapbox.com/mapbox-gl-js/example/popup/ */
    const popup = new mapboxgl.Popup({ offset: [0, -15] });

    function updatePopupContent(popup, snake) {
        /* Updates the content of the popup with the given snake object */
        popup.setHTML(`
            <div class="popup-content">
                <h3>${snake.species}</h3>
                <img src="${snake.imagePath}" alt="${snake.species}">
                <p>Reference: <a href="${snake.fileURL}">${snake.species} Reference</a></p>
                <p>License: <a href="${snake.referenceLicense}">${snake.species} License</a></p>
            </div>
        `);
    }

    map.on('mousemove', (event) => {
        /* uses the queryRenderedFeatures method to query the map for personally created dataset of snake locations.
        This dataset requires Mpbox personal account to view online so the
        GEOJSON file to view is located at: serpent-seeker--1\other\features.geojson */
        const features = map.queryRenderedFeatures(event.point, { layers: ['snake-locations'] });
       
        if (!features.length) {
            popup.remove();
            return;
        }

        const feature = features[0];
        const snake = snakes[feature.properties.species];

        popup.setLngLat(event.lngLat);
        updatePopupContent(popup, snake);
        popup.addTo(map);
    });
}

// Load the map when the DOM content is loaded
document.addEventListener('DOMContentLoaded', loadMap);


//creating snake objects
let snakes = {
    'Puff Adder': {
        species: 'Puff Adder',
        fileURL: 'href="https://commons.wikimedia.org/wiki/File:Kopf_einer_Puffotter.JPG">Kopf einer Puffotter</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        imagePath: './images/puff-adder.jpg',
        colors: 'Brown, grey, yellow, black',
        length: '2 to 4 feet',
        weight: '5 to 6 pounds',
        skinPattern: 'rough camoflage',
        venomous: 'Yes',
    },
    'Black Mamba': {
        species: 'Black Mamba',
        imagePath: './images/black-mamba.jpg',
        fileURL: '<a href="https://commons.wikimedia.org/wiki/File:Black_Mamba_Head.jpg">Black Mamba Head</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Grey, brown, olive, yellow',
        length: '6 to 14 feet',
        weight: '1.6 to 3.5 pounds',
        skinPattern: 'smooth',
        venomous: 'Yes',
    },
    'Boomslang': {
        species: 'Boomslang',
        imagePath: './images/boomslang.jpg',
        fileURL: '<a href="https://commons.wikimedia.org/wiki/File:Dispholidus_typus.jpg">By William Warby</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>',
        colors: 'Green, brown, black',
        length: '4 to 6 feet',
        weight: '0.2 to 0.4 pounds',
        skinPattern: 'smooth',
        venomous: 'Yes',
    },
    'Gaboon Viper': {
        species: 'Gaboon Viper',
        imagePath: './images/gaboon-viper.jpg',
        fileURL: '< a href= "https://upload.wikimedia.org/wikipedia/commons/9/98/Bitis_gabonica.jpg">Gaboon Viper</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, purple',
        length: '4 to 6 feet',
        weight: '15 to 20 pounds',
        skinPattern: 'rough camoflauge',
        venomous: 'Yes',
    },
    'Indian Cobra': {
        species: 'Indian Cobra',
        imagePath: './images/indian-cobra.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/e/ed/Indian_spectacled_cobra_-_Flickr_-_Scorius.jpg">By Chandan Singh</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
        colors: 'Black, brown, yellow',
        length: '4 to 7 feet',
        weight: '3 to 5 pounds',
        skinPattern: 'smooth',
        venomous: 'Yes',
    },
    'Russells Viper': {
        species: 'Russell\'s Viper',
        imagePath: './images/russell-viper.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/6/61/Russells_viper_in_pune_zoo.jpg">Gupt. sumeet</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow',
        length: '3 to 5 feet',
        weight: '5 to 7 pounds',
        skinPattern: 'spotted camouflage',
        venomous: 'Yes',
    },
    'King Cobra': {
        species: 'King Cobra',
        imagePath: './images/king-cobra.jpg',
        fileURL: '<a href"https://upload.wikimedia.org/wikipedia/commons/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg">By Michael Allen Smith</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
        colors: 'Black, brown, yellow',
        length: '10 to 18 feet',
        weight: '13 to 20 pounds',
        skinPattern: 'smooth',
        venomous: 'Yes',
    },
    'Green Tree Python': {
        species: 'Green Tree Python',
        imagePath: './images/green-tree.jpg',
        fileURL: 'https://commons.wikimedia.org/wiki/File:Gruenebaumpython4cele4.jpg">Green Tree Python</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
        colors: 'Green, yellow, blue',
        length: '4 to 6 feet',
        weight: '2 to 3 pounds',
        skinPattern: 'smooth',
        venomous: 'No',
    },
    'European Adder': {
        species: 'European Adder',
        imagePath: './images/european-adder.jpg',
        fileURL: '<a href="https://commons.wikimedia.org/wiki/File:Viperaberus1.jpg">By Zdeněk Fric</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '1 to 2 feet',
        weight: '0.2 to 0.4 pounds',
        skinPattern: 'rough camouflage',
        venomous: 'Yes',
    },
    'Green Whip': {
        species: 'Green Whip Snake',
        imagePath: './images/green-whip-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/7/79/Viridiflavus-Lorraine-IMG_4974.jpg">By Harold van der Lingen</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/4.0" rel="licence"> CC BY-SA 4.0</a>',
        colors: 'Green, yellow, black',
        length: '3 to 4 feet',
        weight: '0.2 to 0.4 pounds',
        skinPattern: 'smooth',

    },
    'Smooth Snake': {
        species: 'Smooth Snake',
        imagePath:  './images/smooth-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/1/17/Schlingnatter.jpg">By Der Irbis</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '1 to 2 feet',
        weight: '0.2 to 0.4 pounds',
        skinPattern: 'smooth',
    },
    'Grass Snake': {
        species: 'Grass Snake',
        imagePath: './images/grass-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/d/df/2017.07.17.-21-Tiefer_See_oder_Grubensee-Storkow_%28Mark%29--Ringelnatter.jpg">By Andreas Eichler</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/4.0" rel="license">CC BY-SA 4.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '2 to 3 feet',
        weight: '0.2 to 0.4 pounds',
        skinPattern: 'spotted',

    },
    'Eastern Diamondback Rattlesnake': {
        species: 'Eastern Diamondback Rattlesnake',
        imagePath: './images/eastern-diamondback.jpg',
        fileURL: '<a href"https://upload.wikimedia.org/wikipedia/commons/d/d8/LouisvilleZooCrotalus.jpg">By FinneJager</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '3 to 6 feet',
        weight: '4 to 10 pounds',
        skinPattern: 'diamonds',
        venomous: 'Yes',
    },
    'Western Diamondback Rattlesnake': {
        species: 'Western Diamondback Rattlesnake',
        imagePath: './images/western-diamonback.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/9/99/Crotalus_atrox_diamantklapperschlange_kopf.jpg">By Holger Krisp</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '3 to 5 feet',
        weight: '4 to 10 pounds',
        skinPattern: 'diamonds',
    },
    'Coral Snake': {
        species: 'Coral Snake',
        imagePath: './images/coral-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/3/3c/Coral_009.jpg">By Norman Benton</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Red, yellow, black',
        length: '2 to 4 feet',
        weight: '0.2 to 0.4 pounds',
        skinPattern: 'banded',
        venomous: 'Yes',
    },
    'Copperhead': {
        species: 'Copperhead',
        imagePath: './images/copperhead.jpg',
        fileURL: '<a HREF="https://upload.wikimedia.org/wikipedia/commons/d/db/Agkistrodon_contortrix_qtl1.jpg"> By Quartl</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '2 to 4 feet',
        weight: '2 to 4 pounds',
        skinPattern: 'banded',
        venomous: 'Yes',
    },
    'Cottonmouth': {
        species: 'Cottonmouth',
        imagePath: './images/cottonmouth.png',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/f/fe/Agkistrodon_piscivorus_piscivorus_CDC.png">By Edward J.Wozniak</a>',
        referenceLicense: '<a href="https://en.wikipedia.org/wiki/Public_domain" rel="license">Public Domain</a>',
        colors: 'Brown, grey, yellow, black',
        length: '2 to 4 feet',
        weight: '2 to 4 pounds',
        skinPattern: 'banded',
        venomous: 'Yes',
    },
    'Bushmaster': {
        species: 'Bushmaster',
        imagePath: './images/bushmaster.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/5/5e/Lachesis_muta_muta.jpg">By Christopher Murray</a>',
        referenceLicense: '<a href="https://en.wikipedia.org/wiki/Public_domain" rel="license">Public Domain</a>',
        colors: 'Brown, grey, yellow, black',
        length: '6 to 12 feet',
        weight: '6 to 15 pounds',
        skinPattern: 'banded',
        venomous: 'Yes',
    },
    'Yellow Anaconda': {
        species: 'Yellow Anaconda',
        imagePath: './images/yellow-anaconda.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/b/b3/Anaconda_jaune_34.JPG">By Patrick Jean</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '10 to 12 feet',
        weight: '30 to 40 pounds',
        skinPattern: 'spotted',
        venomous: 'No',
    
    },
    'Green Anaconda': {
        species: 'Green Anaconda',
        imagePath: './images/green-anaconda.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/8/88/Anaconda_al_acecho.JPG">By Daniel10ortegaven</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Green, yellow, black',
        length: '15 to 20 feet',
        weight: '200 to 300 pounds',
        skinPattern: 'spotted',
        venomous: 'No',
    },
    'Coastal Taipan': {
        species: 'Coastal Taipan',
        imagePath: '/./images/coastal-taipan.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/c/cc/Oxyuranus_scutellatus_first_milked_specimen_MV_3.jpg">By Jane Melville</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/4.0" rel="license">CC BY-SA 4.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '6 to 8 feet',
        weight: '5 to 10 pounds',
        skinPattern: 'smooth',

    },
    'Death Adder': {
        species: 'Death Adder',
        imagePath: '/./images/death-adder.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/5/5a/CSIRO_ScienceImage_3990_Death_Adder.jpg">By CSIRO</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by/3.0/au/legalcode" rel="license">CC BY 3.0 AU</a>',
        colors: 'Brown, grey, yellow, black',
        length: '3 to 4 feet',
        weight: '1 to 2 pounds',
        skinPattern: 'rough camouflage',
    },
    'Inland Taipan': {
        species: 'Inland Taipan',
        imagePath: '/./images/inland-taipan.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/f/fe/Fierce_Snake-Oxyuranus_microlepidotus.jpg">By Xlerate</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        colors: 'Brown, grey, yellow, black',
        length: '6 to 8 feet',
        weight: '5 to 10 pounds',
        skinPattern: 'smooth',
        venomous: 'Yes',
    },
    'Red-bellied Black Snake': {
        species: 'Red-bellied Black Snake',
        imagePath: '/./images/red-bellied-black-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/3/38/Red-bellied_Black_Snake_%28Pseudechis_porphyriacus%29_%288397134493%29.jpg">By Matt',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
        colors: 'Black, red, yellow',
        length: '3 to 5 feet',
        weight: '2 to 3 pounds',
        skinPattern: 'smooth',
        venomous: 'Yes',
    }
};


function getSnakeStats(button) {
    /* If snake species is found,
    Retrieves the snake stats from the snakes object, creates a DOM stats element, adds to class named snake-stats.
    creates HTML content, uses appendChild method to add content. Displaus content in the box element, and replaces the show-stats button.
    References for methods used: https://www.w3schools.com/jsref/jsref_trim_string.asp#gsc.tab=0&gsc.q=appendChild
    https://www.w3schools.com/jsref/jsref_trim_string.asp#gsc.tab=0
    */
    const snakeSpecies = button.parentElement.querySelector('.snake-species').innerText;
    const snake = snakes[snakeSpecies.trim()]; 
  
    if (snake) {
        const statsElement = document.createElement('div');
        statsElement.classList.add('snake-stats');

        const statsHTML = `
            <p><strong>Colors:</strong> ${snake.colors}</p>
            <p><strong>Length:</strong> ${snake.length}</p>
            <p><strong>Weight:</strong> ${snake.weight}</p>
            <p><strong>Skin Pattern:</strong> ${snake.skinPattern}</p>
            <p><strong>Venomous:</strong> ${snake.venomous}</p>
        `;
        
        statsElement.innerHTML = statsHTML;
        const boxElement = button.parentElement;
        boxElement.appendChild(statsElement);
        button.style.display = 'none';
        const hideButton = boxElement.querySelector('.hide-stats');
        hideButton.style.display = 'block';

    } else {
        alert('Snake stats not found!');
    }
}

function hideSnakeStats(button) {
    /* if snake stats are found, removes the snake stats from the DOM, 
    hides the hide-stats button, and shows the show-stats button. */
  
    const statsElement = button.parentElement.querySelector('.snake-stats');
    if (statsElement) {
        statsElement.remove(); 
    }

    const showStatsButton = button.parentElement.querySelector('.show-stats');
    if (showStatsButton) {
        showStatsButton.style.display = 'inline'; 
    }

    button.style.display = 'none';
}
