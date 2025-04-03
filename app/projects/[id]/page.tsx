import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: project, error } = await supabase
    .from("projects")
    .select()
    .filter("id", "eq", id)
    .single();

  if (error) {
    console.error(error);
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Oops, something went wrong!</h4>
          <p>
            We couldn&apos;t load the project details. Please try again later.
          </p>
        </div>
        <Link href="/projects" className="btn btn-secondary">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="img-fluid mb-4 rounded project-image"
            />
          )}
          <h1>{project.title}</h1>
          <p className="lead">{project.description}</p>{" "}
          {project.skills && project.skills.length > 0 && (
            <div className="mb-4">
              <h4>Skills</h4>
              {project.skills.map((skill: string) => (
                <span key={skill} className="badge bg-secondary me-2">
                  {skill}
                </span>
              ))}
            </div>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              View Project
            </a>
          )}
        </div>

        {/* Sidebar (Optional) */}
        <div className="col-md-4">
          <div className="sticky-top" style={{ top: "2rem" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Details</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Created At:</strong>{" "}
                    {new Date(project.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </li>
                  {/* Add more project details here as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-4">
        <Link href="/projects" className="btn btn-secondary">
          ← Back
        </Link>
      </div>
    </div>
  );
}
