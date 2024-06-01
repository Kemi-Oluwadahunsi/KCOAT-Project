# KCOAT Fashion Store

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
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398531/landingpage_zuvtid.png" alt="landingpage" />
  
- **Feedback Section**: Allows customers to provide feedback.
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398523/feedbackhomepage_pbvhgz.png" alt="feedback" />
  
- **User Authentication**: Secure login and signup pages.
- **Password Management**: Functionality for forgetting and resetting passwords.
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716399048/forget_xi4rco.png" alt="forget" width="600"/>    <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716399049/reset_achbvs.png" alt="reset" width="600"/>
- **Product Catalog**: Displays all products with categories for men and women, and sub-categories including wears, shoes & bags, and accessories.
- **Product Filtering and Search**: Filter by price and search by keyword, title, and price.
- **Single Product Page**: Detailed view of a single product.
- **Contact Page**: Form submission using the EmailJS library.
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398516/contact_hpsckz.png" alt="contact" />
  
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
  
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398524/signup_rcxtci.png" alt="signup" />
  
- Use the login page to access your account.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398525/loginpage_xxm1cs.png" alt="login" />
  
- Product Browsing and Filtering, browse products by category and sub-category.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398520/productspage_w01num.png" alt="productspage" />
  
- Use the search bar to find products by keyword, title, or price.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398516/searchfunc_vr93q0.png" alt="search" />
  
- Filter products by price range.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398523/filterbyprice_lmbhms.png" alt="filter" />
  

### Shopping Cart and Checkout
- Click on a product card on the product catalog page.
   
- Sends clicked product details to the single product page where products can be added to the cart.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398516/singleproductpage_mkqzdd.png" alt="singleproduct" />
  
- The cart item quantity is updated on the header.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716399923/quantity-update_s1gkv2.png" alt="cartquantity" />
  
- View your cart by clicking on the cart icon on the header. Users can update quantities, remove a single item, or clear a cart.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398519/cart_fkrb10.png" alt="cart" />
  
- A logged-in user proceeds to the checkout page and completes the payment process using Stripe, while a user not logged in is prompted to log in before proceeding to checkout.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398521/checkout_fiyolr.png" alt="checkout" />

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398522/login_prompt_x92mji.png" alt="loginprompt" />
   
  
  ### User Profile
- On registration, a user has a user profile setup. After successful login, a user has access to the user profile.
  
  <img src="https://asset.cloudinary.com/dee9teadk/a173767a1c888e46fe8f49921e1e18a1" alt="userprofile" />

- Users can update their profile details by clicking the update button. Fills out necessary details and the user profile is updated accordingly.
  
  <img src="https://asset.cloudinary.com/dee9teadk/3be0177f25c3471e632db38321e4b7bd" alt="editprofile" />
  
  
### Admin Panel
- Login to the admin panel using admin credentials.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398521/adminlogin_kyufxu.png" alt="adminlogin" />
  
- Manage products, customers, feedback, and sales from the admin dashboard.

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398517/productsadmin_fzyzk5.png" alt="adminproducts" />

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398516/customersadmin_bjb1qr.png" alt="admincustomer" />

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398516/salesadmin_ecnaxx.png" alt="adminsales" />
  

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

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398517/productsadmin_fzyzk5.png" alt="adminproducts" />

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398522/addnewproductadmin_zyh4ok.png" alt="addnewproduct" />

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398524/editproductadmin_xpdg9k.png" alt="editproductadmin" />

  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716398515/deleteproductadmin_khcapj.png" alt="delete" />
  
- Customer Management: View and manage customers.
  
- Feedback Management: View and manage feedback.
  
- Sales Management: View and manage sales.
  

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
