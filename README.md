# Tourism Ecosystem - Frontend

This is the frontend application for the **Tourism Ecosystem** project, built using [Next.js](https://nextjs.org/). It provides a user-friendly interface to explore and interact with tourism-related data. The backend of this project is implemented separately and can be found [here](https://github.com/hyxONick/eco_tourism_server).

## Project Overview

The **Tourism Ecosystem** is designed to provide tourists with rich information on various destinations. The frontend application interacts with the backend API to fetch data, such as tourist spots, user-generated content, and recommendations, delivering a seamless experience for users.

## Features

- Browse and search tourist attractions
- View detailed information about each location
- User authentication and personalized recommendations
- Interactive map integration
- Route planning between destinations
- Reviews and ratings for tourist spots

## Technologies

- **Frontend**: [Next.js](https://nextjs.org/) (React-based framework)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (useState, useEffect)
- **Backend API**: [eco_tourism_server](https://github.com/hyxONick/eco_tourism_server)
- **Authentication**: Clerk or custom JWT integration

## Getting Started

### Prerequisites

Before running the project locally, make sure you have the following installed:

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone this repository:

```bash
   git clone https://github.com/hyxONick/tourism_ecosystem
```

2. Navigate to the project folder:

```bash
   cd tourism_ecosystem
```

3. Install the dependencies:

    Using npm:

```bash
   npm install
```

   Or using yarn:

```bash
   yarn install
```

## Running the Application

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

To create a production build and start the server:

```bash
npm run build
npm start
```

or

```bash
yarn build
yarn start
```