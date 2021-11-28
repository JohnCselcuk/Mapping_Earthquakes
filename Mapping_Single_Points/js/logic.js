L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);
 L.circleMarker([34.0522, -118.2437]).addTo(map);
 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'