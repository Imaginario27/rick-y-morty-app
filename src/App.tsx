// Import the necessary CSS file and components.
import './App.css';
import CharacterGrid from './features/characters/CharactersGrid';
import Header from './components/Header';
import ScrollUpButton from './components/ScrollUpButton';

// Define the main application component, named App.
function App() {
    return (
        // The top-level container with an 'id' of "app".
        <div id="app">

            {/* Render the ScrollUButton component, which displays the scroll to top button. */}
            <ScrollUpButton />

            {/* A container div with a class of "container". */}
            <div className="container">
                {/* Render the Header component, which contains the app's title. */}
                <Header />

                {/* Render the CharacterGrid component, which displays the grid of characters. */}
                <CharacterGrid />                
            </div>
        </div>
    );
}

// Export the App component as the default export for this module.
export default App;