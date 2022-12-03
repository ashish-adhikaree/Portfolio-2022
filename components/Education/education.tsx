import EducationCard from "./educationCard";
import axios from "axios";
import { School } from "../../typedeclaration";
import { useState } from "react";
import SectionHeader from "../sectionHeader";

const Education = () => {
  let [schools, setSchools] = useState<School[]>([]);
  axios
    .get('api/education')
    .then((res) => {
      setSchools(res.data);
    })
    .catch((error) => console.log(error));
  return (
    <div id="education" className="relative z-[100] snap-end h-screen max-w-7xl flex flex-col items-center p-5 pt-[100px]">
      <SectionHeader
        title="Education"
        description="List of schools and colleges I attended"
      />
      <div className="horizontal-list">
        {schools.length != 0 ? (
          schools.map((school, index) => {
            return (
              <EducationCard
                key={index}
                logoSRC={school.logoSRC}
                name={school.name}
                address={school.address}
                grade={school.grade}
                year={school.year}
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

export default Education;
