// Write your JavaScript code.

var map, infoWindow;
var defaultLocation = {lat: -43.537923, lng: 172.643018};
var markersArray = [];

function AlertName(name)
{
    alert('You clicked '+ name +"!");
}

function initMap()
{
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: defaultLocation
        });
        console.log('Zoom is: '+map.getZoom()); 
}


