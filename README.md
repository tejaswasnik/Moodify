# Moodify

A intelligent music streaming platform that uses facial emotion recognition to recommend songs tailored to your current mood. Moodify combines real-time emotion detection with personalized music curation to enhance your listening experience.

## Overview

Moodify is a full-stack web application that leverages computer vision and machine learning to analyze facial expressions and provide mood-based song recommendations. The application features user authentication, a responsive music player, and an intelligent recommendation engine that adapts to your emotional state.

## Features

- **Emotion Detection**: Real-time facial expression analysis using MediaPipe vision technology
- **Mood-Based Recommendations**: Intelligent song suggestions based on detected emotions
- **User Authentication**: Secure JWT-based authentication with password encryption
- **Music Player**: Full-featured audio player with playback controls
- **User Library**: Save and manage your favorite songs and playlists
- **Cloud Storage**: Integrated image and audio file management with ImageKit
- **Performance Caching**: Redis-backed caching for optimized performance
- **Responsive Design**: Mobile-friendly interface with SASS styling

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Cache**: Redis
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **File Management**: ImageKit, Multer
- **Audio Processing**: node-id3

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router
- **HTTP Client**: Axios
- **Styling**: SASS
- **Vision AI**: MediaPipe Vision
- **Linting**: ESLint

## Project Structure

```
Moodify/
├── Backend/
│   ├── src/
│   │   ├── config/          # Configuration (database, cache)
│   │   ├── controllers/     # Route controllers
│   │   ├── middlewares/     # Custom middlewares
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   └── app.js           # Express app setup
│   ├── server.js            # Server entry point
│   └── package.json         # Dependencies
│
└── Frontend/
    ├── src/
    │   ├── features/        # Feature modules
    │   │   ├── auth/        # Authentication feature
    │   │   ├── FaceExpression/  # Emotion detection feature
    │   │   ├── home/        # Home and player feature
    │   │   └── shared/      # Shared styles and components
    │   ├── services/        # API services
    │   ├── App.jsx          # Root component
    │   └── main.jsx         # React entry point
    └── package.json         # Dependencies
```

## Installation

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- MongoDB database
- Redis server

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
REDIS_USERNAME=your_redis_username
FRONTEND_URL=http://localhost:5173
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

4. Start the development server:
```bash
npm run dev
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Available Scripts

### Backend
- `npm run dev` - Start the development server with hot reload

### Frontend
- `npm run dev` - Start the development server with Vite
- `npm run build` - Build the production bundle
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Songs
- `GET /api/songs` - Get all songs
- `POST /api/songs` - Upload a new song
- `GET /api/songs/:id` - Get song details
- `DELETE /api/songs/:id` - Delete a song

## Key Components

### Frontend Components
- **Login**: User authentication interface
- **Register**: Account creation form
- **Home**: Main dashboard with song library
- **Player**: Music player with playback controls
- **FaceExpression**: Real-time emotion detection interface

### Backend Services
- **Auth Service**: Handles user authentication and JWT token management
- **Song Service**: Manages song data and recommendations
- **Storage Service**: Handles file uploads and cloud storage
- **Cache Service**: Redis-based caching layer

## Authentication Flow

1. User registers or logs in with email and password
2. Backend validates credentials and generates JWT token
3. Token stored in browser cookies for subsequent requests
4. Protected routes verify token validity via middleware
5. User can logout, which blacklists the token

## Emotion Detection Process

1. Frontend accesses user's webcam via browser permissions
2. MediaPipe analyzes facial landmarks and expressions in real-time
3. Emotion is classified (happy, sad, angry, neutral, etc.)
4. Song recommendations are generated based on detected emotion
5. User can play songs directly from recommendations

## Performance Optimizations

- Redis caching layer reduces database queries
- Lazy loading for song library
- Optimized image storage with ImageKit CDN
- JWT token-based stateless authentication
- Code splitting and minification in production builds

## Database Schema

### User Model
- Email (unique)
- Password (hashed)
- Created at timestamp

### Song Model
- Title
- Artist
- Duration
- File path
- Cover image
- Mood classification
- Upload timestamp

### Blacklist Model
- JWT token
- Expiration timestamp

## Error Handling

The application implements comprehensive error handling:
- Validation middleware for request data
- Authentication middleware for protected routes
- Try-catch blocks in controllers
- User-friendly error messages in responses
