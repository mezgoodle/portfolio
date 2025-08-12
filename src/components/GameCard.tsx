import Card from "./Card";
import { FaTrophy } from "react-icons/fa";

interface GameCardProps extends React.ComponentProps<typeof Card> {
  totalNumberOfAchievements: number;
  myNumberOfAchievements: number;
}

export default function GameCard({
  totalNumberOfAchievements,
  myNumberOfAchievements,
  ...cardProps
}: GameCardProps) {
  const rawPercentage =
    totalNumberOfAchievements > 0
      ? (myNumberOfAchievements / totalNumberOfAchievements) * 100
      : 0;
  const progressPercentage = Math.max(0, Math.min(100, rawPercentage));

  return (
    <div className="relative group">
      <Card {...cardProps} />

      <div
        className="
        absolute bottom-4 right-4 
        bg-gray-900/80 backdrop-blur-sm 
        p-3 rounded-lg 
        text-white shadow-lg 
        w-40
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
        pointer-events-none group-hover:pointer-events-auto
      "
      >
        <div className="flex items-center gap-2 mb-2">
          <FaTrophy className="text-yellow-400" />
          <h4 className="font-bold text-sm">Досягнення</h4>
        </div>

        {/* Прогрес-бар */}
        <div className="w-full bg-gray-600 rounded-full h-2.5">
          <div
            className="bg-teal-400 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progressPercentage)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Achievement progress"
          ></div>
        </div>

        <p className="text-right text-xs mt-1 text-gray-300">
          {myNumberOfAchievements} / {totalNumberOfAchievements}
        </p>
      </div>
    </div>
  );
}
