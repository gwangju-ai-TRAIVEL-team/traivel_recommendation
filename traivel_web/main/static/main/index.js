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
            $("#inputpicture1").val("picture1");
        }
        else {
            $("#inputpicture1").val("");
        }
    })

    $("#picture2").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture2").val("picture2");
        }
        else {
            $("#inputpicture2").val("");
        }
    })

    $("#picture3").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture3").val("picture3");
        }
        else {
            $("#inputpicture3").val("");
        }
    })

    $("#picture4").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture4").val("picture4");
        }
        else {
            $("#inputpicture4").val("");
        }
    })

    $("#picture5").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture5").val("picture5");
        }
        else {
            $("#inputpicture5").val("");
        }
    })

    $("#picture6").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture6").val("picture6");
        }
        else {
            $("#inputpicture6").val("");
        }
    })

    $("#picture7").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture7").val("picture7");
        }
        else {
            $("#inputpicture7").val("");
        }
    })

    $("#picture8").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture8").val("picture8");
        }
        else {
            $("#inputpicture8").val("");
        }
    })

    $("#picture9").click(function() {
        if ($(this).hasClass("clicked")) {
            $("#inputpicture9").val("picture9");
        }
        else {
            $("#inputpicture9").val("");
        }
    })


    // 키워드 클릭 시 value값 변경

    $("#keyword1").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword1").val("keyword1");
        }
        else {
            $("#inputkeyword1").val("");
        }
    })

    $("#keyword2").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword2").val("keyword2");
        }
        else {
            $("#inputkeyword2").val("");
        }
    })

    $("#keyword3").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword3").val("keyword3");
        }
        else {
            $("#inputkeyword3").val("");
        }
    })

    $("#keyword4").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword4").val("keyword4");
        }
        else {
            $("#inputkeyword4").val("");
        }
    })

    $("#keyword5").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword5").val("keyword5");
        }
        else {
            $("#inputkeyword5").val("");
        }
    })

    $("#keyword6").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword6").val("keyword6");
        }
        else {
            $("#inputkeyword6").val("");
        }
    })

    $("#keyword7").click(function() {
        if ($(this).hasClass("btnclicked")) {
            $("#inputkeyword7").val("keyword7");
        }
        else {
            $("#inputkeyword7").val("");
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





