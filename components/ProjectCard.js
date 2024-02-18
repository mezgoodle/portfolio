import Link from "next/link";

export default function ProjectCard({ project }) {
  const { title, slug, cookingTime, thumbnail } = project.fields;
  return (
    <div className="card">
      <div className="featured">{/* image */}</div>
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
