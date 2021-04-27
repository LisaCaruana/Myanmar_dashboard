// import CircleMarker as LeafletCircleMarker

function createMap(overlayMaps) {
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

  // var overlayMaps = {
  //   "Myanmar_map": Myanmar_map,
  //   // "Heatmap": leaflet-heat.js,
  //   // "Markermap": marker
  // }

  var map = L.map("map", {
    center: [21.9162, 95.9560],
 
    zoom: 6,
    layers: [map_base]//, Object.values(overlayMaps)[1]]//, Heatmap, Markermap]//, Heatmap]
  });

  L.control.layers(baseMap, overlayMaps, {
    collapsed: false
  }).addTo(map);

};

function createPhotoMarkers(data) {
 
  var markers_list=[]
  function create_icon(img_url){
    var incident_icon=L.icon({
      iconUrl: img_url,
      // content: 'img_url',
      // width: "4px",
      // height: "4px",
      // margin: "3px 0 0 3px",
      // // background: "#fff",
      // position: "absolute",
      // borderradius: "50%"
      // iconUrl: img_url, 
      iconSize:     [45, 45],
      // iconShape: [circle],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76]
      // style: "circleMarker"
      // border-radius: [50%]
      
      
      // geometry: "circle"
      // marker: "circle"
      // type: "circle"
    });
    // incident_icon {
    //   width: 30px;
    //   height: 30px;
    //   border-radius: 50% 50% 50% 0;
    //   background: #c30b82;
    //   position: absolute;
    //   transform: rotate(-45deg);
    //   left: 50%;
    //   top: 50%;
    //   margin: -15px 0 0 -15px;
    // }

    return incident_icon//=L.CircleMarker
  
// function pop_Fotos(layer) {
//     var popupContent = []
//     var popupContent = ('<img style="max-height:200px;max-width:200px;" img_src="${incident[Image_Link]}</img>'
//     layer.bindPopup(popupContent, {maxWidth: 200, closeOnClick: true});
// };
//   return popupContent
// }
//   function createpopUp(Description){
//     var content = []
//     function create_content(data){
//       var content = L.bindPopup({
//         text = incident[Description],
//         img_src = img_url,
//         width = "250px",
//         height = "75px" 
//   });
//       return content
// }
  //   incident['img_url'],
    // var Image_Link = img_url,
      
  // L.marker(incident_icon);
  //   border-radius: 50%
  }
  
  data.forEach(incident=>{
    console.log(create_icon(incident['Image_Link']))
    console.log(incident["Image_Link"])
    var coords=incident['Coordinates'].replace('(', '').replace(')', '').split(', ')
    //var one_marker=L.Marker([parseFloat(coords[0]), parseFloat(coords[1])], {icon: create_icon(incident['Image_Link'])}).bindPopup(`<img src=${incident['Image_Link']}, style="width: 5px, height: 5px" /> <p style="font-size: 12px"> ${incident['Description']}</p>`)//"Bago"</h1>`); //incident['columnheader']
    var one_marker=L.circleMarker([parseFloat(coords[0]), parseFloat(coords[1])], {icon: create_icon("https://pbs.twimg.com/media/EtwgugmVEAEa-yZ?format=jpg&name=medium")}).bindPopup(`<img src=${incident['Image_Link']} style="width: 5px, height: 5px"/> <p style="font-size: 12px"> ${incident['Description']}</p>`)//"Bago"</h1>`); //incident['columnheader']
    //var one_marker=L.marker([parseFloat(coords[0]), parseFloat(coords[1])], {icon: create_icon(incident['Image_Link'])}).bindPopup(popupContent)
    //var one_marker=L.marker([parseFloat(coords[0]), parseFloat(coords[1])], {icon: create_icon(incident['Image_Link'])}).bindPopup(popupContent)
    markers_list.push(one_marker)
  
  })
  return L.layerGroup(markers_list)
};

function createIncidentMarkers(data){
  // console.log(data);
  var markersArray=[]
  for (var i = 0; i < data.length; i++) {
    markersArray.push(L.marker([data[i].latitude, data[i].longitude]).bindPopup("<h1>Place: " + data[i].location + "</h1> <h2>Attack Type: " + data[i].event_type + "</h2>"));
    // L.marker(heatArray[i])
  // ;
  }
  return L.layerGroup(markersArray);
}

function createHeatLayer(data){
  var heatArray=[]
  for (var i=0; i<data.length; i++){
    heatArray.push([data[i].latitude, data[i].longitude])
  }
  var heat = L.heatLayer(heatArray, {
        radius: 20,
        blur: 15,
        maxZoom: 10,
        max:4,
        gradient:{
            0.0:'green',
            0.5:'yellow',
            1.0:'red'
        }
      })
  return heat 
}


function buildPlot() {
    /* data route */
    const url = "/api/Myanmar_Records";
    d3.json(url).then(function(response) {
  
      console.log(response);
  
      const data = response;
  
      // Grab values from the data json object to build the plots
    var event_type  = data.map(one_event=>one_event['event_type']);
    var fatalities = data.map(one_event=>one_event['fatalities']);
    
    var trace1 = {
      type: "bar",
      name: 'Myanmar_Fatalities',
      x: event_type,
      y: fatalities,
      marker: {
        color: 'rgb(142,124,195)',
        // ['rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)'],
        width: 1
      },
    }

      // Define the plot layout
  var layout = {
    title: "Civil Unrest and Fatalities in Myanmar",
    xaxis: { title: "Events" },
    yaxis: { title: "Number of Fatalities" }
  };
    Plotly.newPlot("plot", [trace1], [layout]);
  })
}
  
buildPlot();

// d3.csv('../static/images.csv').then(photo_data=>{
d3.csv(photo_csv).then(photo_data=>{
  // d3.csv('../data.csv').then(incident_data=>{
  d3.csv(incident_csv).then(incident_data=>{
    // console.log(photo_data)
    createMap({'Images': createPhotoMarkers(photo_data), 
               'Incidents': createIncidentMarkers(incident_data), 
               'Heatlayer': createHeatLayer(incident_data)})
  })
});