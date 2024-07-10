
import React from 'react';

interface Game {
    id: number;
    name: string;
    releaseDate: string;
    rating: number;
    imageUrl: string;
}

interface CardProps {
    game: Game;
}

const GameCard: React.FC<CardProps> = ({ game }) => {
    const ratingColor = game.rating > 2.5 ? 'bg-green-400 text-black' : 'bg-red-400 text-black';

    return (
        <div className="game-card bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 space-y-4 flex flex-col justify-between">
            <img
                src={game.imageUrl}
                alt={game.name}
                className="w-full h-60 object-cover rounded-lg"
            />
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{game.name}</h2>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                <span>Release Date: {game.releaseDate}</span>
                <span className={`font-bold px-2 py-1 rounded-lg ${ratingColor}`}>{game.rating}</span>
            </div>
        </div>
    );
};

export default GameCard;
