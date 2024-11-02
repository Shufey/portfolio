import React, { useState } from "react";
import { SKILLS } from "../utils/data";
import SkillCard from "./SkillCard";
import SkillsInfoCard from "./SkillsInfoCard";
import './skills.css'

const Skills = () => {

  const [selectedSkill , setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  }


  return (
    <div className="text-white w-full h-screen">
      <section className="skills-container my-16 mx-0 relative">
        <h5 className="text-2xl font-semibold mb-14">Skills</h5>
        <div className="skills-content flex items-start gap-12">
          <div className="skills flex-1 grid gap-12 grid-cols-2">
            {SKILLS.map((item) => (
                <SkillCard 
                key={item.title}
                icon={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
                />
            ))}
          </div>

          <div className="skills-info flex-1">
            <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
