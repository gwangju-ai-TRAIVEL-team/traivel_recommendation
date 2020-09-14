alert("map")

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(35.72770, 127.074939), // 지도의 중심좌표
        level: 11, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    }; 

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption); 
//지도에 마커를 생성하고 표시
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(35.72770, 127.074939),
    map: map //마커를 표시할 지도 객체
    });
marker.setMap(map);

var iwContent = '<div style="padding:5px;">출발! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content : iwContent 
    });
                        
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 

// 37.56551, 126.97795

