function hoverHighlight() {
    $(".projectPic").hover(
        function() {$(this).css("opacity",1); $(this).css("border", "none")},
        function() {$(this).css("opacity",.9); $(this).css("border", "4px outset #FFC49E")}
    );
}

hoverHighlight();
