$(function() {
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
})