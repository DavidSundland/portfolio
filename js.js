function hoverHighlight() {
    $(".projectPic").hover(
        function() {$(this).css("opacity",1); $(this).css("border", "none")},
        function() {$(this).css("opacity",.9); $(this).css("border", "2px solid #555")}
    );
}

function skillsHighlight() {
    let startColor = $("#skills").css("background-color");
    $("figure").hover(
        function() {$(this).css("opacity",1); $(this).css("background-color", "white"); $(this).find("figcaption").css("font-weight", 800)},
        function() {$(this).css("opacity",.8); $(this).css("background-color", startColor); $(this).find("figcaption").css("font-weight", 400)}
    );
}

hoverHighlight();
skillsHighlight();
