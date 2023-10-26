// Import necessary dependencies and components from external files
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters, selectCharacters, selectError } from './charactersSlice';
import { AppDispatch } from '../../app/store';
import CharacterCard from './Character';
import CharacterSearch from './CharactersSearch';
import { Character } from './charactersSlice';
import InfiniteScroll from 'react-infinite-scroll-component';

// Define a functional React component called CharacterGrid
const CharacterGrid: React.FC = () => {
    // Retrieve characters and error from the Redux store
    const characters = useSelector(selectCharacters);
    const error = useSelector(selectError);
    const dispatch: AppDispatch = useDispatch();

    // Define and initialize state variables for search, pagination, and character data
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [page, setPage] = useState(1);
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);

    // Use the useEffect hook to fetch characters when the page or store changes
    useEffect(() => {
        dispatch(fetchCharacters(page));
    }, [dispatch, page]);

    // Use another useEffect to append newly loaded characters to the existing character data
    useEffect(() => {
        // Create a set of character IDs to check for duplicates
        const existingCharacterIds = allCharacters.map((character) => character.id);
        const newCharacters = characters.filter(
        (character) => !existingCharacterIds.includes(character.id)
        );

        // Append newly loaded characters to the existing array
        setAllCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    }, [characters, allCharacters, page]);

    // Filter characters based on the search term, and assign random keys to each character
    const filteredCharacters = allCharacters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Add a random key to the character
    const filteredCharactersWithRandomKeys = filteredCharacters.map((character) => {
        const randomKey = Math.random().toString(36).substring(7);
        return { ...character, randomKey };
    });

    // Function to load more characters when the InfiniteScroll component triggers it
    const loadMore = () => {
        if (searchTerm === '') {
        setPage(page + 1);
        }
    };

    // Render the component's JSX structure
    return (
        <div className="character-grid-container">
        {/* Display the character search input component */}
        <CharacterSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="character-grid-title-container">
            <hr />
            <h1 className="character-grid-title">Lista de personajes</h1>
            <hr />
        </div>
        {/* Implement the InfiniteScroll component for lazy loading */}
        <InfiniteScroll
            dataLength={filteredCharactersWithRandomKeys.length}
            next={loadMore}
            hasMore={searchTerm === ''} // Only allow loading more if searchTerm is empty
            loader={
            searchTerm === '' ? ( // Check if searchTerm is empty
                error ? ( // If there's an error, display the error message
                <h4 className="notification error">{error}</h4>
                ) : (
                <h4 className="notification">Loading...</h4>
                )
            ) : null // If searchTerm is not empty, don't render anything
            }
        >
            {filteredCharactersWithRandomKeys.length === 0 ? (
            <h4 className="notification">No se ha encontrado ningún personaje...</h4>
            ) : (
            <div className="character-grid">
                {/* Map and render the CharacterCard component for each character */}
                {filteredCharactersWithRandomKeys.map((character) => (
                <CharacterCard key={character.randomKey} character={character} />
                ))}
            </div>
            )}
        </InfiniteScroll>
        </div>
    );
};

// Export the CharacterGrid component as the default export
export default CharacterGrid;