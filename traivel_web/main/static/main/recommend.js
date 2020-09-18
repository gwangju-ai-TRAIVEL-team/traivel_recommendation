$(function() {

    $(".choose").click(function() {
        $("#chosenList").append("<li>"+ $(this).attr("value")+"</li>");
        function rec_place(data) {
            for(var i=0; i<data.length; i++){
                console.log(data[i])

                var marker=rec_makrer(data[i]['latitude'], data[i]['longitude'],data[i])
                console.log(marker)
            }
        }

        // 사용자가 선택한 여행지에 대한 정보 가져오기
        $.ajax({
            url:'http://127.0.0.1:8000/main/api/addrdesc/' + $(this).attr("name"),
            type:'get',
            success:  rec_place,
            error: function (request, status, error){   
                console.log("error:" + status);   
            }  
        }); 
    })
    

    $("#choosebutton").click(function() {
        $("#inputbox").removeClass("recommendsidebox");
        $(".footer_box").removeClass("recommendfooterbox");
        $("#resultbox").removeClass("recommend");

        $("#travel_region").css("opacity", "1");
        $("#keyword").css("opacity", "1");
        $(".picture_box").css("opacity", "1");
        $("#resultbox").css("opacity", "1");

        $("#travel_region").removeClass("start");
        $("#keyword").removeClass("start");
        $(".picture_box").removeClass("startbelow");
        $("#resultbox").removeClass("startbelow");

        $("#inputbox").addClass("end");
        $(".picture_box").addClass("endbelow");
        $("#resultbox").addClass("endbelow");

        $.ajax({
            type : 'get',
            url : 'http://127.0.0.1:8000/main/api/mainajax/',
            dataType : 'html',
            success : function(data) {
                setTimeout(function() {
                    $("#inputbox").html(data)
                }, 500)
            }
        });

    })

    
})