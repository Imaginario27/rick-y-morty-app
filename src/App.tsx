// Import the necessary CSS file and components.
import './App.css';
import CharacterGrid from './features/characters/CharactersGrid';
import Header from './components/Header';

// Define the main application component, named App.
function App() {
    return (
        // The top-level container with an 'id' of "app".
        <div id="app">
            {/* A container div with a class of "container". */}
            <div className="container">
                {/* Render the Header component, which likely contains the app's title or navigation. */}
                <Header />
                
                {/* Render the CharacterGrid component, which may display a grid of characters. */}
                <CharacterGrid />
            </div>
        </div>
    );
}

// Export the App component as the default export for this module.
export default App;