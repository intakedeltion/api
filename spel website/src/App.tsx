import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './pages/cards/card';

interface Game {
  id: number;
  name: string;
  requirements: string;
  released: string;
  rating: number;
  background_image: string;
}

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // current pagina
  const [totalPages, setTotalPages] = useState<number>(1); // Totaal number pagina's

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  // fetch all data from API  rawg.io
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.rawg.io/api/games', {
        params: {
          key: '18d8dc115d954615a6fe8522598e8a97',
          page_size: 20,
          page: currentPage,
          ordering: 'rating',
        },
      });

      setGames(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 20));
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  };
  //handle prev page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="app container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-8">Game List</h1>
      <div className="game-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={{
              id: game.id,
              name: game.name,
              releaseDate: game.released,
              rating: game.rating,
              imageUrl: game.background_image,
            }}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          className={`px-3 py-2 mx-1 border border-gray-300 rounded-md focus:outline-none ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className={`px-4 py-2 mx-1 border border-gray-300 bg-blue-500 rounded-md focus:outline-none}`}>
          <a>{currentPage}</a>
        </div>
        <button
          onClick={handleNextPage}
          className={`px-3 py-2 mx-1 border border-gray-300 rounded-md focus:outline-none ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
