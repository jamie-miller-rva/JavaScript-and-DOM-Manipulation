// The UFO dataset `data.js` is co-located with `app.js` in the  "...static/js" folder
var tableData = data;

// Get a reference to the table body from index.html (id='ufo-table)
var tbody = d3.select("#ufo-table");

// Console.log all entries for ufo data from data.js
console.log(data);

// =======================================================================================================
// Direction and Guidance: Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to the web page and then adds new rows of data for each UFO sighting.
// =======================================================================================================

// Loop Through data
// Console.log each ufo report object
// Use `forEach` to automatically iterate (loop) through each item 
// Call the anonymous inline function for that item
// Update each cell in the table with each value
// Syntactic Sugar: Use Arrow Functions ( => ) to shorten the script

data.forEach((ufoReport) => {
    // Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each ufo report value
    Object.entries(ufoReport).forEach(([key, value]) => {
      // Use d3 to append 1 cell `td` for each ufo report value (Date, City, State, Country, Shape, Duration, Comments)
      var cell = row.append("td");
      // Use d3 to update each cell's text with ufo report values (Date, City, State, Country, Shape, Duration, Comments)
      cell.text(value);
    });
});

//=========================================================================================================
// Direciton and Guidance: Use a date form in the HTML document and write JavaScript code that will 
// listen for events and search through the `datetime` column to find rows that match user input.//
// ========================================================================================================

// Get a reference to the button on the page with the id property set to `filter-btn`
var filterButton = d3.select("#filter-btn");

// Getting a reference to the input elements on the page with the id property set to 'datetime-1' and 'datetime-2'
var startDatetimeField = d3.select("#datetime-1");

// Use the `on` function in d3 to attach an event to the button being clicked
// Define an anonymous function - inline
filterButton.on("click", function() {

  // prevent page from loading
  d3.event.preventDefault();

  // clear previous table results
  var currentData = d3.select("tbody").selectAll("tr");
  currentData.remove();

  // select the search term
  var searchDate = d3.select('#datetime').node().value;
  var searchState = d3.select('#state').node().value;
  console.log("A new Search Date was entered!");
  console.log(searchDate);
  console.log(searchState);

});

// Create a custom filtering function
function filterTable(ufoReport) {
  return ufoReport.datetime === '1/12/2010';
}

// Note: filter() uses custom function as its argument
var reducedUFOReport = data.filter(filterTable);

//Test
console.log(reducedUFOReport);

 
  
  
  
/*  data.map((ufoReport) => {
  // datetime is the first entry for each ufoReport
  // For datetime > newStartDate update each cell's text in tbody:
    .datetime > newStartDate; 
    // Use d3 to append one table row `tr` for each ufo report object with date > newText
    var row = tbody.append("tr");
  // Use `Object.entries` to console.log each ufo report object with date > newText
  Object.entries(ufoReport).forEach(([key, value]) => {
    // Use d3 to append 1 cell for each ufo report value (City, State, Country, Shape, Duration, Comments)
    var cell = row.append("td");
    // Use d3 to update each cell's text with ufo report values (City, State, Country, Shape, Duration, Comments)
    cell.text(value);
  }); 
  });
};
*/

