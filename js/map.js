// ========================================
// Step 1: Initialize the map
// ========================================

// TODO:
// - Create a Leaflet map
// - Center the map on Arizona
// - Choose an appropriate zoom level
// - Store the map in a variable named map



// ========================================
// Step 2: Add a basemap
// ========================================

// TODO:
// - Add an OpenStreetMap tile layer
// - Include attribution
// - Add the tile layer to the map



// ========================================
// Step 3: Add zoom controls
// ========================================

// TODO:
// - Decide whether to use Leaflet's default zoom control
// - If needed, move the zoom control to a different corner of the map



// ========================================
// Step 4: Add a point feature
// ========================================

// TODO:
// - Add one point marker to the map
// - Choose a meaningful location
// - Save the marker in a variable if needed later



// ========================================
// Step 5: Add a popup to the point
// ========================================

// TODO:
// - Bind a popup to your marker
// - Include a short title and description



// ========================================
// Step 6: Load point data from GeoJSON
// ========================================

// TODO:
// - Use fetch() to load a point GeoJSON file from the data/ folder
// - Convert the response to JSON
// - Add the GeoJSON to the map using L.geoJSON()
// - Consider using pointToLayer() if you want circle markers instead of default markers



// ========================================
// Step 7: Load line data from GeoJSON
// ========================================

// TODO:
// - Use fetch() to load a line GeoJSON file from the data/ folder
// - Add the GeoJSON to the map using L.geoJSON()
// - Style the line layer so it is easy to see



// ========================================
// Step 8: Load polygon data from GeoJSON
// ========================================

// TODO:
// - Use fetch() to load a polygon GeoJSON file from the data/ folder
// - Add the GeoJSON to the map using L.geoJSON()
// - Style the polygon layer with fillColor, color, weight, and fillOpacity



// ========================================
// Step 9: Add popups to GeoJSON features
// ========================================

// TODO:
// - Use onEachFeature() to bind popups to your GeoJSON features
// - Display useful attribute information from feature.properties
// - Add popups to at least one point, one line, and one polygon layer



// ========================================
// Step 10: Style features using attributes
// ========================================

// TODO:
// - Use feature properties to change how features are styled
// - For example, use one attribute to control color, size, or category
// - Apply attribute-based styling to at least one GeoJSON layer



// ========================================
// Step 11: Fit the map to your data
// ========================================

// TODO:
// - Use fitBounds() so the map zooms to one of your loaded layers
// - Choose the layer that best represents your study area



// ========================================
// Step 12: Add a legend
// ========================================

// TODO:
// - Create a Leaflet legend control
// - Position it on the map
// - Include labels that explain your symbology
// - Make sure the legend matches at least one styled layer



// ========================================
// Step 13: Add a layer control
// ========================================

// TODO:
// - Organize your point, line, and polygon layers
// - Add a layer control so users can turn layers on and off
// - Give the layer names clear labels



// ========================================
// Step 14: Add simple interactivity
// ========================================

// TODO:
// - Add one interactive behavior beyond popups
// - Good options include:
//   - highlight features on hover
//   - reset style on mouseout
//   - filter features by attribute
//   - toggle visibility of selected features
// - Choose one interaction and make sure it works clearly



// ========================================
// Step 15: Final map polish
// ========================================

// TODO:
// - Review your map title and page text in index.html
// - Make sure the map loads without console errors
// - Check that all layers draw correctly
// - Check that legend, popups, and controls work as expected
