import SectionHeader from "../sectionHeader";
import ProjectCard from "./projectCard";
import axios from "axios";
import { useState } from "react";
import { Project } from "../../typedeclaration";

const Projects = () => {
  let [Projects, setProjects] = useState<Project[]>([]);
  axios
    .get(`${process.env.BASE_URL}/api/projects`)
    .then((res) => {
      setProjects(res.data);
    })
    .catch((error) => console.log(error));
  return (
    <div
      id="projects"
      className="relative z-[100] snap-end h-screen max-w-7xl flex flex-col items-center p-5 pt-[100px]"
    >
      <SectionHeader
        title="projects"
        description="Some of the projects that I have been part of"
      />
      <div className="horizontal-list">
        {Projects.length != 0 ? (
          Projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                bannersrc={`/assets/projects/${project.bannersrc}`}
                title={project.title}
                tools={project.tools}
                projectlink={project.projectlink}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Projects;
