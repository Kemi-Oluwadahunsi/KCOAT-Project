# KCoat Fashion Store

Welcome to KCoat Fashion Store, an e-commerce web application built using ReactJS, TailwindCSS, NodeJS, ExpressJS, and MySQL. This application provides a comprehensive shopping experience for customers with features such as user authentication, product filtering, shopping cart, and payment integration. Additionally, it includes a full-fledged admin panel for managing products, customers, feedback, and sales.

### Deployed using [Netlify](netlify.com).   Live-Link: htpps://kcoat.netlify.app

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints-consumed)
- [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

### Customer Facing
- **Landing Page**: A welcoming page with a carousel hero section.
  <img src="" alt="" />
  
- **Feedback Section**: Allows customers to provide feedback.
  <img src="" alt="" />
  
- **User Authentication**: Secure login and signup pages.
- **Password Management**: Functionality for forgetting and resetting passwords.
  <img src="" alt="" width="400"/>    <img src="" alt="" width="400"/>
- **Product Catalog**: Displays all products with categories for men and women, and sub-categories including wears, shoes & bags, and accessories.
- **Product Filtering and Search**: Filter by price and search by keyword, title, and price.
- **Single Product Page**: Detailed view of a single product.
- **Contact Page**: Form submission using the EmailJS library.
  <img src="" alt="" />
  
- **User Profile**: View and update the profile with photo upload functionality.
- **Cart Flow**: Add products to the cart, view a single product, checkout, and payment.
- **Payment Integration**: Secure payment processing with Stripe.

### Admin Panel
- **Admin Authentication**: Secure admin login.
- **Product Management**: Add new products, edit existing products, and delete products.
- **Customer Management**: Manage customer base.
- **Feedback Management**: View and manage feedback collected from customers.
- **Sales Management**: Manage and track sales.
- **Pagination**: Pagination for products and some admin pages.

## Tech Stack
- **Frontend**: ReactJS, TailwindCSS
- **Backend**: NodeJS, ExpressJS
- **Database**: MySQL
- **Libraries**: Axios, EmailJS, Stripe

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kemi-Oluwadahunsi/KCOAT-Project.git
   cd kcoat-fashion-store

2. **Install frontend dependencies**:
  ```bash
  cd client
  npm install
  ```

3. **Run the application**:
  ```bash
  npm run dev
  ```

## Usage

### User Registration and Login
- Navigate to the signup page to create a new account.
  
  <img src="" alt="" />
  
- Use the login page to access your account.

  <img src="" alt="" />
  
- Product Browsing and Filtering, browse products by category and sub-category.

  <img src="" alt="" />
  
- Use the search bar to find products by keyword, title, or price.

  <img src="" alt="" />
  
- Filter products by price range.

  <img src="" alt="" />
  

### Shopping Cart and Checkout
- Click on a product card on the product catalog page.

  <img src="" alt="" />
  
- Sends clicked product details to the single product page where products can be added to the cart.

  <img src="" alt="" />
  
- The cart item quantity is updated on the header.

  <img src="" alt="" />
  
- View your cart by clicking on the cart icon on the header. Users can update quantities, remove a single item, or clear a cart.
  
- A logged-in user proceeds to the checkout page and completes the payment process using Stripe, while a user not logged in is prompted to log in before proceeding to checkout.

  <img src="" alt="" />

  <img src="" alt="" />

   <img src="" alt="" />
   
  
  ### User Profile
- On registration, a user has a user profile setup. After successful login, a user has access to the user profile.
  
  <img src="" alt="" />

- Users can update their profile details by clicking the update button. Fills out necessary details and the user profile is updated accordingly.
  
  <img src="" alt="" />
  
  
### Admin Panel
- Login to the admin panel using admin credentials.

  <img src="" alt="" />
  
- Manage products, customers, feedback, and sales from the admin dashboard.

  <img src="" alt="" />

  <img src="" alt="" />

## API Endpoints consumed

## Authentication
POST /baseUrl/register - Register a new user
POST /baseUrl/login - Login a user
POST /admin/login - Admin login authentication

## Products
GET /baseUrl/products - Get all products
GET /baseUrl/products/:id - Get a single product by ID
POST /baseUrl/products - Add a new product (Admin only)
PUT /baseUrl/products/:id - Update a product (Admin only)
DELETE /baseUrl/products/:id - Delete a product (Admin only)

## User Profile
GET /baseUrl/user-profile
PUT /baseUrl/user-profile/:customerId

## Admin Panel
- Product Management: View, add, edit, and delete products.

  <img src="" alt="" />

  <img src="" alt="" />

  <img src="" alt="" />

  <img src="" alt="" />
  
- Customer Management: View and manage customers.

  <img src="" alt="" />
  
- Feedback Management: View and manage feedback.

  <img src="" alt="" />
  
- Sales Management: View and manage sales.

  <img src="" alt="" />
  

## Contributing
We welcome contributions! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.
  
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries or issues, please contact us at kcoatstyle@outlook.com.

Thank you for using KCoat Fashion Store! We hope you have a great experience.
