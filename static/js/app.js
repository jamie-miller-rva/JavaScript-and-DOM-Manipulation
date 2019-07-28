// from data.js
var tableData = data;

// Get a reference to the table body 
var tbody = d3.select("#ufo-table");

// Console.log the ufo data from data.js
console.log(data);
 
// Loop Through `data` and console.log each ufo report object
// Use Arrow Functions to shorten script
data.forEach((ufoReport) => {
    // Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each ufo report value
    Object.entries(ufoReport).forEach(([key, value]) => {
      // Use d3 to append 1 cell for each ufo report value (City, State, Country, Shape, Duration, Comments)
      var cell = row.append("td");
      // Use d3 to update each cell's text with ufo report values (City, State, Country, Shape, Duration, Comments)
      cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var datetimeField = d3.select("#datetime");

// Use the `on` function in d3 to attach an event to the button being clicked
// Define an anonymous ('handlerClick') function inline
button.on("click", function() {
  console.log("A datetime was entered!");
  // Use d3 to console.log the object that dispatched the event  
  console.log(d3.event.target);
});

// Use the 'on' function in d3 to trigger a change event when new text is entered in the Input field
datetimeField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
  });