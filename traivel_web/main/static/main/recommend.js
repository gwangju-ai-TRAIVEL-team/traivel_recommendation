$(function() {

    $(".choose").click(function() {
        $("#chosenList").append("<li  class='listitem'><p>"+ $(this).attr("value")+"</p><p class='delete'>X</p></li>");
        $(".delete").click(function() {
            sessionStorage.removeItem("marker"+$(this).prev().text());
            $(this).closest("li").remove();     
        })

        $.ajax({
            url:'http://127.0.0.1:8000/main/api/addrdesc/' + $(this).attr("name"),
            type: 'get',
            success: function(data) {
                for(var i=0; i<data.length; i++){
                    console.log(data[i])
        
                    var marker=rec_makrer(data[i]['latitude'], data[i]['longitude'],data[i])
                    console.log(marker)
                    }
            },
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