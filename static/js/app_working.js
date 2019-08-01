// The UFO dataset `data.js` is co-located with `app.js` in the  "...static/js" folder
var tableData = data;

// Get a reference to the table body from index.html (id='ufo-table)
var tbody = d3.select("#tbody");

// Console.log all entries for ufo data from data.js
console.log(data);

// =======================================================================================================
// Direction and Guidance: Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to the web page and then adds new rows of data for each UFO sighting.
// =======================================================================================================

// Use `forEach` to automatically iterate (loop) through each item in the data array
// Call the anonymous inline function for each item
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
var filterButtonDate = d3.select("#filter-btn-date");

// Getting a reference to the input elements on the page with the id property set to 'datetime-1'
var searchDate = d3.select("#datetime-1");

// Use an event handler (the `on` function in d3) to attach a click event to the 'Filter Table by Date' button
// Define with an anonymous function - inline
filterButtonDate.on("click", function(){
    // select and console.log the searchDate
    var searchDateValue = searchDate.property("value");
    console.log("New Search Date");
    console.log(searchDateValue);

    // Create a custom filtering function for searchDate and searchState
    function filterTableDate(ufoReport) {
        return ufoReport.datetime == searchDateValue;
    }
    // If the searchDate is not blank filter data using the filterTableDate function
    if (searchDateValue != ''){
        var refinedUFOReportDate = tableData.filter(filterTableDate);
        // log resutls to the console
        console.log(refinedUFOReportDate);
    } else{
        // if the searchDate is blank no filter is applied
        refinedUFOReportDate = tableData;
    };

    // clear table    
    tbody.html(""); 

    // Loop through the refinedUFOreport
    refinedUFOReportDate.forEach((ufoReport) => {
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
});

//=========================================================================================================
// Direciton and Guidance: Use a state form in the HTML document and write JavaScript code that will 
// listen for events and search through the `state` column to find rows that match user input.//
// ========================================================================================================

// Get a reference to the button on the page with the id property set to `filter-btn-state`
var filterButtonState = d3.select("#filter-btn-state");

// Getting a reference to the input elements on the page with the id property set to 'state'      
var searchState = d3.select('#state-1');

// Use an event handler (the `on` function in d3) to attach a click event to the 'Filter Table by State' button
// Define with an anonymous function - inline
filterButtonState.on("click", function(){
    // select and console.log the searchState
    var searchStateValue = searchState.property("value");
    console.log("New State");
    console.log(searchStateValue);

    // Create a custom filtering function for searchState
    function filterTableState(ufoReport) {
        // select the searchState
        return ufoReport.state == searchStateValue;
    }
    // If the searchState is not blank filter data using the filterTableState function
    if (searchStateValue != ''){
        var refinedUFOReportState = tableData.filter(filterTableState);
        // log resutls to the console
        console.log(refinedUFOReportState);
    } else{
        // if the searchState is blank no filter is applied
        refinedUFOReportState = tableData;
    };

    // clear table    
    tbody.html(""); 

    // Loop through the refinedUFOreport
    refinedUFOReportState.forEach((ufoReport) => {
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
});