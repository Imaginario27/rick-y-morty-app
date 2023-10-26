import React from 'react';

// Define the properties expected by the CharacterSearch component
interface CharacterSearchProps {
    searchTerm: string;                    // The current search term in the input field
    onSearchChange: (searchTerm: string) => void; // A callback function to handle search term changes
}

// Define the CharacterSearch component as a functional component
const CharacterSearch: React.FC<CharacterSearchProps> = ({ searchTerm, onSearchChange }) => {
    return (
        // Render an input field for character search
        <input
            className="character-search-field"   // CSS class for styling
            type="text"                         // Input type as text
            placeholder="Busca personajes..."    // Placeholder text
            value={searchTerm}                  // Set the input value to the current search term
            onChange={(e) => onSearchChange(e.target.value)} // Handle input changes and call the provided callback
        />
    );
};

// Export the CharacterSearch component for use in other parts of the application
export default CharacterSearch;