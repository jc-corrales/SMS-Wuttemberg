let map;
let directionsService;
let directionsRenderer;
let geocoder;

function initMap()
{
    map = new google.maps.Map(document.getElementById('map'),
    {
        center: {lat: 4.66421, lng: -74.07861},
        zoom: 16
    });
}