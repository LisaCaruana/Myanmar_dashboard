// Load data from API
// https://gbfs.citibikenyc.com/gbfs/en/station_information.json
var base_url ="data.csv"

// create the map for Myanmar
// https://leafletjs.com/examples/quick-start/
var myMap=L.map('mapheat').setView([21.9162, 95.9560], 6);

var streetLayer=L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
    }).addTo(myMap);

var myIcon = L.icon({
    iconUrl: "https://img.icons8.com/ultraviolet/40/000000/parking.png",
    iconSize: [20, 20],
    iconAnchor: [22, 94],
});

d3.csv(base_url).then(function(data){
    console.log(data);
    var heatArray=[]

    for (var i = 0; i < data.length; i++) {
    
          heatArray.push([data[i].latitude, data[i].longitude]);
        }
        console.log(heatArray);
    
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
      }).addTo(myMap);
    
    });

    
    // stations_ary=data['data']['stations'].slice(0,50)

    // create markers for each station
    // L.marker ([lat,lon])
    // stations_ary.forEach(function(one_station){
    //     var marker = L.marker([one_station['lat'], one_station['lon']], {'icon': myIcon})
    //                                 .bindPopup(`<h3>${one_station['name']}</h3><h3>Capacity: ${one_station['capacity']}</h3>`)
    //     // marker.addTo(myMap)
    //     markerGroup.push(marker) // push each freshly added marker to array
    // })
    // var stationLayerGroup= L.layerGroup(markerGroup)
    //                          .addTo(myMap);
    
    // var baseLayers= {
    //                 "Mapbox": streetLayer,
    //                 // "OpenStreetMap": osm
    //                 };
    // var overlays={
    //                 "Marker": stationLayerGroup
    //                 // "Roads": roadsLayer
    //              };
    // L.control.layers(baseLayers,overlays).addTo(myMap);

