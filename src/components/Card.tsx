import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  linkUrl?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  imageUrl,
  tags,
  linkUrl,
  onClick,
}: CardProps) {
  const CardContent = (
    <div
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col transition-transform duration-300 ${
        linkUrl ? "group-hover:scale-105" : "hover:scale-105"
      }`}
    >
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        <p className="text-gray-400 mb-4 flex-grow">
          {linkUrl && description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
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

  if (linkUrl) {
    return (
      <Link href={linkUrl} className="block group">
        {CardContent}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {CardContent}
    </div>
  );
}
