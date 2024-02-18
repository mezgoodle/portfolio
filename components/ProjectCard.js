import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, slug, cookingTime, thumbnail } = project.fields;
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt={title}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>{cookingTime} minutes to make</p>
        </div>
        <div className="actions">
          <Link href={`/projects/${slug}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
}
