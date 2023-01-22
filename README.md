# JavaScript Alarm Clock

## Overview

For this project I am using JavaScript and its easy interaction with HTML to create a virtual AMPM/Military Time Alarm Clock. The output of this program will show the current time in ampm format. Pressing the change format button will change the time format to 24 hour or military time. Using the drop down menus you can select a specific time, then pressing the "set alarm" button will set an alarm for the selected time. The user may select as many times as they want add. When the time arrives, an alarm will ring and the program will remove that alarm from the list so it does not repeat. The clear alarm button will then stop the alarm sound.

## Purpose

The purpose of this software was to practice the interplay between JavaScript and HTML. As a future software engineer I wanted to have experience in practical programming that is both fun and also functional, something can could be seen in the real world.

[Software Demo Video](http://youtube.link.goes.here)

## Development Environment

To complete this project I used VSCode as my preferred IDE. I like VSCode as it's simple, easy to use, have a easy to use live server for HTML, and it works well with markdown.

I used JavaScript to create HTML elements and interact with a webpage. With JS I created the button elements and appended them to the HTML body. Using the Date module from JavaScript I was able to create a functioning clock. With the Date module I retreived an hour, minute, and second. Then I formatted and concatted those variables together to create a string that is in the correct time format, either 12 or 24 hour clock. I also used CSS to format the HTML webpage into a nicer more professional output. 

## Useful Websites

How to use sound in JavaScript
- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-make-a-beep-sound-in-javascript/)

How to create CSS button outlines

- [W3schools](https://www.w3schools.com/howto/howto_css_outline_buttons.asp)

How to create HTML buttons using JS

- [GeeksforGeeks](https://www.geeksforgeeks.org/html-dom-button-object/)

## Future Work

I am happy with how this project has turned out so far, but I want to make future improvements to it. Those improvements include:

- Allowing an alarm to repeat daily so a user doesn't have to set the alarm every time
- Have a way of viewing all of the set alarms.
- Use a pop up button for the alarm reset.
- Improve the GUI for the project overall.