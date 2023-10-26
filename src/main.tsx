// Import necessary React libraries and components
import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM library
import { Provider } from "react-redux"; // Import Provider component for Redux
import store from "./app/store"; // Import the Redux store configuration
import App from "./App"; // Import the main application component
import "./App.css"; // Import the CSS styles for the application

// Use ReactDOM's createRoot function to render the React application in the "root" element
ReactDOM.createRoot(document.getElementById("root")!).render(
    // Use React.StrictMode to perform additional checks and optimizations during development
    <React.StrictMode>
        {/* Wrap the entire application in the Redux Provider component, providing it with the Redux store */}
        <Provider store={store}>
            {/* Render the main application component */}
            <App />
        </Provider>
    </React.StrictMode>
)