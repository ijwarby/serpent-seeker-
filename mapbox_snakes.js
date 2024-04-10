mapboxgl.accessToken = "pk.eyJ1IjoiY3liZXJtYXBwZXI5IiwiYSI6ImNsdWg2cjQ1cDFxbWsyanBrZG15N3hsYjQifQ.3Vbx53cGRAS7K3livjySgg";
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cybermapper9/cluh9p4y4016m01prakl7gwke', 
    zoom: 1.5,
    maxZoom: 5 });

// Create a single popup when the map is initialized
const popup = new mapboxgl.Popup({ offset: [0, -15] });

//creating snake objects
const snakes = {
    'Puff Adder': {
        species: 'Puff Adder',
        fileURL: 'href="https://commons.wikimedia.org/wiki/File:Kopf_einer_Puffotter.JPG">Kopf einer Puffotter</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        imagePath: 'images/puff-adder.jpg',
    },
    'Black Mamba': {
        species: 'Black Mamba',
        imagePath: 'images/black-mamba.jpg',
        fileURL: '<a href="https://commons.wikimedia.org/wiki/File:Black_Mamba_Head.jpg">Black Mamba Head</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
        
    },
    'Boomslang': {
        species: 'Boomslang',
        imagePath: 'images/boomslang.jpg',
        fileURL: '<a href="https://commons.wikimedia.org/wiki/File:Dispholidus_typus.jpg">By William Warby</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>',
    },
    'Gaboon Viper': {
        species: 'Gaboon Viper',
        imagePath: 'images/gaboon-viper.jpg',
        fileURL: '< a href= "https://upload.wikimedia.org/wikipedia/commons/9/98/Bitis_gabonica.jpg">Gaboon Viper</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Indian Cobra': {
        species: 'Indian Cobra',
        imagePath: 'images/indian-cobra.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/e/ed/Indian_spectacled_cobra_-_Flickr_-_Scorius.jpg">By Chandan Singh</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
    },
    'Russells Viper': {
        species: 'Russell\'s Viper',
        imagePath: 'images/russell-viper.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/6/61/Russells_viper_in_pune_zoo.jpg">Gupt. sumeet</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'King Cobra': {
        species: 'King Cobra',
        imagePath: 'images/king-cobra.jpg',
        fileURL: '<a href"https://upload.wikimedia.org/wikipedia/commons/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg">By Michael Allen Smith</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
    },
    'Green Tree Python': {
        species: 'Green Tree Python',
        imagePath: 'images/green-tree.jpg',
        fileURL: 'https://commons.wikimedia.org/wiki/File:Gruenebaumpython4cele4.jpg">Green Tree Python</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
    },
    'European Adder': {
        species: 'European Adder',
        imagePath: 'images/european-adder.jpg',
        fileURL: '<a href="https://commons.wikimedia.org/wiki/File:Viperaberus1.jpg">By Zdeněk Fric</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Green Whip': {
        species: 'Green Whip Snake',
        imagePath: 'images/green-whip-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/7/79/Viridiflavus-Lorraine-IMG_4974.jpg">By Harold van der Lingen</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/4.0" rel="licence"> CC BY-SA 4.0</a>',
    },
    'Smooth Snake': {
        species: 'Smooth Snake',
        imagePath:  'images/smooth-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/1/17/Schlingnatter.jpg">By Der Irbis</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Grass Snake': {
        species: 'Grass Snake',
        imagePath: 'images/grass-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/d/df/2017.07.17.-21-Tiefer_See_oder_Grubensee-Storkow_%28Mark%29--Ringelnatter.jpg">By Andreas Eichler</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/4.0" rel="license">CC BY-SA 4.0</a>',
    },
    'Eastern Diamondback Rattlesnake': {
        species: 'Eastern Diamondback Rattlesnake',
        imagePath: 'images/eastern-diamondback.jpg',
        fileURL: '<a href"https://upload.wikimedia.org/wikipedia/commons/d/d8/LouisvilleZooCrotalus.jpg">By FinneJager</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Western Diamondback Rattlesnake': {
        species: 'Western Diamondback Rattlesnake',
        imagePath: 'images/western-diamonback.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/9/99/Crotalus_atrox_diamantklapperschlange_kopf.jpg">By Holger Krisp</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Coral Snake': {
        species: 'Coral Snake',
        imagePath: 'images/coral-snake.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/3/3c/Coral_009.jpg">By Norman Benton</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Copperhead': {
        species: 'Copperhead',
        imagePath: 'images/copperhead.jpg',
        fileURL: '<a HREF="https://upload.wikimedia.org/wikipedia/commons/d/db/Agkistrodon_contortrix_qtl1.jpg"> By Quartl</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Cottonmouth': {
        species: 'Cottonmouth',
        imagePath: 'images/cottonmouth.png',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/f/fe/Agkistrodon_piscivorus_piscivorus_CDC.png">By Edward J.Wozniak</a>',
        referenceLicense: '<a href="https://en.wikipedia.org/wiki/Public_domain" rel="license">Public Domain</a>',
    },
    'Bushmaster': {
        species: 'Bushmaster',
        imagePath: 'images/bushmaster.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/5/5e/Lachesis_muta_muta.jpg">By Christopher Murray</a>',
        referenceLicense: '<a href="https://en.wikipedia.org/wiki/Public_domain" rel="license">Public Domain</a>',
    },
    'Yellow Anaconda': {
        species: 'Yellow Anaconda',
        imagePath: 'images/yellow-anaconda.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/b/b3/Anaconda_jaune_34.JPG">By Patrick Jean</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Green Anaconda': {
        species: 'Green Anaconda',
        imagePath: 'images/green-anaconda.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/8/88/Anaconda_al_acecho.JPG">By Daniel10ortegaven</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',

    },
    'Coastal Taipan': {
        species: 'Coastal Taipan',
        imagePath: 'images/coastal-taipan.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/c/cc/Oxyuranus_scutellatus_first_milked_specimen_MV_3.jpg">By Jane Melville</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/4.0" rel="license">CC BY-SA 4.0</a>',
    },
    'Death Adder': {
        species: 'Death Adder',
        imagePath: 'images/death-adder.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/5/5a/CSIRO_ScienceImage_3990_Death_Adder.jpg">By CSIRO</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by/3.0/au/legalcode" rel="license">CC BY 3.0 AU</a>',
    },
    'Inland Taipan': {
        species: 'Inland Taipan',
        imagePath: 'images/inland-taipan.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/f/fe/Fierce_Snake-Oxyuranus_microlepidotus.jpg">By Xlerate</a>',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
    },
    'Red-bellied Black Snake': {
        species: 'Red-bellied Black Snake',
        imagePath: 'images/red-bellied.jpg',
        fileURL: '<a href="https://upload.wikimedia.org/wikipedia/commons/3/38/Red-bellied_Black_Snake_%28Pseudechis_porphyriacus%29_%288397134493%29.jpg">By Matt',
        referenceLicense: '<a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
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
        <p>Reference: <a ${snakes[feature.properties.species].fileURL}</a></p>
        <p>License: <a ${snakes[feature.properties.species].referenceLicense}</a></p>
    </div>
`)
.addTo(map);
});


