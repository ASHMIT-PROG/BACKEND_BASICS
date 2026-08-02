### API (Application Programming Interface)

Simple language me:

**API ek bridge hai jo do different software/applications ko aapas me baat karne deta hai.**

Jaise real life example:

Imagine a **restaurant**:

* **You (Customer)** → request bhejte ho ("mujhe pizza chahiye")
* **Waiter (API)** → tumhari request kitchen tak pahuchata hai
* **Kitchen (Server)** → pizza banata hai
* **Waiter (API)** → pizza tumhare paas laata hai

Tumhe nahi pata kitchen me kaise pizza bana, bas tumne order diya aur result mil gaya.

Similarly:

```
Frontend (User Interface)
        |
        | Request
        ↓
       API
        |
        ↓
Backend (Server + Database)
        |
        | Response
        ↓
Frontend
```

---

## In Web Development

Suppose tum ek **Instagram clone** bana rahe ho.

Frontend:

```
React
```

Backend:

```
Node.js + Express
```

Database:

```
MongoDB
```

React directly MongoDB se baat nahi karega.

React API ko request bhejega:

Example:

### User login

Frontend sends:

```
POST /login
```

with data:

```json
{
 "email":"abc@gmail.com",
 "password":"12345"
}
```

API ye request backend tak bhejega.

Backend:

1. Database me user check karega
2. Password verify karega
3. Response bhejega

Response:

```json
{
 "message":"Login successful",
 "token":"xyz123"
}
```

---

## API ke main parts

### 1. Endpoint

API ka address.

Example:

```
https://api.instagram.com/users
```

ya Express me:

```javascript
app.get("/users",(req,res)=>{
    res.send("All users")
})
```

Yaha:

```
/users
```

endpoint hai.

---

### 2. Request

Client kya bhej raha hai.

Example:

```
GET /users
```

Matlab:
"mujhe users ka data chahiye"

---

### 3. Response

Server kya return karta hai.

Example:

```json
[
 {
  "name":"Ashmit",
  "age":21
 }
]
```

---

## API Methods (HTTP Methods)

### GET

Data lene ke liye

Example:

```
GET /users
```

"Saare users do"

---

### POST

Naya data create karne ke liye

Example:

```
POST /users
```

Body:

```json
{
"name":"Rahul"
}
```

"Naya user banao"

---

### PUT

Existing data update karne ke liye

```
PUT /users/1
```

"User 1 ka data update karo"

---

### DELETE

Data delete karne ke liye

```
DELETE /users/1
```

"User 1 delete karo"

---

## Node.js + Express me API example

```javascript
const express = require("express");

const app = express();

app.use(express.json());


app.get("/user",(req,res)=>{
    res.json({
        name:"Ashmit",
        age:21
    });
});


app.listen(3000);
```

Ab browser me:

```
localhost:3000/user
```

hit karoge.

Response:

```json
{
"name":"Ashmit",
"age":21
}
```

Ye ek API hai.

---

## Real world APIs examples

### Google Maps API

Tumhari app Google Maps ko request bhejti hai:

```
Give location of Delhi
```

Google response deta hai:

```
Latitude:
Longitude:
Map data
```

---

### Payment API

Amazon use karta hai:

```
Razorpay API
Stripe API
```

Payment process karne ke liye.

---

### Weather API

App request bhejti hai:

```
Give weather of Bangalore
```

API response:

```json
{
"temperature":30,
"condition":"Sunny"
}
```

---

## API ka main purpose

Without API:

```
Frontend  ❌  Database
```

With API:

```
Frontend
    |
    |
   API
    |
    |
Backend
    |
Database
```

API security, data control aur communication provide karta hai.

---


```
React
  |
  | HTTP Request (API call)
  ↓
Express API
  |
  ↓
Controller
  |
  ↓
Model
  |
  ↓
MongoDB
```

Ye MERN stack ka basic flow hai.
---------------------------------------------
                                              REST API 
REST API is a way to build APIs where resources are accessed using HTTP methods like GET, POST, PUT, DELETE and data is exchanged between client and server usually in JSON format.

React
 |
 | API Request
 ↓
Express Routes
 |
 ↓
Controller
 |
 ↓
Model
 |
 ↓
MongoDB
 |
 ↓
JSON Response
 |
 ↓
React UI


GET -> server se data lena ho frontend pe
POST => frontend se server pe data send karna ho
PATCH => server pe data already hai aur uss data ko update karna hai
DELETE => server pe data hai aur usse delete karna hai

