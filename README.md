# 372-Term-Project

# StudySync+

StudySync+ is a full-stack web application designed to help students and self-learners organize their study tasks, track progress, and stay motivated.  
With built-in task management and daily motivational quotes, StudySync+ makes consistent learning both productive and inspiring.

---

## Project Overview

### Purpose
Many students struggle to maintain focus and consistency while studying independently.  
StudySync+ solves this by offering a structured task manager and daily motivational content.

### Intended Users
- Students  
- Online learners  
- Anyone aiming to improve their study habits

---

## Core Features

- User authentication (register, log in, log out) with JWT  
- Create, view, edit, and delete study tasks  
- Track task completion and study progress  
- Fetch and display motivational quotes from the ZenQuotes API  
- Persistent data storage using PostgreSQL  
- Responsive design for both desktop and mobile devices  

---

## Technologies and Tools

| Layer | Stack |
|-------|--------|
| Frontend | React, React Router, Fetch API |
| Backend | Node.js, Express |
| Database | PostgreSQL (hosted on Neon) |
| External API | ZenQuotes API |
| Authentication | JSON Web Token (JWT) |
| Deployment | Backend: Render, Frontend: Vercel |

---

## Database Schema

### Users Table

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL PRIMARY KEY | Unique user ID |
| username | VARCHAR | User’s display name |
| email | VARCHAR | User’s email address |
| password_hash | VARCHAR | Encrypted password |

### Tasks Table

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL PRIMARY KEY | Unique task ID |
| user_id | INT | References Users.id |
| title | VARCHAR | Task title |
| description | TEXT | Task details |
| due_date | DATE | Deadline |
| completed | BOOLEAN | Task completion status |

---

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/register | Register a new user |
| POST | /api/login | Authenticate user and return JWT |
| GET | /api/tasks | Get all tasks for the logged-in user |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |
| GET | /api/quote | Fetch a random motivational quote from ZenQuotes API |

---

## Deployment

- Frontend: Vercel  
- Backend: Render  
- Database: Neon  

---

## Future Enhancements

- Study analytics dashboard  
- Daily reminders and notifications  
- Social study groups or friend system  
- Dark mode toggle  

---

## Contributing

Contributions, issues, and feature requests are welcome.  
Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- ZenQuotes.io for motivational quote data  
- Render, Vercel, and Neon for hosting services  

---

Study smarter. Stay motivated. Sync your success with StudySync+.
