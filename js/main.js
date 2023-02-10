var vid = $('.vidchaVideo')[0];
var vidDuration = vid.duration;

var chapterCount = $(".vidChapter").children().length; 


$('.vidchaVideo').on("timeupdate", function() {

    for (var i = 1; i <= chapterCount; i++) { 

      var start = $(".vidChapter>*:nth-child(" + i + ")").data("start"); 
      var end;


      if(i+1 > chapterCount) {
        end = vidDuration;
      } else {
        var nextChapter = i+1;
        end = $(".vidChapter>*:nth-child(" + nextChapter + ")").data("start");
      }

     
      if (vid.currentTime >= start && vid.currentTime < end) {
        setActive(i);
      }

    }
})


$(".vidChapter> *").click(function() {
    var clickedChapter = $(this).index() + 1;

    setActive(clickedChapter);
    skipTime($(this).data("start"));
});


function setActive(cha) {
    $(".vidChapter>*").removeClass("active"); 
    $(".vidChapter>*:nth-child(" + cha + ")").addClass("active"); 
}


function skipTime(time) {
    vid.play();
    vid.pause();
    vid.currentTime = time;
    vid.play();
};
