# Sustainability App 🌱
> **Note:** This project currently doesn't use environment variables (.env).

A full-stack web application designed to track and manage sustainable actions. Users can log their eco-friendly activities, assign points to these actions, and track their sustainability journey over time.

## Features
- Track sustainable actions with dates and point values
- Interactive dashboard to view all sustainable activities
- Add, edit, and delete sustainable actions
- Points system to gamify eco-friendly behaviors

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- SQLite (default database)

### Frontend
- React
- Modern JavaScript (ES6+)
- CSS for styling

## Installation & Setup Guide

### Backend Setup

1. Create and activate a Python virtual environment:
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# For Windows:
.\venv\Scripts\activate
# For macOS/Linux:
source venv/bin/activate
```

2. Install backend dependencies:
```bash
cd backend
pip install -r requirements.txt
```

3. Run database migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node dependencies:
```bash
npm install
```

## Running the Application (Development Mode)

### Start the Backend Server

1. Make sure your virtual environment is activated
2. Navigate to the backend directory:
```bash
cd backend
```

3. Start the Django development server:
```bash
python manage.py runserver
```
The backend server will start at `http://localhost:8000`

### Start the Frontend Development Server

1. Open a new terminal
2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Start the development server:
```bash
npm run dev
```
The frontend development server will start at `http://localhost:3000`
