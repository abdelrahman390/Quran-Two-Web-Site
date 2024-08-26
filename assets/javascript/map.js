const SaveLocationButton = document.querySelector('#SaveLocationButton');

// save selected location on map and put it in sessionStorage
SaveLocationButton.onclick = () => {
    window.location.href = `${sessionStorage.getItem('currentNewRegistrationPageName')}`
}

// send longitude && latitude to map to zoom in selected government but if user didn`t select government it will zoom in all country
if (sessionStorage.getItem('location') !== null) {
    map(JSON.parse(sessionStorage.getItem('location'))['longitude'], JSON.parse(sessionStorage.getItem('location'))['latitude'])
} else {
    map()
}

function map(Latitude = 24.16009, Longitude = 45.06283) {
    let map = ''
    if (Latitude === 24.16009 && Longitude === 45.06283) {
        map = L.map("map").setView([Latitude, Longitude], 5);
    } else {
        map = L.map("map").setView([Latitude, Longitude], 12);
    }

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
    }).addTo(map);

    var myIcon = L.icon({
        iconUrl: '../../assets/javascript/map/images/mosque-marker.png',
        iconSize: [50, 80],
        iconAnchor: [43, 75]
    });

    var marker = new L.marker([Latitude, Longitude], {
        icon: myIcon,
        draggable: true,
        autoPan: true,
    }).addTo(map);

    marker.on("dragend", function (e) {
        var coord = String(marker.getLatLng()).split(",");

        var lat = coord[0].split("(");
        var long = coord[1].split(")");
        let location = lat[1] + long[0];

        sessionStorage.setItem([`${(sessionStorage.getItem('currentNewRegistrationPageName').split('/').pop().split('.')[0]).split('-')[3]}-location`], location)
    });


}