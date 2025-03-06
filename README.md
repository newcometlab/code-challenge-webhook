# Webhook Backend with Node.js, Express.js, TypeScript, and MongoDB

Backend built with Node.js, Express.js, TypeScript, and MongoDB. It provides a webhook endpoint that accepts any type of data (JSON, plain text, form data, etc.) and stores it as plain text in a MongoDB database.

---

## **Prerequisites**
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

## **Setup**

### 1. Clone the Repository
```bash
git clone https://github.com/newcometlab/code-challenge-webhook.git
cd code-challenge-webhook
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```
MONGO_URI=mongodb://localhost:27017/mydb
PORT=3000
```

- Replace `mongodb://localhost:27017/mydb` with your MongoDB connection string.
- Replace `3000` with your desired port number.

### 4. Start the Development Server
```bash
npm run dev
```

The server will start at `http://localhost:3000`.

---

## **API Endpoints**

### **Webhook Endpoint**
- **URL**: `/webhook`
- **Method**: `POST`
- **Description**: Accepts any type of data and stores it in MongoDB as plain text.
- **Request Headers**:
  - `Content-Type`: `application/json`, `text/plain`, or `application/x-www-form-urlencoded`
- **Request Body**:
  - JSON, plain text, or form data.
- **Response**:
  - Success: `200 OK` with the saved data.
  - Error: `500 Internal Server Error` with an error message.

---

## **Usage Examples**

### 1. Send JSON Data
```bash
curl -X POST http://localhost:3000/webhook \
-H "Content-Type: application/json" \
-d '{"event": "user.created", "payload": {"userId": "123", "email": "user@example.com"}}'
```

### 2. Send Plain Text
```bash
curl -X POST http://localhost:3000/webhook \
-H "Content-Type: text/plain" \
-d "Hello, this is plain text!"
```

### 3. Send Form Data
```bash
curl -X POST http://localhost:3000/webhook \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "name=John&age=30"
```

---

## **Scripts**
- **`npm run dev`**: Start the development server using `nodemon` and `ts-node`.
- **`npm run build`**: Compile TypeScript files to JavaScript in the `dist` folder.
- **`npm start`**: Start the production server using the compiled JavaScript files.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
