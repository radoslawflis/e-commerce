# E-Commerce App

Live App: https://e-commerce-web-shop-app.netlify.app/

## About the project

E-commerce web shop is an enterprise level React application deployed to production. It utilizes the newest technologies and tools including ContextAPI, React-Router, Hooks and Firebase. Authorization and Database is managed internally by Firebase, taking advantage of its feature for backend development. Styled-components as CSS in JS enables to build maintainable and scalable codebase by enhancing modularity of React components.

## Features

-   Authorization: Set up authentication and user accounts with Firebase and Google Sign In.
-   Routing: SPA application with React Router
-   useContext for managing global states of users and products
-   / Also prepared redux state management with both traditional redux and reduxToolkit: see respective branches
-   implemented redux-persist for keeping state in local memory
-   tested redux-thunk and redux-saga for understanding state management of async actions
-   added redux-logger in development mode to see states in console
-   tested redux-devtools to display history of  states in plugin window
-   Styling: CSS converted from SASS to styled-components for solving class names clashes

## Technologies Used

-   Front-end: HTML, CSS, JavaScript, React, React Router, Redux, Redux Toolkit, Redux-Persist, Redux-Logger, Redux-Thunk, Redux-Saga, Redux DevTools
-   Back-end: Firebase
-   Database: Firebase
-   Styling: Styled-components
  
## Why I built the project this way

I wanted to understand state management in React from different perspectives. This is why I have a clear comparison between ContextApi and Redux. I built an app firstly with useContext with just using useState, then useReducer for better control inside contexts. Then I switched to redux but using oldschool with a lot of boilerplate code redux. I understood how actions are being dispatched to reducers based on type. What are selectors. What is reselect library and what is it for. Then I added redux-thunk for managing async actions and developed to redux-saga. Redux-saga is not necessary for this small app. I also added redux-persist to keep state in local memory of the browser. I played with redux devtools that adds to the control over states. Finally I switched everything to redux toolkit that is much of an improvement for reduction of boilerplate code. Basically slice is like a compact type, action and reducer together, very cool. 
