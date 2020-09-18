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

function create_marker(lat,lon,data) {
    
    //지도에 마커를 생성하고 표시
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, lon),
        map: map //마커를 표시할 지도 객체
        });
    marker.setMap(map);

   // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = '<div class="wrap">' + 
                    '    <div class="info">' + 
                    '        <div class="title">' + data['name'] + 
                    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
                    '        </div>' + 
                    '        <div class="body">' + 
                    '            <div class="img">' +
                    '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="50">' +
                    '           </div>' + 
                    '            <div class="desc">' + 
                    '                <div class="ellipsis">' + data['address'] + '</div>' + 
                    '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">리뷰</a></div>' + 
                    '            </div>' + 
                    '        </div>' + 
                    '    </div>' +    
                    '</div>';
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);  
    });


    
}