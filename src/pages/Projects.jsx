import projects from "../utils/projects"
import Project from "../components/Projects/Project"

function Projects() {
  return (
    <div className="overflow-auto">
      <span className="text-3xl mx-1 md:mx-4 md:text-5xl text-white header-item">Projects</span>

      <div className="flex flex-col gap-y-6 mt-4">
        {
          projects.map((project, index) => {
            return (
              <Project key={index} project={project} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Projects