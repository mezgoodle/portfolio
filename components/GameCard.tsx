interface Game {
  id: number;
  title: string;
  progress: string;
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text">Прогрес: {game.progress}</p>
      </div>
    </div>
  );
};

export default GameCard;
