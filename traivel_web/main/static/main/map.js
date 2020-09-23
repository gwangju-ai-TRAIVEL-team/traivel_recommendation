var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    }; 

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption); 

function setCenter(region){
    console.log(region);
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
                    '               <div class="ellipsis">' + data['address'] + '</div>' + 
                    '               <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">리뷰</a></div>' + 
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

//추천장소 마커 생성
function rec_makrer(lat, lon, data){
    var positions = [
        { 
            latlng: new kakao.maps.LatLng(lat, lon)
        },
    ];
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

    for (var i = 0; i < positions.length; i ++) {
        
        var imageSize = new kakao.maps.Size(24, 35); 
        
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            image : markerImage // 마커 이미지 
        });
        sessionStorage.setItem('marker'+[data["name"]],[lat,lon]);

    }
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
                    '               <div class="ellipsis">' + data['address'] + '</div>' + 
                    '               <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">리뷰</a></div>' + 
                    '            </div>' + 
                    '        </div>' + 
                    '    </div>' +    
                    '</div>';
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
    });

    kakao.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);  
    });
}

function select_marker(){ 
    alert("지도를 마우스로 클릭하면 선 그리기가 시작되고 오른쪽 마우스를 클릭하면 선 그리기가 종료됩니다")
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    var location = []

    for(var i=0; i<sessionStorage.length; i++){
        var loclist=[]
        var loc = sessionStorage.getItem(sessionStorage.key([i]))
        var lat = loc.split(",")[0]
        var lon = loc.split(",")[1]
        loclist.push(lat,lon)
        location.push(loclist)
    }

    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    for (var i = 0; i < location.length; i++) {
        var imageSize = new kakao.maps.Size(24, 35); 
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(location[i][0], location[i][1]), // 마커를 표시할 위치
            image : markerImage, // 마커 이미지 
        });
    } 

    var drawingFlag = false; 
    var moveLine; 
    var clickLine 
    var distanceOverlay; 
    var dots = {}; 

    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

        var clickPosition = mouseEvent.latLng;

        if (!drawingFlag) {

            drawingFlag = true;
            
            deleteClickLine();
            deleteDistnce();
            deleteCircleDot();
        
            clickLine = new kakao.maps.Polyline({
                map: map, 
                path: [clickPosition], 
                strokeWeight: 5, 
                strokeColor: '#db4040', 
                strokeOpacity: 0.8, 
                strokeStyle: 'solid' 
            });
            
            moveLine = new kakao.maps.Polyline({
                strokeWeight: 5, 
                strokeColor: '#db4040', 
                strokeOpacity: 0.5, 
                strokeStyle: 'solid' 
            });
        
            displayCircleDot(clickPosition, 0);

                
        } else { 
            var path = clickLine.getPath();
            path.push(clickPosition);

            clickLine.setPath(path);

            var distance = Math.round(clickLine.getLength());
            displayCircleDot(clickPosition, distance);
        }
    });
        
    kakao.maps.event.addListener(map, 'mousemove', function (mouseEvent) {

        if (drawingFlag){
            var mousePosition = mouseEvent.latLng; 

            var path = clickLine.getPath();
            
            var movepath = [path[path.length-1], mousePosition];
            moveLine.setPath(movepath);    
            moveLine.setMap(map);
            
            var distance = Math.round(clickLine.getLength() + moveLine.getLength()), // 선의 총 거리를 계산합니다
                content = '<div class="dotOverlay distanceInfo">총거리 <span class="number">' + distance + '</span>m</div>'; // 커스텀오버레이에 추가될 내용입니다
            
            showDistance(content, mousePosition);   
        }             
    });                 

    kakao.maps.event.addListener(map, 'rightclick', function (mouseEvent) {

        if (drawingFlag) {
            
            moveLine.setMap(null);
            moveLine = null;  
            
            var path = clickLine.getPath();
        
            if (path.length > 1) {

                if (dots[dots.length-1].distance) {
                    dots[dots.length-1].distance.setMap(null);
                    dots[dots.length-1].distance = null;    
                }

                var distance = Math.round(clickLine.getLength()), // 선의 총 거리를 계산합니다
                    content = getTimeHTML(distance); // 커스텀오버레이에 추가될 내용입니다
                    
                showDistance(content, path[path.length-1]);  
                
            } else {

                deleteClickLine();
                deleteCircleDot(); 
                deleteDistnce();

            }
            
            drawingFlag = false;          
        }  
    });    

    function deleteClickLine() {
        if (clickLine) {
            clickLine.setMap(null);    
            clickLine = null;        
        }
    }

    function showDistance(content, position) {
        
        if (distanceOverlay) {
            
            distanceOverlay.setPosition(position);
            distanceOverlay.setContent(content);
            
        } else { 
            
            distanceOverlay = new kakao.maps.CustomOverlay({
                map: map, 
                content: content,  
                position: position, 
                xAnchor: 0,
                yAnchor: 0,
                zIndex: 3  
            });      
        }
    }

    function deleteDistnce () {
        if (distanceOverlay) {
            distanceOverlay.setMap(null);
            distanceOverlay = null;
        }
    }

    function displayCircleDot(position, distance) {

        var circleOverlay = new kakao.maps.CustomOverlay({
            content: '<span class="dot"></span>',
            position: position,
            zIndex: 1
        });

        circleOverlay.setMap(map);

        if (distance > 0) {
            var distanceOverlay = new kakao.maps.CustomOverlay({
                content: '<div class="dotOverlay">거리 <span class="number">' + distance + '</span>m</div>',
                position: position,
                yAnchor: 1,
                zIndex: 2
            });

            distanceOverlay.setMap(map);
        }

        dots.push({circle:circleOverlay, distance: distanceOverlay});
    }

    function deleteCircleDot() {
        var i;

        for ( i = 0; i < dots.length; i++ ){
            if (dots[i].circle) { 
                dots[i].circle.setMap(null);
            }

            if (dots[i].distance) {
                dots[i].distance.setMap(null);
            }
        }

        dots = [];
    }


    function getTimeHTML(distance) {

        var walkkTime = distance / 67 | 0;
        var walkHour = '', walkMin = '';

        if (walkkTime > 60) {
            walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
        }
        walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'

        var bycicleTime = distance / 227 | 0;
        var bycicleHour = '', bycicleMin = '';

        if (bycicleTime > 60) {
            bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 '
        }
        bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분'

        var content = '<ul class="dotOverlay distanceInfo">';
        content += '    <li>';
        content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
        content += '    </li>';
        content += '    <li>';
        content += '        <span class="label">도보</span>' + walkHour + walkMin;
        content += '    </li>';
        content += '    <li>';
        content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
        content += '    </li>';
        content += '</ul>'

        return content;
    }



}




