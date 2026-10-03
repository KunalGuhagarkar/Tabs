# Tabs Project

A simple tab interface built with HTML, CSS, and vanilla JavaScript. It is designed to introduce basic **DOM manipulation** and **event handling**.

This project is based on the [Tabs](https://roadmap.sh/projects/simple-tabs) project challenge from roadmap.sh.

## Overview

The page has four tabs in a navigation bar. The first tab is active by default. When the user clicks a different tab, the content of the current tab is replaced with the content of the selected tab, and the active tab is highlighted with an underline.

## Learning Goals

- Selecting elements with `document.querySelectorAll()` and `document.getElementById()`
- Listening for `click` events with `addEventListener()`
- Preventing default link behavior with `e.preventDefault()`
- Adding and removing CSS classes with `classList`
- Updating page content dynamically with `innerHTML`
- Using a `switch` statement to handle different cases

## Features

- Four navigation tabs (First, Second, Third, Fourth)
- First tab active by default
- Clicking a tab updates the displayed content
- Active tab is underlined
- Hover effect on tabs
- Centered, flexbox-based layout

## Project Structure

```
tabs-project/
├── index.html    # Page structure and navigation markup
├── style.css     # Styling and layout
└── script.js     # Tab switching logic
```

## Getting Started

1. Clone or download this repository.
2. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` in any modern web browser.

No build tools or dependencies are required.

## How It Works

### HTML

The navigation is an unordered list of links, each with a unique `id` (`first-tab`, `second-tab`, etc.). The first link has the `active` class by default. The tab content is displayed inside the `#custom-container` div.

### CSS

- `.active` adds an underline to the selected tab.
- `a:hover` gives each tab a black background with white text.
- `#custom-container` is styled as a rounded, aquamarine box with centered text.

### JavaScript

1. All `<a>` elements and the content container are selected.
2. A `click` listener is attached to each tab.
3. On click, the default link behavior is prevented.
4. The `active` class is removed from every tab, then added to the clicked tab.
5. A `switch` statement checks the clicked tab's `id` and updates the container's content to match.

```js
navItems.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();

        navItems.forEach((item) => item.classList.remove("active"));
        element.classList.add("active");

        switch (element.id) {
            case "first-tab":
                customContainer.innerHTML = "<h1>Text for First Tab</h1>";
                break;
            // ...other tabs
        }
    });
});
```

## Possible Improvements

- Create a separate content `div` for each tab and toggle a `hidden` class instead of replacing `innerHTML`
- Replace the `switch` statement with a `data-tab` attribute lookup
- Add keyboard navigation and ARIA roles (`role="tablist"`, `role="tab"`, `role="tabpanel"`) for accessibility
- Add a fade or slide transition between tabs
- Make the layout more responsive for small screens

## Technologies Used

- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6)

## Project Link

[https://roadmap.sh/projects/simple-tabs](https://roadmap.sh/projects/simple-tabs)

## Author

**Kunal Guhagarkar**