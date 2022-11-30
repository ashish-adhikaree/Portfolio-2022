import Image from "next/image";

interface articleCardProps {
  imageURL: string;
  title: string;
  description: string;
}

const ProjectCard = ({ imageURL, title, description }: articleCardProps) => {
  return (
    <div className="bg-white w-[250px] overflow-hidden rounded-md relative">
    <div className="h-full w-full absolute z-10 hover:animate-projectcard-overlay hover:bg-yellow-300 hover:cursor-pointer"></div>
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image alt="project-image" className ="w-full h-full object-fill" width={200} height={150} src={imageURL} />
      </div>
      <div className="text-black p-5">
        <h1 className="font-bold uppercase text-xl">{title}</h1>
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
