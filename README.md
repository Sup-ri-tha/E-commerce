# *Ecommerce-Follow-Along*  

## *Project Description*  
A full-fledged e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project focuses on scalable backend services, secure user authentication, and modern frontend development.  

## *🚀 Milestone 1: Project Overview*  
- Introduction to the MERN stack and its benefits.  
- Overview of MongoDB for data modeling.  
- Importance of authentication for user security.  
- Live demonstration of the complete e-commerce application.  
- Explanation of backend-to-frontend communication.  
- Setting up the development environment.  
- Creating a basic Node.js server using Express.  
- Understanding REST API functionality.  
- Introduction to project folder structure.  
- Overview of upcoming milestones.  

## *🚀 Milestone 2: Project Setup and Login Page*  
- Organized frontend and backend directories.  
- Initialized a React application for UI development.  
- Set up a simple Node.js server.  
- Integrated Tailwind CSS for modern styling.  
- Designed and developed a responsive login page.  
- Implemented basic form handling in React.  
- Established GitHub repository with structured updates.  
- Defined MongoDB schema for authentication.  
- Explained project goals and expected features.  
- Live demonstration of UI and backend integration.  

## *🚀 Milestone 3: Backend Setup*  
- Defined backend folder structure for scalability.  
- Configured a Node.js server using Express.  
- Established a database connection with MongoDB.  
- Added error-handling middleware for debugging.  
- Implemented a basic API endpoint to test responses.  
- Used environment variables for sensitive data.  
- Installed necessary dependencies for backend development.  
- Validated database connectivity with error messages.  
- Introduced API testing tools like Postman.  
- Organized backend components into separate modules.  

## *🚀 Milestone 4: Creating User Model and Controller*  
- Designed a user schema with essential fields.  
- Created a User Controller to manage user operations.  
- Added authentication-related fields in the database.  
- Implemented a method to create and fetch users.  
- Integrated Multer for profile picture uploads.  
- Defined API routes for user-related actions.  
- Established a folder structure for backend models.  
- Validated user input before database insertion.  
- Stored uploaded files in a designated directory.  
- Enhanced backend organization for maintainability.  

## *🚀 Milestone 5: Building the Sign-Up Page*  
- Designed a clean and responsive sign-up page.  
- Included fields for user registration.  
- Implemented email and password validation.  
- Added error messages for invalid inputs.  
- Ensured mobile responsiveness.  
- Used Tailwind CSS for styling.  
- Enhanced UI consistency across components.  
- Connected frontend form with backend API.  
- Handled form submission and input validation.  
- Debugged validation logic for various edge cases.  

## *🚀 Milestone 6: Backend Endpoint for Secure Signup*  
- Created a secure signup API endpoint.  
- Encrypted user passwords using hashing techniques.  
- Stored only hashed passwords in the database.  
- Implemented input validation for secure registration.  
- Ensured data integrity during user signup.  
- Used middleware for error handling.  
- Optimized database queries for efficiency.  
- Prevented duplicate user entries in the database.  
- Protected sensitive user data with authentication.  
- Followed industry standards for password security.  

## *🚀 Milestone 7: Backend Endpoint for User Login*  
- Created an API for user login authentication.  
- Validated user credentials during login.  
- Retrieved user data securely from the database.  
- Used hashing techniques to verify passwords.  
- Returned appropriate responses for authentication failures.  
- Implemented error handling for login failures.  
- Protected endpoints against unauthorized access.  
- Enhanced security by avoiding plain-text passwords.  
- Provided feedback messages for incorrect credentials.  
- Ensured compliance with security best practices.  

## *🚀 Milestone 8: Creating a Card Component & Homepage*  
- Designed a reusable card component for products.  
- Displayed products dynamically using mapping.  
- Styled the homepage with a modern UI.  
- Ensured consistency across product displays.  
- Integrated product information into the frontend.  
- Optimized layout for better user experience.  
- Maintained a structured and scalable design.  
- Enhanced responsiveness for multiple devices.  
- Prepared for future product filtering and sorting.  
- Established a foundation for an interactive storefront.

  # Milestone-9
