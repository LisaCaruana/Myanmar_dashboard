function createMap(Myanmar_map) {
  var map_base = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {

    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  })

  var baseMap = {
    "map_base": map_base
  };

  var overlayMaps = {
    "Myanmar_map": Myanmar_map,
    // "Heatmap": leaflet-heat.js,
    // "Markermap": marker
  }

  var map = L.map("map", {
    center: [21.9162, 95.9560],
 
    zoom: 6,
    layers: [map_base, Myanmar_map]//, Heatmap]
  });

  L.control.layers(baseMap, overlayMaps, {
    collapsed: false
  }).addTo(map);

};


  function createMarkers(data) {
   
    var markers_list=[]
    function create_icon(img_url){
      var incident_icon=L.icon({
        
        iconUrl: img_url, 
        iconSize:     [45, 45],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
      });
      return incident_icon
    }
  

    }
    data.forEach(incident=>{
      var coords=incident['Coordinates'].replace('(', '').replace(')', '').split(', ')
    
      var one_marker=L.marker([parseFloat(coords[0]), parseFloat(coords[1])], {icon: create_icon(incident['Image_Link'])}).bindPopup(`<img src="${incident['Image_Link']}"/>`)//"Bago"</h1>`); //incident['columnheader']
      markers_list.push(one_marker)
    })
      
    
    return L.layerGroup(markers_list)
  };



d3.csv('../static/images.csv').then(data=>{
  console.log(data)
  createMap(createMarkers(data))
})
  
 