// static/scripts/3-hbnb.js
$(document).ready(function () {
    const apiUrl = 'http://0.0.0.0:5001/api/v1/places_search/';
    $.ajax({
        type: 'POST',
        url: apiUrl,
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function (data) {
            // Loop through the result and create article tags
            data.forEach(function (place) {
                const article = $('<article>');

                // Add other logic to construct the article content based on place data

                // Append the article to the section.places
                $('section.places').append(article);
            });
        },
        error: function (error) {
            console.error('Error fetching places:', error);
        }
    });
});
