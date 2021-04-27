
   function buildPlot() {
    /* data route */
    const url = "http://localhost:5000/api/Myanmar_Records";
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
    Plotly.newPlot("plot", [trace1], layout);
  })
}
  
buildPlot();

// function buildMetadata(sample) {
//   d3.json("samples.json").then((data) => {
//     var metadata= data.metadata;
//     var resultsarray= metadata.filter(sampleobject => 
//       sampleobject.id == sample);
//     var result= resultsarray[0]
//     var panel = d3.select("#sample-metadata");
//     panel.html("");
//     Object.entries(result).forEach(([key, value]) => {
//       panel.append("h6").text(`${key}: ${value}`);
//     });


// function buildChart() {
//   /* data route */
//   const url = "http://localhost:5000/api/Myanmar_Records";
//   d3.json(url).then(function(response) {

//     console.log(response);

//     const data = response;

//     // Grab values from the data json object to build the plots
//   var sub_event_type  = data.map(one_event=>one_event['sub_event_type']);
//   var event_date = data.map(one_event=>one_event['event_date']);
  
//   var trace2 = {
//     type: "bar",
//     name: 'Myanmar_Fatalities',
//     x: event_date,
//     y: sub_event_type,
//     orientation: 'h',
//           // ['rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)'],
//       // width: 1
    
//     }

//     // Define the plot layout
// var layout = {
//   title: "what is happening in Myanmar",
//   xaxis: { title: "Date" },
//   yaxis: { title: "Events" }
// };
//   Plotly.newPlot("chart", [trace2], layout);
// })
// }

// buildChart();

// // This function is called when a dropdown menu item is selected
// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selDataset");
  
//   // Use the list of sample names to populate the select options
//   const url = "http://localhost:5000/api/Myanmar_Records";
//   d3.json(url).then((data) => {
//     var sampleDates = data.dates;
//     sampleDates.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });
  
//     // Use the first sample from the list to build the initial plots
//     const firstSample = sampleNames[0];
//     buildCharts(firstSample);
//     buildMetadata(firstSample);
//   });
//   }
  
//   function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
//   }
  
    
//   // Initialize the dashboard
//   init();