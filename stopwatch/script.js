var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

// false denotes timer is stopped 
var timer = false;

function start() {

    // when clicked on start set timer to true
    timer = true;
    stopwatch();
}

function stop() {

    // when clicked on stop set timer to false 
    timer = false;

}

function reset() {

    // actually making values 0 
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;


    // writing "00" to display "00" not one 
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {

        // in every 10 milli sec increase count by 1 
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        // taking values in another variable to display 0 
        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var countstring = count;

        // if values are less than 10, then add 0 before digit 
        if (hr < 10) {
            hrstring = "0" + hrstring;
        }
        if (min < 10) {
            minstring = "0" + minstring;
        }
        if (sec < 10) {
            secstring = "0" + secstring;
        }
        if (count < 10) {
            countstring = "0" + countstring;
        }
                                                        
        // display changed value of hr 
        document.getElementById('hr').innerHTML = hrstring;

        // display changed value of min 
        document.getElementById('min').innerHTML = minstring;

        // display changed value of sec 
        document.getElementById("sec").innerHTML = secstring;

        // display changed value of count 
        document.getElementById("count").innerHTML = countstring;

        // wait for 10 millisec and call stopwatch() again 
        setTimeout('stopwatch()', 10)
    }
}
