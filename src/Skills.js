import React from "react";

function Skills() {
  const skills = [
    {
      id: 1,
      name: "javascript",
    },
    {
      id: 2,
      name: "MySQL",
    },
    {
      id: 3,
      name: "MongoDB",
    },
    {
      id: 4,
      name: "Nodejs",
    },
    {
      id: 5,
      name: "ReactJS",
    },
    {
      id: 6,
      name: "React Native",
    },
    {
      id: 7,
      name: "Redux + Toolkit",
    },
  ];

  return <div>Skills
    {
        skills.map(function (skill) {
            return <div key={skill.id}>{skill.name}</div>
        })
    }
  </div>;
}

export default Skills;
