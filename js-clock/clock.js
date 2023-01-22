setInterval(setTime);   // Set interval so clock constantly updates

// Instantiate a few global variables
let format = "12"   // AMPM format default                    
const sound = new Audio("alarm.mp3"); // Alarm sound
sound.loop = true;  // Alarm will continue to loop until paused.
let alarmTimes = [];    // Global list containing all of the alarm times.

function showTime() {
    // Using date module, get current time.
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = "AM";
    
    // convert time from military to ampm formet
    if (hour >= 12) {
        if(hour > 12){
            hour -= 12;
        }
        ampm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        ampm = "AM";
    }
    
    // add zeros where appropiate for better readability
    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);
    
    // Format text for readability
    let currentTime = hour + ":"+ min + ":" + sec + ampm;
    // create separate time variable to compare with the alarm time.
    let currentTimeNoSec = hour + ":" + min + ampm;
    
    // recursively search through all saved alarm times to determine if alarm needs to be triggered.
    let play = recursiveSearch(alarmTimes, 0, alarmTimes.length-1, currentTimeNoSec);
    if (play != -1){
        sound.play();
        let index = alarmTimes.indexOf(currentTimeNoSec);
        alarmTimes.splice(index, 1);
    }
    // Update document element with the current time.
    document.getElementById("clock").innerHTML = currentTime;
}

function addZero(int){
    // Function that adds zeros into the time format for better readability.
    return int = int < 10 ? "0" + int : int;
}

function changeFormat(){
    // If the 12 to 24 hour format button is pressed, toggle to the other format.
    time = document.getElementById("clock").innerText;
    // checks if the 8th index of the string element is P or A
    // If it is, it must be in AMPM format so change to 24 hours, otherwise
    // Change back to 12 hour format.
    if (time[8] == "P"){
        format = "24";        
    } else if (time[8] == "A"){
        format = "24";
    } else{
        format = "12";
    }
}

function militaryTime(){
    // Same as show time but with no conversion to standard ampm format.
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = "AM";
    let alarmHour = hour;   // to be used with alarm time, so alarm still works in military time mode.

    // changing alarmHour from military to ampm for alarmtime comparison.
    if (hour >= 12) {
        if(hour > 12){
            alarmHour -= 12;
        }
        ampm = "PM";
    }
    if (hour == 0) {
        alarmHour = 12;
        ampm = "AM";
    }

    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);
    alarmHour = addZero(alarmHour);
 
    let currentTime = hour + ":"+ min + ":" + sec;
    let currentTimeNoSec = alarmHour + ":" + min + ampm;
    // recursive search, returns -1 if current time is not present in alarmtimes.
    let play = recursiveSearch(alarmTimes, 0, alarmTimes.length-1, currentTimeNoSec);

    if (play != -1){
        sound.play();
        let index = alarmTimes.indexOf(currentTimeNoSec);
        alarmTimes.splice(index, 1);
    }
    // Reassign clock element to military time format.
    document.getElementById("clock").innerHTML = currentTime;
}   

function setTime(){
    // decides whether to show standard or military time.
    if (format == "12"){
        showTime();
    } else{
        militaryTime();
    }
}

window.onload = function init(){
    // initialize clock start
    setTime();
    // create the 3 button elements needed/
    const button = document.createElement('button');
    const setButton = document.createElement('setButton');
    const clearButton = document.createElement('clearButton');
    button.innerText = "12 or 24 hour format";
    setButton.innerText = "Set Alarm";
    clearButton.innerText = "Clear Alarm";
    button.id = 'mainButton';
    setButton.id = "setButton";
    clearButton.id = "clearButton";
    // position buttons to desired location.
    button.style.position = "absolute";
    setButton.style.position = "absolute";
    clearButton.style.position = "absolute";
    button.style.left = "50%";
    setButton.style.left = "25%";
    clearButton.style.right = "25%";
    button.style.transform = "translateX(-50%)";
    // Add click events, when button is pressed, respective function is called.
    button.addEventListener("click", changeFormat);
    setButton.addEventListener("click", alarm);
    clearButton.addEventListener("click", clearAlarm);
    // Append buttons to HTML.
    document.body.appendChild(button);
    document.body.appendChild(setButton);
    document.body.appendChild(clearButton);
    document.getElementById("title").innerHTML = "Digital Clock";
    // Initialize hours menu and minutes menu as dropdown menus.
    hoursMenu();
    minMenu();
}

function hoursMenu(){
    // Create hours menu as dropdown menus.
	var select = document.getElementById('alarmhrs');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}

function minMenu(){
// Create minutes menu as dropdown menus.
	var select = document.getElementById('alarmmins');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}

function alarm(){
    // Retreives alarm time from the dropdown menus.
    let hour = document.getElementById("alarmhrs");
    let minutes = document.getElementById("alarmmins");
    let ampm = document.getElementById('ampm');

    // Assigns the selected dropdown option to variables.
    let selectedHour = hour.options[hour.selectedIndex].value;
    let selectedMin = minutes.options[minutes.selectedIndex].value;
    let selectedAP = ampm.options[ampm.selectedIndex].value;
    // Formats the selected variables as a readable time
    let alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + selectedAP;
    // Appends alarmTimes list with the selected alarm time.
    alarmTimes.push(alarmTime);
}

function clearAlarm(){
    // Pause alarm sound.
    sound.pause();
}

function recursiveSearch(array, l, r, x){
    // Search through an array to find element x.
    if (r<1)
        return -1;
    if (array[1] == x)
        return l;
    if (array[r] == x)
        return r;
    return recursiveSearch(array, l+1, r-1, x);
}