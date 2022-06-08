var today = moment().format('MMMM Do, YYYY');
$('#currentDay').text("Today is " + today)


var current_time = new Date();
hour = current_time.getHours();
console.log(typeof hour)

    if (hour = 14){
        $('.hour14').addClass("present")
    } else if (hour > 14){
        $('.hour14').addClass("future")
    } else {
        $('.hour14').addClass("past")
    };

    if (hour = 13){
        $('.hour13').addClass("present")
    } else if (hour > 13){
        $('.hour13').addClass("future")
    } else {
        $('.hour13').addClass("past")
    };



