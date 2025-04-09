//html elements
const form = document.getElementById("eventForm");
const midnightBtn = document.getElementById("midnightButton");
const eventList = document.getElementById("eventList");

const DAYS = 24 * 60 * 60 * 1000; // Milliseconds in a day
const HOURS = 60 * 60 * 1000; // Milliseconds in an hour
const MINUTES = 60 * 1000; // Milliseconds in a minute
const SECONDS = 1000;

//event array
const events = JSON.parse(localStorage.getItem("events")) || [];

//event class
class Event {
  constructor(_name, _date, _time, _color) {
    this.name = _name;
    this.date = _date;
    this.time = _time;
    this.color = _color;
  }
}

//Function to add event to the list
function addEvent() {
  const nameValue = form.eventName.value;
  const dateValue = form.eventDate.value;
  const timeValue = form.eventTime.value;
  const eventColor = form.eventColor.value || "#000000";

  if (!nameValue || !dateValue || !timeValue) {
    alert("Please fill out all fields.");
    return;
  } else {
    const newEvent = new Event(nameValue, dateValue, timeValue, eventColor);
    events.push(newEvent);

    localStorage.setItem("events", JSON.stringify(events));

    form.reset();
    displayEvents();
  }

  console.log(events);
}

//Function to display events in the list
function displayEvents() {
  eventList.innerHTML = "";

  // Sort events
  sortEvents();

  events.forEach((event) => {
    const li = document.createElement("li");
    const eventTimeElement = document.createElement("span");
    const eventColorElement = document.createElement("span");

    eventTimeElement.classList.add("event-color");
    eventTimeElement.textContent = `${event.name} - ${remainingTimeString(
      event.date,
      event.time
    )}`;

    eventColorElement.style.backgroundColor = event.color;
    eventColorElement.classList.add("event-color");
    eventColorElement.textContent = event.color;

    //Append
    li.appendChild(eventTimeElement);
    li.appendChild(eventColorElement);

    eventList.appendChild(li);

    //Countdown timer
    let interval = setInterval(() => {
      eventTimeElement.textContent = `${event.name} - ${remainingTimeString(
        event.date,
        event.time
      )}`;

      if (remainingTimeString(event.date, event.time) === "Event Expired!") {
        clearInterval(interval); //Clear the interval if the event has started
        document.body.style.backgroundColor = event.color;
      }
    }, 1000);
  });
}

//Function to display remaining time until the event
function remainingTime(eventDate, eventTime) {
  const eventDateTime = new Date(`${eventDate}T${eventTime}`);
  const now = new Date();
  const timeDiff = eventDateTime - now;

  if (timeDiff <= 0) {
    return "expired";
  }

  return timeDiff; //Return remaining time in milliseconds
}

// Function to display the remaining time as a string (for display purposes)
function remainingTimeString(eventDate, eventTime) {
  const timeRemaining = remainingTime(eventDate, eventTime);
  if (timeRemaining === "expired") {
    return "Event Expired!";
  }

  const days = Math.floor(timeRemaining / DAYS);
  const hours = Math.floor((timeRemaining % DAYS) / HOURS);
  const minutes = Math.floor((timeRemaining % HOURS) / MINUTES);
  const seconds = Math.floor((timeRemaining % MINUTES) / SECONDS);

  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

//Function to sort events
function sortEvents() {
  events.sort((a, b) => {
    const timeRemainingA = remainingTime(a.date, a.time);
    const timeRemainingB = remainingTime(b.date, b.time);

    //If both events are expired, keep their original order
    if (timeRemainingA === "expired" && timeRemainingB === "expired") {
      return 0;
    }

    //If one event has expired, move it to the end
    if (timeRemainingA === "expired") return 1;
    if (timeRemainingB === "expired") return -1;

    //Otherwise, compare the remaining time
    return timeRemainingA - timeRemainingB;
  });
}

//-----EVENTS-----
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addEvent();
});

//set time to midnight
midnightBtn.addEventListener("click", () => {
  form.eventTime.value = "00:00";
});

displayEvents();
