/* // 위치 정보를 가져오는 함수
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// 위치 정보를 성공적으로 가져왔을 때 실행되는 함수
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // 위치 정보를 이용하여 지도에 마커 표시
    showMap(latitude, longitude);
}

// 위치 정보를 가져오는데 실패했을 때 실행되는 함수
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("사용자가 위치 정보 제공에 동의하지 않았습니다.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("위치 정보를 사용할 수 없습니다.");
            break;
        case error.TIMEOUT:
            alert("위치 정보를 가져오는데 시간이 초과되었습니다.");
            break;
        case error.UNKNOWN_ERROR:
            alert("알 수 없는 오류가 발생했습니다.");
            break;
    }
}

// 지도에 위치를 표시하는 함수 (Google Maps API를 사용)
function showMap(latitude, longitude) {
    const mapElement = document.getElementById('map');

    // Google Maps API를 이용하여 위치 정보를 표시
    const map = new google.maps.Map(mapElement, {
        center: {lat: latitude, lng: longitude},
        zoom: 15
    }); 

    // 마커 추가
    const marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map,
        title: '현재 위치'
    });
} */

// 위치 정보를 가져오는 함수
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// 위치 정보를 성공적으로 가져왔을 때 실행되는 함수
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // 위치 정보를 이용하여 지도에 마커 표시
    showMap(latitude, longitude);
}

// 위치 정보를 가져오는데 실패했을 때 실행되는 함수
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("사용자가 위치 정보 제공에 동의하지 않았습니다.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("위치 정보를 사용할 수 없습니다.");
            break;
        case error.TIMEOUT:
            alert("위치 정보를 가져오는데 시간이 초과되었습니다.");
            break;
        case error.UNKNOWN_ERROR:
            alert("알 수 없는 오류가 발생했습니다.");
            break;
    }
}

// Leaflet을 사용하여 지도에 위치를 표시하는 함수
function showMap(latitude, longitude) {
    const map = L.map('map').setView([latitude, longitude], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('현재 위치')
        .openPopup();
}