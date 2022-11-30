import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div id="Projects" className="w-full max-w-7xl flex items-center justify-center p-5">
        <ProjectCard
      imageURL="/assets/projects/thechunabbot.jpg"
      title="The Chunab Bot"
      description="The Chunab Bot is a twitter bot coded in python that sends live instant vote count updates of Parliament & Provincial Election Nepal 2079"
    />
    </div>
    
  );
};

export default Projects;
