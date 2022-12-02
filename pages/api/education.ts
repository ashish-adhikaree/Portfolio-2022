import type { NextApiRequest, NextApiResponse } from "next";
import { School } from "../../typedeclaration";

const schools = [
  {
    name: "Motherland English Boarding School",
    address: "Damak-05, Jhapa, Nepal",
    logoSRC: "motherland.png",
    grade: "Nursery - Grade 10",
    year: "April 2007 - August 2020",
  },
  {
    name: "Trinity International College",
    address: "Dillibazar-Height, Kathmandu",
    logoSRC: "trinity.jpg",
    grade: "A-levels",
    year: "August 2020 - August 2022",
  },
];

const Handler = (req: NextApiRequest, res: NextApiResponse<School[]>) => {
  res.status(200).json(schools);
};

export default Handler
