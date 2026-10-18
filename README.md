EventHub: Event Management System



A React web app for exploring events from the Ticketmaster Discovery API, with search, category filters, and simulated login.



Student: Mehrab Sohail

Course: Web Programming, Assignment 2



Features

Event listing from the Ticketmaster Discovery API

Keyword search

Category filter chips (Music, Sports, Arts \& Theatre, Film, Miscellaneous)

Loading and error states

Responsive layout (single column on phones)

Redux Toolkit for authentication state, with Local Storage persistence

React Router for page navigation

Technologies

React (Vite)

Redux Toolkit and React Redux

React Router

Ticketmaster Discovery API

Setup

Clone the repository and open the folder.

Install dependencies by running npm install in the terminal.

Create a file named .env in the project root, with this line (replace the value with your own Ticketmaster Consumer Key): VITE\_TICKETMASTER\_KEY=your\_key\_here Get a key from https://developer.ticketmaster.com/. Never commit .env.

Start the development server by running npm run dev in the terminal.

Open http://localhost:5173/ in your browser.

Current Status



Completed: API integration, search, category filters, authentication state (authSlice, Redux store), routing, responsive layout.



Not yet completed: event details page, login and register forms, event registration and cancellation, My Events page.



Git Workflow



Each feature was developed on its own branch and merged through a Pull Request.

