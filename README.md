# Advice generator app solution

(This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).)

Don't let the name fool you! I deviated slightly from the requirements for this project. 

While initially I set out to have the app pull advice and other helpful quotes per the project guidelines, I stumbled upon an API that can pull multilingual quotes instead and thought that might be more fun. So, it's become more of a random quote-translated-into-German generator. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](/images/advice-genpreview.png)

### Links

- Live Site URL: (https://seaeagles.github.io/advice-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [RapidAPI](https://rapidapi.com/hub) - API Hub
- Asynchronous Javascript programming (async/await)

### What I learned

With this project I set out with the goal to gain more exposure to asynchronous operations in JavaScript. To work with the API taken from RapidAPI, I needed to construct an async function that would make the HTTP requests, parse the JSON response, and handle any potential errors with a 'try-catch' block.

Below see a snippet of the async function used in my project:

```js
async function getAdvice() {
    try {
        const response = await fetch(API_URL, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
```

### Useful resources

- [JS Asynchronous (W3Schools)](https://www.w3schools.com/js/js_asynchronous.asp) - A classic resource, this was helpful as an overview of asynchronous behavior in javascript.

