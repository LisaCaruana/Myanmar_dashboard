// This gets inserted into the div with an id of 'map'
var Myanmar_map = L.map("map", {
    center: [21.9162, 95.9560],
    // setView: [21.9162, 95.9560],
    // maxBounds: [21.9162, 95.9560],
    zoom: 6
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    // attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    // pane: 'labels',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    // paddingTopLeft: "15px"
    accessToken: API_KEY
  }).addTo(Myanmar_map);

  //Need to: Put map in box, put outline around country and states 
  // Dropdown of States and Regions
  // Cities to include: Yangon, Mandalay, Bago, Mogok, Myitkyina, Bagan, Naypytaw, Mawlamyine, Taunggyi, Shwebo, Monywa, Dawei, Mawlamyine, Bhamo   