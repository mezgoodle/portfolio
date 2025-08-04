import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  onClick: () => void;
}

export default function Card({
  title,
  description,
  imageUrl,
  tags,
  onClick,
}: CardProps) {
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-teal-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
