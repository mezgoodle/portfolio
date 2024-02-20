import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, slug, cookingTime, thumbnail } = project.fields;
  return (
    <div className="card">
      {thumbnail.fields.file.url && (
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt={title}
          className="img-fluid"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      )}
      <div>
        <div>{title}</div>
        <p>{cookingTime}</p>
      </div>
    </div>
  );
}
