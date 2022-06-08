const timeSlot = document.getElementsByClassName("schedule");
let hour = parseInt(moment().format('H'));
var today = moment().format('MMMM Do, YYYY');
$('#currentDay').text("Today is " + today);

Array.from(timeSlot).forEach(schedule => {
    let 
        scheduleIdString = schedule.id,
        scheduleHour;
    if (scheduleIdString) {
        scheduleHour = parseInt(scheduleIdString);
    }
    if (scheduleHour) {
        if (hour == scheduleHour) {
           $(schedule).addClass("present");
        } else if (hour < scheduleHour){
            $(schedule).addClass("future")
        } else {
            $(schedule).addClass("past")
        }
    }
})

function setCurrent(element, current) {
    element.style.classList.add = current;
}

function setFuture() {
    $('.schedule').addClass("future");
}

function setPast() {
    $('.col-10').addClass("past");
}