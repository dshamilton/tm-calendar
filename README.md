Rules:
The calendar is to be laid out vertically so that later events appear further down the page.
No events should visually overlap on the calendar.
Events should make maximum use of the horizontal space. An event with no conflicts should render at full width, two colliding events should both render at half width, etc.
Include a function called renderDay that is accessible globally. It should take 1 argument - - an array of s as described above. Running
 
const events = [{start: 30, end: 120}, {start: 300, end: 330}, {start: 290, end: 330}]
    
     Event
window.renderDay([{start: 30, end: 120}, {start:
events
  in the browser console should render 3 events in your
c3WQalendar.
Use of CSS Grid is not allowed for the rendering of events - this challenge is meant to primarily showcase your JS ability.
You may use any third party libraries or frameworks that you deem appropriate, but you must provide the core of the implementation.
Submission Format:
Your solution must work without a back-end server. It should have no dependencies other than HTML, CSS and JS. This means your application must work correctly when we open your HTML file in a browser.
If your application does not require a compile step, your index HTML file will be considered the application entry point.
If you build your CSS/JS through a compiler, please include both the uncompiled source and the output folder in your submission. We will open the index HTML file from your output folder.
For security reasons we will not be able to run npm install , npm build or similar, so it is very important that your output folder is included. Don't forget to run your build step after you make the final change to your source!
If you use a compiler, please include your package.json file, but do not include your node_modules folder.
