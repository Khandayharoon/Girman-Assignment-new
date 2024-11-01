
# Girman Assignment

A simple RESTful application built with **Node.js**, **Express**, and **MongoDB**. It supports creating and retrieving user profiles, using **Mongoose** for data modeling and **Zod** for request validation. The project is written in **TypeScript** for enhanced code quality.

---

## Table of Contents  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [License](#license)  

---

## Features ✨  
- **Create User Profiles:** Add user profiles with structured validation.  
- **Retrieve Users by First Name:** Fetch profiles by querying with the user's first name.  
- **MongoDB Integration:** Seamless data storage with MongoDB and Mongoose ORM.  
- **Schema Validation:** Zod ensures accurate data validation.  
- **CORS Support:** Allows cross-origin API requests.  
- **TypeScript:** Improved type safety and code maintainability.

---

## Technologies Used 🛠  
- **Node.js:** JavaScript runtime environment  
- **Express:** Fast and minimalist web framework for Node.js  
- **MongoDB:** NoSQL database for flexible data handling  
- **Mongoose:** MongoDB object modeling for Node.js  
- **Zod:** Type-safe schema validation for request bodies  
- **TypeScript:** JavaScript with static types  
- **dotenv:** Manage environment variables  
- **CORS:** Middleware for cross-origin requests  

---

## Installation 🚀  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Khandayharoon/Girman-Assignment.git
   cd Girman-Assignment
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Create a `.env` file:**  
   Add your MongoDB connection string and port in the `.env` file:  
   ```
   MONGODB_URI=<Your_MongoDB_Connection_String>
   PORT=3000
   ```

4. **Start the server:**  
   ```bash
   npm run dev
   ```

---

## Usage 🧑‍💻  

- Use **Postman** or **cURL** to interact with the API.  
- Ensure that MongoDB is running locally or remotely and connected correctly.

---

## API Endpoints 📌  

- **POST /api/users** – Create a new user profile  
  **Request Body:**  
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "age": 25
  }
  ```

- **GET /api/users/:firstName** – Retrieve user profiles by first name  

---

## License 📄  
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.  

---

## Contribution Guidelines 🤝  
Feel free to open issues or submit pull requests if you want to improve this project!
