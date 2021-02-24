
//VARIABLE FOR TIME
var today = moment().format('dddd, MMMM Do hh:mm A');
var now = moment().hour();

// TODAY
$('#currentDay').text(today);

$(function () {
    // LOAD DATA FROM LOCAL STORAGE
    $("#9hr .description").val(localStorage.getItem("9hr"));
    $("#10hr .description").val(localStorage.getItem("10hr"));
    $("#11hr .description").val(localStorage.getItem("11hr"));
    $("#12hr .description").val(localStorage.getItem("12hr"));
    $("#13hr .description").val(localStorage.getItem("13hr"));
    $("#14hr .description").val(localStorage.getItem("14hr"));
    $("#15hr .description").val(localStorage.getItem("15hr"));
    $("#16hr .description").val(localStorage.getItem("16hr"));
    $("#17hr .description").val(localStorage.getItem("17hr"));
    
    // LISTENER AND SAVE TEXT IN LOCAL STORAGE
    $('.saveBtn').on('click', function (){
        console.log(this);
        var text = $.trim(
            $(this).siblings(".description").val()
        );
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
})
function updateColors() {
    // LOOP TIMEBLOCKS
    $(".description").each(function () {
        var pTime = 0
        var pTime = parseInt(
            $(this).parent().attr("id").split("hr").map(Number));
    //resolved NaN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            console.log(pTime, now);

        //CHECK TIME AND COLOR FOR PAST PRESENT FUTURE
        if (pTime < now) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (pTime === now) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
updateColors();
});