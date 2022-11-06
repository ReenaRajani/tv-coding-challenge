# Stan TV Coding Challenge

> Welcome to the Stan TV Coding Challenge!

## Overview

The purpose of this challenge is to assess your knowledge around composing a **simple React/Typescript single-page application** closely following the guidelines and requirements.

This challenge is expected to take around 4-6 hours.

## Guidelines

- The application should be built using [Babel](https://www.babeljs.io) along with [webpack](https://webpack.js.org) into a `dist` folder containing four files (`app.js`, `styles.css`, `logo.svg` and `index.html`).
- Your solution should be implemented using:
  - [TypeScript](https://www.typescriptlang.org)
  - [React](https://facebook.github.io/react/)
  - [Redux](https://redux.js.org) (optional)
  - [Styled Components](https://www.styledcomponents.com) (optional)
  - [React Router](https://www.reactrouter.com) (optional)
- You should avoid using any other JS/CSS frameworks/libraries.
- The application should be responsive and support both 720p and 1080p screen sizes.
- All text should be rendered using the "Open Sans" font.
- We are looking for solutions that are **simple, modern, performant, and tested**

## Requirements

You will need to build the following 2 pages with React:

- A "Home" page ([home.jpg](./home.jpg))
- A "Program" page ([program.jpg](./program.jpg))

### "Home" Page

- This page should consist of the layout along with a **simple and reusable** carousel.
- The provided sample data ([data.json](./data.json)) should be retrieved using the fetch API.
- Each item in the carousel should link to a "Program" page.
- Navigation between items in the carousel should be handled using the `left`, `right` and `enter` keyboard keys.
- No more than six carousel items should be in the DOM at any time.
- When the UI is in a loading state render a skeleton. ([home-loading.jpg](./home-loading.jpg)).
- When an error occurs an error message message should be rendered. ([error.jpg](./error.jpg))

### "Program" Page

- This page should consist of the layout along with a program overview.
- The program to display should be determined by the ID.
- You should only fetch the provided sample data if the "Home" page has not been visited first.
- Pressing the `backspace` keyboard key should take you back to the "Home" page.
- When the UI is in a loading state render a skeleton. ([program-loading.jpg](./program-loading.jpg)).
- When an error occurs an error message message should be rendered. ([error.jpg](./error.jpg))

## SetUp Instructions
The Project is built React, Typescript and styled components.

- You will need to first install the dependencies via `yarn install`.
- Post the installation, start the application via `yarn start`.
- To execute the tests run `yarn test`

Folder Structure:
The project uses the following folder structure
- src
  - components `(Reusable components)`
    - App.tsx
    - Header.tsx
    - ImageCarousel.tsx
  - pages `(components based on the routes)`
    - Details
    - Home
  - styles `(global styles are defined here)`
  - typings `(custom types are defined here)`
