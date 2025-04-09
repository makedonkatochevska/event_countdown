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
  eventList.innerHTML = ""; // Clear the list before rendering new events

  events.forEach((event) => {
    // Create a list item for each event
    const li = document.createElement("li");
    const eventTimeElement = document.createElement("span");
    const eventColorElement = document.createElement("span");

    // Set event name and color
    eventTimeElement.classList.add("event-color");
    eventTimeElement.textContent = `${event.name} - ${remainingTime(
      event.date,
      event.time
    )}`;

    eventColorElement.style.backgroundColor = event.color;
    eventColorElement.classList.add("event-color");
    eventColorElement.textContent = event.color;

    // Append the event and color spans to the list item
    li.appendChild(eventTimeElement);
    li.appendChild(eventColorElement);

    // Append the list item to the event list
    eventList.appendChild(li);

    let interval = setInterval(() => {
      eventTimeElement.textContent = `${event.name} - ${remainingTime(
        event.date,
        event.time
      )}`;

      if (remainingTime(event.date, event.time) === "Event Started!") {
        clearInterval(interval); // Clear the interval if the event has started
        document.body.style.backgroundColor = event.color; // Change background color to event color
      }
    }, 1000); // Update every second for each event
  });
}

//Function to display remaining time until the event
function remainingTime(eventDate, eventTime) {
  const eventDateTime = new Date(`${eventDate}T${eventTime}`);
  const now = new Date();
  const timeDiff = eventDateTime - now;

  if (timeDiff <= 0) {
    return "Event Started!";
  }

  const days = Math.floor(timeDiff / DAYS);
  const hours = Math.floor((timeDiff % DAYS) / HOURS);
  const minutes = Math.floor((timeDiff % HOURS) / MINUTES);
  const seconds = Math.floor((timeDiff % MINUTES) / SECONDS);

  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
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
