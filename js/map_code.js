// ============================================
// Step 1: Initialize the map
// ============================================

// Create map centered on Tucson
const map = L.map('map').setView([32.2226, -110.9747], 12);



// ============================================
// Step 2: Add a basemap
// ============================================

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);



// ============================================
// Step 3: Add zoom controls
// ============================================

// Move zoom control to top right
map.zoomControl.setPosition('topright');



// ============================================
// Step 4: Create layer groups
// ============================================

const polygonLayer = L.layerGroup().addTo(map);
const lineLayer = L.layerGroup().addTo(map);
const pointLayer = L.layerGroup().addTo(map);



// ============================================
// Step 5: Load point GeoJSON + popups (Restaurants)
// ============================================

let restaurantsGeoJSON;

fetch('data/restaurants.geojson')
  .then(res => res.json())
  .then(data => {
    restaurantsGeoJSON = L.geoJSON(data, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 6,
          fillColor: '#d95f02',
          color: '#ffffff',
          weight: 1,
          fillOpacity: 0.9
        });
      },
      onEachFeature: function(feature, layer) {
        const name = feature.properties.name || 'Restaurant';
        const cuisine = feature.properties.cuisine || 'Unknown';
        layer.bindPopup(`<strong>${name}</strong><br>Cuisine: ${cuisine}`);
      }
    }).addTo(pointLayer);
  });



// ============================================
// Step 6: Load line GeoJSON + popups (Cycleways)
// ============================================

let cyclewaysGeoJSON;

fetch('data/cycleways.geojson')
  .then(res => res.json())
  .then(data => {
    cyclewaysGeoJSON = L.geoJSON(data, {
      style: function(feature) {
        return {
          color: '#1b9e77',
          weight: 3
        };
      },
      onEachFeature: function(feature, layer) {
        const type = feature.properties.fclass || 'Cycleway';
        layer.bindPopup(`<strong>${type}</strong>`);
      }
    }).addTo(lineLayer);
  });



// ============================================
// Step 7: Load polygon GeoJSON + popups (Tucson boundary)
// ============================================

let tucsonGeoJSON;

fetch('data/tucson.geojson')
  .then(res => res.json())
  .then(data => {
    tucsonGeoJSON = L.geoJSON(data, {
      style: function(feature) {
        return {
          color: '#7570b3',
          weight: 2,
          fillOpacity: 0.1
        };
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup('<strong>Tucson Boundary</strong>');
      }
    }).addTo(polygonLayer);

    // ============================================
    // Step 9: Fit map to data (using polygon)
    // ============================================

    map.fitBounds(tucsonGeoJSON.getBounds());
  });



// ============================================
// Step 8: Add attribute-based styling
// ============================================

// Example already applied in restaurants:
// styling based on feature type (circleMarker, color)



// ============================================
// Step 10: Add layer control
// ============================================

L.control.layers(null, {
  'Tucson Boundary': polygonLayer,
  'Cycleways': lineLayer,
  'Restaurants': pointLayer
}).addTo(map);



// ============================================
// Step 11: Add simple interactivity (hover highlight)
// ============================================

function highlightFeature(e) {
  const layer = e.target;
  layer.setStyle({
    weight: 4,
    color: '#ffcc00'
  });
}

function resetHighlight(e) {
  cyclewaysGeoJSON.resetStyle(e.target);
}

// Apply hover interaction to cycleways
function addHoverInteraction() {
  if (cyclewaysGeoJSON) {
    cyclewaysGeoJSON.eachLayer(function(layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
      });
    });
  }
}

// Wait a moment to ensure data is loaded
setTimeout(addHoverInteraction, 1000);



console.log('map.js loaded - ready to go');
