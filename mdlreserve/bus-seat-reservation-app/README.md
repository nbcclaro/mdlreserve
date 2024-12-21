# Bus Seat Reservation Application

## Overview
This project is a bus seat reservation web application that allows users to select travel dates and times, view seat layouts, and confirm reservations. The application features a user-friendly interface and manages seat availability effectively.

## Project Structure
```
bus-seat-reservation-app
├── src
│   ├── index.html        # HTML structure for the application
│   ├── styles.css       # CSS styles for the application
│   ├── app.js           # JavaScript logic for user interactions
│   └── types
│       └── index.ts     # TypeScript interfaces and types
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Features
- Input fields for travel date and time selection (2am, 7pm, 9pm).
- A "Check Seat" button to display the seat layout.
- A "Confirm" button to send reservation data to the database.
- Non-clickable seats and hidden aisles in the seat layout.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd bus-seat-reservation-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   npm start
   ```

## Usage Guidelines
- Enter the desired travel date and select a travel time.
- Click the "Check Seat" button to view the seat layout.
- Select available seats and click "Confirm" to finalize your reservation.

## License
This project is licensed under the MIT License.