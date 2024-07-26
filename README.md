# Discussion Forum App

A modern and responsive discussion forum application built with React and Redux, designed to facilitate discussions and enhance community engagement.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Login and register users with JWT authentication.
- **Discussion Threads:** Create, view, and manage discussion threads.
- **Comments:** Add and manage comments on discussion threads.
- **Leaderboard:** View a leaderboard based on user contributions.
- **Responsive Design:** Fully responsive layout for optimal viewing on various devices.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: For modern, responsive styling.
- **Axios**: For making HTTP requests.
- **React Hot Toast**: For user notifications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/discussion-forum-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd discussion-forum-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

- **Home Page:** View all discussion threads and access navigation links.
- **Login:** Authenticate users to access restricted areas.
- **Register:** Create new user accounts.
- **Add Thread:** Add new discussion threads.
- **View Thread Details:** View detailed information and comments on threads.
- **Leaderboard:** Access the leaderboard to see top contributors.

## Project Structure

- `src/`: Contains all source code.
  - `components/`: Reusable components like Navbar and Loading.
  - `pages/`: Contains page components like HomePage, LoginPage, etc.
  - `states/`: Redux state management.
  - `utils/`: Utility functions and custom hooks.
  - `index.jsx`: Entry point of the application.
  - `App.jsx`: Main application component with routing.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
