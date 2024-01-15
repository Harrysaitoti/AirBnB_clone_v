$(document).ready(function () {
    const amenityIds = [];

    $('input[type="checkbox"]').change(function () {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).prop('checked')) {
            amenityIds.push(amenityId);
        } else {
            const index = amenityIds.indexOf(amenityId);
            if (index !== -1) {
                amenityIds.splice(index, 1);
            }
        }

        // Update the h4 tag inside the div Amenities
        const amenitiesList = amenityIds.map(id => $('#' + id).data('name')).join(', ');
        $('#amenities h4').text(amenitiesList);
    });

    $('#searchButton').click(function () {
        // Make a new POST request to places_search with the list of Amenities checked
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: amenityIds }),
            success: function (data) {
                // Handle the success response and update the places section accordingly
                // You need to implement this part based on your specific requirements
                console.log(data);
            },
            error: function (error) {
                // Handle the error response
                console.error(error);
            }
        });
    });
});
