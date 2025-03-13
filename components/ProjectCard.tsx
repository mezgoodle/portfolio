import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string; // Optional: Add an image URL
  skills?: string[]; // Optional: Add an array of skills/technologies
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {" "}
      {/* Added margin-bottom and shadow */}
      {project.image && ( // Conditionally render the image
        <img
          src={project.image}
          alt={project.title}
          className="card-img-top"
          style={{ objectFit: "cover", height: "200px" }} // Adjust height as needed
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>

        {project.skills && project.skills.length > 0 && (
          <div className="mb-3">
            {" "}
            {/* Added margin-bottom */}
            {project.skills.map((skill) => (
              <span key={skill} className="badge bg-secondary me-1">
                {skill}
              </span> // Use Bootstrap badges
            ))}
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center">
          {" "}
          {/* Use flexbox for button alignment */}
          <Link
            href={`/projects/${project.id}`}
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Project
          </Link>
          <Link
            href={`/projects/${project.title}`}
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            View Source Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
