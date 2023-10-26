// Import the necessary modules and components from external files
import React from 'react';
import { Character } from './charactersSlice';

// Define the props interface for the CharacterCard component
interface CharacterProps {
  character: Character;
}

// Create a React functional component named CharacterCard
const CharacterCard: React.FC<CharacterProps> = ({ character }) => {

  // Define a function that returns an icon based on the character's status
  function getStateIcon(status: string) {
    if (status === 'Alive') {
      return <div className="icon-alive"></div>;
    } else if (status === 'Dead') {
      return <div className="icon-dead"></div>;
    } else {
      return <div className="icon-unknown"></div>;
    }
  }

  // Render the character card with image, name, status, species, and origin
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-details">
        <h2>{character.name}</h2>
        <div className="character-status-species">
          {/* Call the getStateIcon function to display the status icon */}
          {getStateIcon(character.status)}
          {character.species}
        </div>
        <p>{character.origin.name}</p>
      </div>
    </div>
  );
};

// Export the CharacterCard component for use in other parts of the application
export default CharacterCard;
