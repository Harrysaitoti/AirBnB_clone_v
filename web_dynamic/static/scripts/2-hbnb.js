// static/scripts/2-hbnb.js
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

    const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(apiUrl, function (data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});
