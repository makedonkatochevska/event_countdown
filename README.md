# Event Countdown

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🎥 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>
---

## 📜 Project Description

The **Event Countdown** web application is designed to allow users to create, view, and track events with a countdown timer. The app provides a smooth user experience with custom error messages, a midnight button to set the event time, and a color picker for event personalization. The app supports local storage to persist events across page reloads, and events are automatically sorted by the nearest upcoming event, with expired events listed at the bottom.

### 🔑 Key Features:

- **Form Validation**: Custom error messages with red input borders to guide users.
- **Midnight Button**: A button that automatically sets the event time to midnight.
- **Color Picker**: Users can choose a custom color for their event.
- **Event Countdown**: Events have a countdown timer that displays the time remaining until the event starts.
- **Event Expiry**: Once an event has passed, its text changes to "Event Expired!" and the background color of the page transitions to the event’s selected color.
- **Event Sorting**: Events are sorted with the soonest event at the top, and expired events are placed at the bottom of the list.
- **Local Storage**: Events are saved to local storage, ensuring data persists between sessions.

---

## Technologies Used ⚙️

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## Demo 🎥

Check out the live demo of the project hosted on Netlify:

<a href="https://cookbook-js-makedonkatochevska.netlify.app/" target="_blank">Live Demo</a>

Or see the pictures below for a quick preview of the page:

<a href="https://i.imghippo.com/files/SZj2858Xj.png" target="_blank">Tags Filter Page</a>
<br>
<a href="https://i.imghippo.com/files/dFNe4383nOg.png" target="_blank">Recipe Page</a>

---

## Installation 🔨

To run these exercises locally, follow these steps:

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/makedonkatochevska/event_countdown.git
   ```

2. Open the exercise into the browser of choice.

---

## Usage 🚀

### ⏳ Features & Navigation

1. **Add a New Event**

   - Use the form to create an event by entering:
     - Event Name
     - Event Date
     - Event Time
     - Event Color (using the color picker)
   - Once you fill out the form and submit, the event will be added to the event list and saved in **local storage**.

2. **Set Event Time to Midnight**

   - Click the **Midnight Button** to automatically set the event time to midnight (`00:00`), allowing you to easily set events for the start of a new day.

3. **Event Countdown**

   - Each event in the list shows a live countdown to the event's start time.
   - The countdown updates every second, displaying the remaining days, hours, minutes, and seconds.
   - The event will be marked as "Event Expired!" once the event's time has passed.

4. **Event Expiry**

   - Once an event's time has passed, the text for that event changes to **"Event Expired!"**, and the background color of the page will transition smoothly to the event's chosen color.

5. **Sorting Events**

   - Events are automatically sorted in ascending order by the time remaining, with the soonest event at the top and expired events placed at the bottom.

6. **Local Storage Support**
   - The app supports **local storage**, meaning the events will persist even after refreshing the page or closing the browser. This ensures you don’t lose your events after a session ends.

---

## Credits 📝

This project was developed as a personal challenge to demonstrate a **countdown timer** functionality using **HTML**, **CSS**, and **JavaScript**. It showcases the use of local storage for data persistence, custom form validation with error messages, a color picker for personalized event styling, and real-time countdowns for events.

### Acknowledgments:

- **Event Countdown Logic**: Implemented with vanilla JavaScript, leveraging the `setInterval` function for real-time countdown updates.
- **Form Validation**: Custom error handling was implemented for input validation, ensuring that users input valid event details.
- **CSS Styling**: Styled using pure CSS for responsive and visually clean layout.
- **Color Picker**: Integrated a color picker for event color customization, allowing users to select a color for their event.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
