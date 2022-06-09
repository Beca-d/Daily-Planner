// Getting variables to set date and style based on time
const timeSlot = document.getElementsByClassName("schedule");
let hour = parseInt(moment().format('H'));
var today = moment().format('MMMM Do, YYYY');
$('#currentDay').text("Today is " + today);

//Conditional statement to set background colour of time slot based on current hour
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
        } else if (hour < scheduleHour) {
            $(schedule).addClass("future")
        } else {
            $(schedule).addClass("past")
        }
    }
});

// Saving input text to local storage
  function save_data(e){
    var number = $(e).data('num');
    var input = document.getElementById('textArea' + number).value;
    localStorage.setItem('text' + number, input);
  };
  
  //retrieving appointments from local storage 
  for(var i = 6; i <= 19; i++){
    document.getElementById('textArea' + i).value = localStorage.getItem('text' + i);
  };
