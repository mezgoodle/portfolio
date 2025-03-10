interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Переглянути проєкт
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
