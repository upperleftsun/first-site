// When the document is ready
(function () {
    // Retrieve from DOM
    var dropdown = document.querySelector('#selectField');
    
    // Listen for changes
    dropdown.addEventListener('change', function (event) {
        // If user selected `Marketing`, this will be 'Marketing'
        var selectedOption = event.target.value;
        
        // Find other table rows (except the filter rows)
        var otherRows = document.querySelectorAll("tr[position].selected:not([position=" + selectedOption + "])");
        otherRows.forEach(function (row) {
            // Remove other rows that have 'selected' class
            if (row.classList.contains('selected'))
                row.classList.remove('selected');
        });

        // If the user selects `All`, then do nothing
        if (selectedOption == "All") return;

        // Find correlated table rows
        var filterRows = document.querySelectorAll("tr[position=" + selectedOption + "]");
        filterRows.forEach(function (row) {
            // Add 'selected' class to each
            row.classList.add("selected");
        });
    });
})();
