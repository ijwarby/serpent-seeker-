mapboxgl.accessToken = "pk.eyJ1IjoiY3liZXJtYXBwZXI5IiwiYSI6ImNsdWg2cjQ1cDFxbWsyanBrZG15N3hsYjQifQ.3Vbx53cGRAS7K3livjySgg";
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cybermapper9/cluh9p4y4016m01prakl7gwke', 
    zoom: 1.5,
    maxZoom: 3 });

// Create a single popup when the map is initialized
const popup = new mapboxgl.Popup({ offset: [0, -15] });

//creating snake objects
const snakes = {
    'Puff Adder': {
        species: 'Puff Adder',
        referenceURL: 'href="https://commons.wikimedia.org/wiki/File:Kopf_einer_Puffotter.JPG">Kopf einer Puffotter</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        imagePath: 'snake-images/puff-adder.jpg',
    },
    'Black Mamba': {
        species: 'Black Mamba',
        imagePath: 'snake-images/black-mamba.jpg',
        referenceURL: '<a href="https://commons.wikimedia.org/wiki/File:Black_Mamba_Head.jpg">Black Mamba Head</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        
    },
    'Boomslang': {
        species: 'Boomslang',
        imagePath: ('#'),
    },
    'Gaboon Viper': {
        species: 'Gaboon Viper',
        imagePath: ('#'),
    },
    'Indian Cobra': {
        species: 'Indian Cobra',
        imagePath: ('#'),
    },
    'Russell\'s Viper': {
        species: 'Russell\'s Viper',
        imagePath: ('#'),
    },
    'King Cobra': {
        species: 'King Cobra',
        imagePath: ('#'),
    },
    'Green Tree Python': {
        species: 'Green Tree Python',
        imagePath: '#',
    },
    'European Adder': {
        species: 'European Adder',
        imagePath: ('#r'),
    },
    'Green Whip Snake': {
        species: 'Green Whip Snake',
            imagePath: '#',
    },
    'Smooth Snake': {
        species: 'Smooth Snake',
        imagePath:  '#',
    },
    'Grass Snake': {
        species: 'Grass Snake',
        imagePath: '#',
    },
    'Eastern Diamondback Rattlesnake': {
        species: 'Eastern Diamondback Rattlesnake',
    },
    'Western Diamondback Rattlesnake': {
        species: 'Western Diamondback Rattlesnake',
        imagePath: '#',
    },
    'Coral Snake': {
        species: 'Coral Snake',
        imagePath: '#',
    },
    'Copperhead': {
        species: 'Copperhead',
        imagePath: '#',
    },
    'Cottonmouth': {
        species: 'Cottonmouth',
        imagePath: '#',
    },
    'Bushmaster': {
        species: 'Bushmaster',
        imagePath: '#',
    },
    'Yellow Anaconda': {
        species: 'Yellow Anaconda',
        imagePath: '#',
    },
    'Green Anaconda': {
        species: 'Green Anaconda',
        imagePath: '#',
    },
    'Coastal Taipan': {
        species: 'Coastal Taipan',
        imagePath: '#',
    },
    'Death Adder': {
        species: 'Death Adder',
        imagePath: '#',
    },
    'Inland Taipan': {
        species: 'Inland Taipan',
        imagePath: '#',
    },
    'Red-bellied Black Snake': {
        species: 'Red-bellied Black Snake',
        imagePath: '#',
    }
};


map.on('mousemove', (event) => {
    // mapbox queryRenderedFeatures method used to create an array of features from the snake-locations layer
    const features = map.queryRenderedFeatures(event.point, { layers: ['snake-locations'] });

    if (!features.length) {
        popup.remove(); // Remove the popup if no features are found
        return;
    }

    // Use the first feature found to create the popup's content
    const feature = features[0];

    //log the species and imagePath to the console
    console.log(feature.properties.species);
    console.log(snakes[feature.properties.species].imagePath);

   // Populate the popup and set its coordinates
    popup.setLngLat(event.lngLat)
    .setHTML(`
    <div class="popup-content">
        <h3>${feature.properties.species}</h3>
        <img src="${snakes[feature.properties.species].imagePath}" alt="${snakes[feature.properties.species].imagePath}">
        <p>Reference: <a ${snakes[feature.properties.species].referenceURL}</a></p>
        <p>License: <a ${snakes[feature.properties.species].referenceLicense}</a></p>
    </div>
`)
.addTo(map);
});


