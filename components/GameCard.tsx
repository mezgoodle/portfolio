import { IoStarOutline, IoStar } from "react-icons/io5";
import Image from "next/image";

interface Game {
  id: number;
  name: string;
  review: string;
  rating: number;
  num_of_achievements: number;
  total_achievements: number;
  link_to_game: string;
  link_to_image: string; // Додано поле для шляху до зображення
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const maxRating = 5;
  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    if (i < game.rating) {
      stars.push(<IoStar key={i} />);
    } else {
      stars.push(<IoStarOutline key={i} />);
    }
  }
  return (
    <div className="card">
      {game.link_to_image && (
        <Image
          src={game.link_to_image}
          alt={game.name}
          className="card-img-top"
          width={200}
          height={200}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <p className="card-text">{game.review}</p>
        <p className="card-text">Rating: {stars} </p>
        <p className="card-text">
          Achievements: {game.num_of_achievements} / {game.total_achievements}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
