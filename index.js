//html elements
const form = document.getElementById("eventForm");
const midnightBtn = document.getElementById("midnightButton");
const eventList = document.getElementById("eventList");

//event array
const events = [];

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
    form.reset();
    displayEvents();
  }

  console.log(events);
}

//Function to display events in the list
function displayEvents() {
  eventList.innerHTML = "";
  events.forEach((event) => {
    eventList.innerHTML += `<li><span class="event-color">${event.name} - ${event.date} - ${event.time}</span><span style="background-color: ${event.color}" class="event-color">${event.color}</span></li>`;
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
