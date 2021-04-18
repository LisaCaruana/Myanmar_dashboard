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
    //find mapbox tile layer that includes outlines
    // paddingTopLeft: "15px"
    accessToken: API_KEY
  }).addTo(Myanmar_map);


  // Need to edit .form layout in css file. Some of the div ids can be changed, need to connect these to the css
  //Submit and choose file will first be in javascript, use D3 to select info to put into a dictionary or list in javescript
  //then send info to database. Python flask app will call it back and send it back to JS
  //Need to: Put map in box, put outline around country and states 
  // Dropdown of States and Regions
  //States: Chin* (Hakha), Kachin* (Myitkyina, Bhamo), *Kayah (Loikaw), 
  //*Kayin (Myawaddy), *Mon (Mawlamyine), *Rakhine (Sittwe), *Shan (Taunggyi)
  //Regions: *Ayeyarwady (Pathein), *Bago (Bago), *Magway, 
  //*Mandalay (Mandalay, Mogok), *Sagaing (Monywa, Shwebo), 
  //*Tanintharyi (Dawei) *Yangon (Yangon)
  //Other: Naypytaw, Wa Territory
 