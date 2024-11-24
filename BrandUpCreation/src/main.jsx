// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import App from "./App"; // Import the main App component
import "./index.css"; // Import the global CSS for the app

// Rendering the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    {/* Wrap App with BrowserRouter to enable routing */}
    <App />
  </BrowserRouter>
);
