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
});
