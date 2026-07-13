# 🛒 Enterprise E-Commerce & Analytics Platform

A full-stack **Enterprise E-Commerce & Analytics Platform** built using the **MERN Stack**. The application provides a modern online shopping experience with secure authentication, product management, order processing, payment integration, and a powerful admin dashboard featuring business analytics.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login
* JWT Authentication & Authorization
* Secure Password Encryption
* User Profile Management
* Browse Products
* Search & Filter Products
* Product Categories
* Product Details Page
* Shopping Cart
* Wishlist
* Checkout Process
* Razorpay Payment Integration
* Order History
* Order Tracking
* Product Reviews & Ratings
* Responsive Design

### 🛠️ Admin Features

* Secure Admin Dashboard
* Product Management (CRUD)
* Category Management
* User Management
* Order Management
* Inventory Management
* Sales Analytics
* Revenue Dashboard
* Customer Statistics
* Low Stock Alerts
* Recent Orders
* Sales Reports

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Context API

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* Multer
* Cloudinary
* Razorpay
* Nodemailer

---

# 📁 Project Structure

```
Enterprise-Ecommerce/

│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🔐 Authentication

* JWT Based Authentication
* Protected Routes
* Role-Based Authorization
* Password Hashing using bcrypt
* Secure HTTP Cookies (optional)

---

# 💳 Payment Gateway

Integrated with **Razorpay** for secure online payments.

Features:

* Order Creation
* Payment Verification
* Successful Payment Handling
* Failed Payment Handling

---

# 📊 Analytics Dashboard

The admin dashboard includes:

* Total Revenue
* Total Orders
* Total Users
* Total Products
* Monthly Sales Graph
* Top Selling Products
* Category-wise Sales
* Recent Orders
* Inventory Status

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/enterprise-ecommerce.git
```

Move into the project folder:

```bash
cd enterprise-ecommerce
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_key

RAZORPAY_KEY_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email

EMAIL_PASS=your_password
```

Run backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🌐 Environment Variables

### Backend

```
PORT

MONGO_URI

JWT_SECRET

RAZORPAY_KEY_ID

RAZORPAY_KEY_SECRET

CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

EMAIL_USER

EMAIL_PASS
```

---

# 📸 Screenshots

Add screenshots here.

Example:

```
Home Page

Product Page

Admin Dashboard

Cart

Checkout

Analytics Dashboard
```

---

# 🚀 Deployment

### Frontend

* Vercel
* Netlify

### Backend

* Render
* Railway

### Database

* MongoDB Atlas

---

# 🔮 Future Improvements

* AI Product Recommendation System
* AI Chatbot
* Coupon & Discount System
* Multi-Vendor Marketplace
* Live Order Tracking
* Invoice PDF Generation
* Multi-Language Support
* Dark Mode
* Push Notifications
* Progressive Web App (PWA)
* Email Notifications
* SMS Notifications

---

# 🧪 API Testing

Recommended tools:

* Postman
* Thunder Client

---

# 📚 Learning Objectives

This project demonstrates:

* Full Stack MERN Development
* REST API Design
* JWT Authentication
* MongoDB Database Design
* Payment Gateway Integration
* Cloud Image Storage
* Admin Dashboard Development
* Analytics & Reporting
* Responsive UI Design
* Enterprise-Level Project Structure

---

# 👨‍💻 Author

**Ankit Umath**

* GitHub: https://github.com/ankitumath
* LinkedIn: https://www.linkedin.com/in/ankit-umath-26b928328/

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

Feedback and contributions are always welcome!
