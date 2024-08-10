import dotenv from'dotenv';
import express from 'express';
import { initialise } from '../app.js';

// Initialize environment variables
dotenv.config();

// Create an Express app
const app = express();

// Initialize the app (set up routes, middleware, etc.)
initialise(app);

// Export the app for Vercel to use as a serverless function
export default app;






// import dotenv from'dotenv';
// import express from 'express';
// import { initialise } from '../app.js';

// //initialisize environment variable 
// dotenv.config();

// // Creation of express app.
// const app = express();

// //Assigning a port 4000
// const port = process.env.PORT;
// initialise(app);

// //Display Ports
// app.listen(port, ()=> console.log(`Server running on port ${port}`));