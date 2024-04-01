mapboxgl.accessToken = "pk.eyJ1IjoiY3liZXJtYXBwZXI5IiwiYSI6ImNsdWg2cjQ1cDFxbWsyanBrZG15N3hsYjQifQ.3Vbx53cGRAS7K3livjySgg";
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cybermapper9/cluh9p4y4016m01prakl7gwke', 
    zoom: 1.5,
    maxZoom: 3 });

// Create a single popup when the map is initialized
const popup = new mapboxgl.Popup({ offset: [0, -15] });

map.on('mousemove', (event) => {
    const features = map.queryRenderedFeatures(event.point, { layers: ['snake-populated-continents'] });
    if (!features.length) {
        popup.remove(); // Remove the popup if no features are found
        return;
    }
    const feature = features[0];

    // Update the popup's content and location
    popup.setLngLat(event.lngLat)
         .setHTML(`<h3>${feature.properties.name}</h3><p>${feature.properties.description}</p>`)
         .addTo(map);
});