- Created a React form component to take user input for product details.
- Added input fields for product name, description, price, category, and stock quantity.
- Implemented file input to support multiple image uploads.
- Managed form state using React hooks.
- Connected the form with the backend API to store data in the database.
- Ensured form validation to prevent invalid submissions.
- Pushed the code to GitHub and updated the README file.

  # Milestone-10
- Developed an Express router to handle product-related API requests.
- Configured Multer to manage product image uploads and store file paths.
- Created a Mongoose schema to define product structure and enforce validations.
- Implemented email validation to ensure only valid sellers can add products.
- Integrated image uploads by storing file paths instead of actual images.
- Connected the product API with the database to store product details.
- Added error handling to prevent invalid product submissions.
- Mounted the /product route in index.js after authentication setup.

 # Milestone-11 & 12
- Connected the product form frontend to MongoDB.  
- Updated `products.js` to use the GET router for fetching data from MongoDB.  
- Passed retrieved data to `home.jsx` to display existing products.  
- Planned to implement Nodemailer in Milestone 12 but skipped it based on mentor's advice.  
- Modified the POST router to make the form functional, enabling new product uploads to the database.

# Milestone - 13
- Have created a update-product API endpoint in the backend
- Have created a frontend form to update the product
- Have learned how to connect the frontend to backend to update the product
- Have used useNavigate hook to go back to the home page after successfully updating the product.

# Milestone - 14
- Have created a delete product API endpoint
- Have added a button to the card in order to facitilate the delete function
- Have used axios in frontend to tell backend to delete that particular product
- After deletion fetching the rest of the products to update the home page

# Milestone - 15
- We have created a Navbar.jsx file in the navbar folder and exported it
- The file has been imported in app.jsx file and added to the top of the routes so that the navbar would be seen on every page.
- Have added the option to toggel navbar for smaller screens like mobile phones

# Milestone - 16
- Have created a jsx page to view each product in detail including all of its images.
- When user clicks on a product it redirects them to this page.
- Added a image carosoul to view all the images in a more organized way.
  
# Milestone - 17
- Created cart Schema
- Created cart route
- Created card controller

# Milestone - 18
- Created function to get products from cart
- created a route to get the products
- added authoriztion to prevent others from seeing the cart details

Milestone - 19
In this milestone we coded the frontend UI for cart products.

Key Features:
Have fetched the user cart data from the backend.
Have made the cart page and sucessfuly displayed each item in the cart.
Milestone - 20
In this milestone we have added the profile page section

Key Featuers:
Have created the backend to fetch the user profile data from the server
Have created the frontend profile page UI
Have error proofed the Address section by showing 'No Address Found' if address is missing
Milestone -21
In this milestone we have created the address page

Key Features:
Have created the frontend to add the address.
Have used state to sucessfully update the form upon user input.
Milestone - 22
In this milestone we have added the backend functionality to the address page

Key Features:
Have created a new route to add the address
Written the function which adds the new address to the database
Have connected frontend address page to the backend logic using axios
Have added a delete address functionality
Milestone - 23
In this milestone we have the functionality to place order

Key Features:
Have created a Place order button in the cart page to go to checkout
Have created select address page to display the available addresses to deliver the product
Have written the mongoose schema to store the order details.
Milestone - 24
In this Milestone we have added the order confirmation page

Key Features:
Have created the frontend to display the order confimation page
Have shown the addres, total price and the products in the order confirmation page.
Have added that page to the route for easy navigation
Milestone - 25
In this Milestone we have set up the backend for orders

Key Features:
Have set up a api to create the order
Have created the order model
Have added the route to confirm order
Milestone - 26
In this milestone we have set up the backed to get order details

Key Features:
Have created a controller to get all the user order data
Have added that controller to the order routes
Have added the order routes under the api '/orders'
Milestone - 27
In this milestone we created frontend to display all orders.

Key Features:
Have created order history frontend page
Have added it's navigatin in the navbar
Have updated the other files to show the order-history.
Milestone - 28
In this milestone we have added the concel option for placed orders

Key Features:
Have created the frontend to show the option to cancel the order
Have created the backend to handle the order cancellation
Have shown the cancel option only if the item is not canceled
