import { WorkSpace } from "./data/Index";
import { ProjectCard } from "./ui/projectcard";

const Projects = () => {
  return (
    <section id="project" className="py-20 px-6">
      
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {WorkSpace.map((item, i) => (
          <ProjectCard key={i} {...item} />
        ))}
      </div>

    </section>
  );
};

export default Projects;