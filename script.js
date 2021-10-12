$(".questions").hover(function() {
    $(".questions").css("transform", "scale(1.3, 1.3)");
});
$(".questions").mouseleave(function() {
    $(".questions").css("transform", "scale(1, 1)");
});

$(".animals").hover(function() {
    $(".animals").css("background-color", "");
    $(".animals").css("color", "");
    $(".animals").css("border", "orange dashed 10px ");
});
$(".animals").mouseleave(function() {
    $(".animals").css("background-color", "");
    $(".animals").css("color", "");
    $(".animals").css("border", "");
});





$("button").click(function() {
    let interests = $(".weekend").val();
    let moods = $(".mood").val();

    if (interests === "Party" && moods === "Cheerful" || interests === "party" && moods === "cheerful") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a golden retreiver!");
        $(".dogs").attr("src", "https://i.imgur.com/yEvTzPe.gif");
        $(".dogs").show();
    } else if (interests === "Sleep" && moods === "Cheerful" || interests === "sleep" && moods === "cheerful" || interests === "SLEEP" && moods === "CHEERFUL") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a Greyhound!");
        $(".dogs").attr("src", "https://media.tenor.com/images/851ae398d6da974de11fb9df5505bbc4/tenor.gif");
        $(".dogs").show();
    } else if (interests === "Party" && moods === "Whimsical" || interests === "party" && moods === "whimsical" || interests === "PARTY" && moods === "WHIMSICAL") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a Siberian Husky!");
        $(".dogs").attr("src", "https://64.media.tumblr.com/f0b56f290034d015e12a7ae4d8ceff73/tumblr_p31q52SA9Y1tlb56zo1_400.gifv");
        $(".dogs").show();
    } else if (interests === "Sleep" && moods === "Whimsical" || interests === "sleep" && moods === "whimsical" || interests === "SLEEP" && moods === "WHIMSICAL") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a Shiba Inu!");
        $(".dogs").attr("src", "https://i.pinimg.com/originals/74/21/bd/7421bd2ca92f6f0139d0bbd38d1c22fb.gif");
        $(".dogs").show();
    }
});