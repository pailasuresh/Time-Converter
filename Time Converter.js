let hour = document.getElementById("hoursInput");
let minute = document.getElementById("minutesInput");
let butt = document.getElementById("convertBtn");
let result = document.getElementById("timeInSeconds");
let error = document.getElementById("errorMsg");
butt.addEventListener("click", butt.onclick = function() {
    let hours_value = parseInt(hour.value);
    let minutes_value = parseInt(minute.value);
    if (hour.value === "") {
        error.textContent = "Please enter a valid number of hours";
        result.textContent = "";
    } else if (minute.value === "") {
        error.textContent = "Please enter a valid number of minutes";
        result.textContent = "";
    } else {
        let hr_seconds = hours_value * 3600 + minutes_value * 60;
        result.textContent = hr_seconds;
        result.classList.add("theme");
        error.textContent = "";
    }
});