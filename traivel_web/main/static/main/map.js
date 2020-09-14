alert("map")

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    }; 

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption); 

function setCenter(region){
    
    var region_dict = {}
    region_dict['seoul'] = [37.5665, 126.9780],
    region_dict['incheon'] = [37.4563, 126.7052],
    region_dict['gwangju'] = [35.1595, 126.8526],
    region_dict['daegu'] = [35.8714, 128.6014],
    region_dict['ulsan'] = [35.5384, 129.3114],
    region_dict['daejeon'] = [36.3504, 127.3845],
    region_dict['busan'] = [35.1796, 129.0756],
    region_dict['gyeonggi'] = [37.4138, 127.5183],
    region_dict['gangwon'] = [37.8228, 128.1555],
    region_dict['chungcheong_south'] = [36.5184, 126.8000],
    region_dict['chungcheong_north'] = [36.8000, 127.7000],
    region_dict['gyeongsang_south'] = [35.4606, 128.2132],
    region_dict['gyeongsang_north'] = [36.4919, 128.8889],
    region_dict['jeolla_south'] = [34.8679, 126.9910],
    region_dict['jeolla_north'] = [35.7175, 127.1530],
    region_dict['sejong'] = [36.5010, 127.2460],
    region_dict['jeju'] = [33.4890, 126.4983]
    console.log(region_dict)

    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new kakao.maps.LatLng(region_dict[region][0], region_dict[region][1]);
    
    
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
}

//지도에 마커를 생성하고 표시
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.487935, 126.857758),
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


