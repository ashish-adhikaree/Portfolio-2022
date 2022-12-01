import type { NextApiRequest, NextApiResponse } from "next";
import {Project} from "../../typedeclaration"

const project: Project[] = [
  {
    title: "The Chunab Bot",
    bannersrc: "thechunabbot.jpg",
    tools: ["python"],
    projectlink: "https://github.com/ashish-adhikaree/The-Chunab-Bot",
  },
  {
    title: "penson website",
    bannersrc: "penson.png",
    tools: ["wordpress","cpanel"],
    projectlink: "https://pensionerssocietynepal.org.np/",
  },

];
const handler = (req: NextApiRequest, res: NextApiResponse<Project[]>) => {
  res.status(200).json(project);
};

export default handler
