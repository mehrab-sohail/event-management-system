# EventHub: Event Management System

A React web app for exploring events from the Ticketmaster Discovery API, with search, category filters, and simulated login.

**Student:** Mehrab Sohail
**Course:** Web Programming, Assignment 2

## Features

- Event listing from the Ticketmaster Discovery API
- Keyword search
- Category filter chips (Music, Sports, Arts & Theatre, Film, Miscellaneous)
- Loading and error states
- Responsive layout (single column on phones)
- Redux Toolkit for authentication state, with Local Storage persistence
- React Router for page navigation

## Technologies

- React (Vite)
- Redux Toolkit and React Redux
- React Router
- Ticketmaster Discovery API

## Setup

1. Clone the repository and open the folder.
2. Install dependencies:
3. Create a file named `.env` in the project root, with your own Ticketmaster Consumer Key:
   Get a key from https://developer.ticketmaster.com/. Never commit `.env`.
  
4. Start the development server:
5. Open http://localhost:5173/

## Current Status

Completed: API integration, keyword search, category filters, event details page, login and register pages (simulated, using Redux and Local Storage), logout, routing, responsive layout.

Not yet completed: event registration and cancellation, My Events page with protected routes, date filter.

## Git Workflow

Each feature was developed on its own branch and merged through a Pull Request.