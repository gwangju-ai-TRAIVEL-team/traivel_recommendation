$(function() {
    // 하단 롤링배너
    
    $("#arrow_right").click(function(){
        $(".picture").eq(0).insertAfter(".picture:last-child");
    });

    $("#arrow_left").click(function(){
        $(".picture").eq(-1).insertBefore(".picture:first-child");
    });

    // 롤링배너 클릭 시 클릭 효과

    $(".picture").click(function() {
        if ($(this).hasClass("clicked") == false) {
            $(this).addClass("clicked");
            $(this).css({"border": "5px solid blue"});
        }
        else {
            $(this).removeClass("clicked");
            $(this).css({"border": "1px solid blue"});
        };
    });

    // 키워드 클릭 시 클릭 효과

    $(".key_btn").click(function() {
        if ($(this).hasClass("btnclicked") == false) {
            $(this).addClass("btnclicked");
            $(this).css({"border": "2px solid black"});
        }
        else {
            $(this).removeClass("btnclicked");
            $(this).css({"border": "1px solid gray"});
        };
    });

    // 롤링배너 클릭 시 value값 변경

    $("#picture1").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture1").val("계곡");
        }
        else {
            $("#inputpicture1").val("");
        }
    })

    $("#picture2").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture2").val("공원");
        }
        else {
            $("#inputpicture2").val("");
        }
    })

    $("#picture3").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture3").val("기차");
        }
        else {
            $("#inputpicture3").val("");
        }
    })

    $("#picture4").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture4").val("낚시");
        }
        else {
            $("#inputpicture4").val("");
        }
    })

    $("#picture5").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture5").val("농촌");
        }
        else {
            $("#inputpicture5").val("");
        }
    })

    $("#picture6").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture6").val("바다");
        }
        else {
            $("#inputpicture6").val("");
        }
    })

    $("#picture7").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture7").val("사찰");
        }
        else {
            $("#inputpicture7").val("");
        }
    })

    $("#picture8").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture8").val("산");
        }
        else {
            $("#inputpicture8").val("");
        }
    })

    $("#picture9").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture9").val("산책");
        }
        else {
            $("#inputpicture9").val("");
        }
    })

    $("#picture10").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture10").val("섬");
        }
        else {
            $("#inputpicture10").val("");
        }
    })

    $("#picture11").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture12").val("스파");
        }
        else {
            $("#inputpicture12").val("");
        }
    })

    $("#picture12").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture12").val("시장");
        }
        else {
            $("#inputpicture12").val("");
        }
    })

    $("#picture13").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture13").val("폭포");
        }
        else {
            $("#inputpicture13").val("");
        }
    })

    $("#picture14").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture14").val("해주욕장");
        }
        else {
            $("#inputpicture14").val("");
        }
    })


    // 키워드 클릭 시 value값 변경

    $("#keyword1").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword1").val($(this).text());
        }
        else {
            $("#inputkeyword1").val("");
        }
    })

    $("#keyword2").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword2").val($(this).text());
        }
        else {
            $("#inputkeyword2").val("");
        }
    })

    $("#keyword3").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword3").val($(this).text());
        }
        else {
            $("#inputkeyword3").val("");
        }
    })

    $("#keyword4").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword4").val($(this).text());
        }
        else {
            $("#inputkeyword4").val("");
        }
    })

    $("#keyword5").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword5").val($(this).text());
        }
        else {
            $("#inputkeyword5").val("");
        }
    })

    $("#keyword6").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword6").val($(this).text());
        }
        else {
            $("#inputkeyword6").val("");
        }
    })

    $("#keyword7").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword7").val($(this).text());}
        else {
            $("#inputkeyword7").val("");
        }
    })
    
    $("#keyword8").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword8").val($(this).text());
        }
        else {
            $("#inputkeyword8").val("");
        }
    })

    $("#keyword9").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword9").val($(this).text());
        }
        else {
            $("#inputkeyword9").val("");
        }
    })

    $("#keyword10").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword10").val($(this).text());
        }
        else {
            $("#inputkeyword10").val("");
        }
    })

    $("#keyword11").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword11").val($(this).text());
        }
        else {
            $("#inputkeyword11").val("");
        }
    })

    $("#keyword12").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword12").val($(this).text());
        }
        else {
            $("#inputkeyword12").val("");
        }
    })

    $("#keyword13").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword13").val($(this).text());
        }
        else {
            $("#inputkeyword13").val("");
        }
    })

    $("#keyword14").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword14").val($(this).text());
        }
        else {
            $("#inputkeyword14").val("");
        }
    })

    
    $("#keyword15").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword15").val($(this).text());
        }
        else {
            $("#inputkeyword15").val("");
        }
    })

    $("#keyword16").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword16").val($(this).text());
        }
        else {
            $("#inputkeyword16").val("");
        }
    })

    $("#keyword17").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword17").val($(this).text());
        }
        else {
            $("#inputkeyword17").val("");
        }
    })

    $("#keyword18").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword18").val($(this).text());
        }
        else {
            $("#inputkeyword18").val("");
        }
    })

    $("#keyword19").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword19").val($(this).text());
        }
        else {
            $("#inputkeyword19").val("");
        }
    })

    // 결과화면으로 이동하는 애니메이션

    $("#result").click(function() {

        $("#inputbox").addClass("recommendsidebox");
        $(".footer_box").addClass("recommendfooterbox");
        $("#resultbox").addClass("recommend");

        $("#travel_region").css("opacity", "0");
        $("#keyword").css("opacity", "0");
        $(".picture_box").css("opacity", "0");
        $("#resultbox").css("opacity", "0");

        $("#travel_region").addClass("start");
        $("#keyword").addClass("start");
        $(".picture_box").addClass("startbelow");
        $("#resultbox").addClass("startbelow");

        // 결과화면 생성
        $.ajax({
            type : 'get',
            url : 'http://127.0.0.1:8000/main/api/recommend/',
            dataType : 'html',
            success : function(data) {
                setTimeout(function() {
                    $(".recommendsidebox").html(data)
                }, 500)
            }
        });

    })
})





