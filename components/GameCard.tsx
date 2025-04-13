"use client";

import React, { useState } from "react";
import { IoStarOutline, IoStar } from "react-icons/io5";
import Image from "next/image";
import CustomImageModal from "@/components/CustomImageModal";
import { BsImages } from "react-icons/bs";

interface Game {
  id: number;
  name: string;
  review: string;
  rating: number;
  num_of_achievements: number;
  total_achievements: number;
  link_to_game: string;
  images: string[];
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const maxRating = 5;
  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    if (i < game.rating) {
      stars.push(<IoStar key={i} className="text-warning" />);
    } else {
      stars.push(<IoStarOutline key={i} className="text-warning" />);
    }
  }

  const firstImage =
    game.images && game.images.length > 0 ? game.images[0] : null;
  const imageCount = game.images ? game.images.length : 0;

  return (
    <>
      <div className="card h-100 shadow-sm">
        {firstImage && (
          <div
            onClick={game.images.length > 0 ? openModal : undefined}
            style={{
              cursor: game.images.length > 0 ? "pointer" : "default",
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
            }}
            className="bg-light"
          >
            <Image
              src={firstImage}
              alt={game.name}
              layout="fill"
              objectFit="cover"
              className="card-img-top"
            />
            {imageCount > 1 && (
              <span
                className="badge bg-dark text-white position-absolute top-0 end-0 m-2 rounded-pill d-flex align-items-center"
                style={{ zIndex: 1 }}
                title={`${imageCount} images available`}
              >
                <BsImages className="me-1" />
                {imageCount}
              </span>
            )}
          </div>
        )}

        {/* Тіло картки */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{game.name}</h5>
          <p className="card-text">{game.review}</p>
          <div className="mt-auto">
            <p className="card-text mb-1">Rating: {stars}</p>
            <p className="card-text mb-2">
              Achievements: {game.num_of_achievements} /{" "}
              {game.total_achievements}
            </p>
            <a
              href={game.link_to_game}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-100"
            >
              Play Game
            </a>
          </div>
        </div>
      </div>

      <CustomImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={game.images}
        gameName={game.name}
      />
    </>
  );
};

export default GameCard;
