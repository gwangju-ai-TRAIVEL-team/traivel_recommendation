$(function() {
    // 하단 롤링배너
    alert("click")
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
            $(this).css({"border": "1px solid blue"})
        }
    });

})