// // This gets inserted into the div with an id of 'map'
// var Myanmar_map = L.map("map", {
//     center: [21.9162, 95.9560],
//     // setView: [21.9162, 95.9560],
//     // maxBounds: [21.9162, 95.9560],
//     zoom: 6
//   });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
function createMap(Myanmar_map) {
  var map_base = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    // attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    // pane: 'labels',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    //find mapbox tile layer that includes outlines
    // paddingTopLeft: "15px"
    accessToken: API_KEY
  })
  // .addTo(Myanmar_map);

  var baseMap = {
    "map_base": map_base
  };

  var overlayMaps = {
    "Myanmar_map": Myanmar_map
  }

  var map = L.map("map", {
    center: [21.9162, 95.9560],
    // setView: [21.9162, 95.9560],
    // maxBounds: [21.9162, 95.9560],
    zoom: 6,
    layers: [map_base, Myanmar_map]
  });

  L.control.layers(baseMap, overlayMaps, {
    collapsed: false
  }).addTo(map);

};

  function createMarkers() {
    // var images = (insert database of photos here)

    // var incidents = [];
    var markers_list=[]
    // var incidents = L.marker([24.4284, 95.3940])
    // .bindPopup();

    // // incidents.push(incidents);
    var incident_icon = L.icon({
          // shadowUrl: 'Lisa\Media\Bago\Bago_residents_flee_junta_raids_April_9_2021.jpg',
          iconUrl: 'https://image.freepik.com/free-vector/illustration-myanmar-flag_53876-27149.jpg', 
//           shadowUrl: "https://www.freepik.com/free-vector/illustration-myanmar-flag_2922535.htm",
          iconSize:     [38, 95],
//          shadowSize:   [50, 64],
          iconAnchor:   [22, 94],
//          shadowAnchor: [4, 62],
          popupAnchor:  [-3, -76]
    });
    var one_marker=L.marker([18.3313, 96.0679], {icon: incident_icon})//.addTo(map).bindPopup("Bago");
    markers_list.push(one_marker)
    console.log(one_marker)
    console.log(markers_list)
    return markers_list
  };

  createMap(L.layerGroup(createMarkers()));

   // map.addLayers(createMarkers());
    

  // var popup = L.popup()
  //   .setLatLng(19.9386, 96.1527)
  //   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
  //   .openOn(map_base);


  // Need to edit .form layout in css file. Some of the div ids can be changed, need to connect these to the css
  //Submit and choose file will first be in javascript, use D3 to select info to put into a dictionary or list in javescript
  //then send info to database. Python flask app will call it back and send it back to JS
  //Need to: Put map in box, put outline around country and states 
  // Dropdown of States and Regions
  //States: *Chin (22.0087N 93.5813E), *Kachin (25.8509N, 97.4381E), *Kayah (19.2342N, 97.2653E), 
  //*Kayin (16.9459N, 97.9593E), *Mon (16.3003N, 97.6982E), *Rakhine (20.1041N, 93.5813E), *Shan (22.0362N, 98.1339E)
  //Regions: *Ayeyarwady (17.0342N, 95.2267E), *Bago (18.3313N, 96.0679E), *Magway (19.8871N, 94.7278E), 
  //*Mandalay (21.5619N, 95.8987E), *Sagaing (24.4284N, 95.3940E), 
  //*Tanintharyi (12.4707N, 99.0129E)  *Yangon (16.9143N, 96.1527E)
  //Other: Naypytaw (19.9386N, 96.1527E), Wa Territory (47.7511N, 120.7401W)
 