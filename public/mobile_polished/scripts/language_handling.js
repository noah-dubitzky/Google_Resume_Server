$(document).ready(function() {
    // Initialize a global language variable
    let globalLanguage = '';

    // Function to update the global language based on the yellow <a> element
    function updateLanguage() {
        $('p a').each(function() {
            if ($(this).css('color') === 'rgb(255, 255, 0)') { // Yellow
                globalLanguage = $(this).attr('id');
            }
        });
        console.log('Global Language:', globalLanguage); // For debugging
    }

    // Select the <p> element
    $('#language').on('click', function() {
        // Find all <a> elements inside the clicked <p> element
        const anchors = $(this).find('a');

        // Toggle the colors of the <a> elements
        anchors.each(function() {

            if ($(this).css('color') === 'rgb(105, 105, 105)') { // Yellow
                $(this).css('color', 'rgb(233, 154, 28)');
            } else {
                $(this).css('color', 'rgb(105, 105, 105)');
            }
        });

        // Update the global language
        updateLanguage();
    });

    // Initial language setup
    updateLanguage();
});
