import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AgroBiz"
          des="An Ecommerce Agro website with guaranteed user-experience, shopping ease and high quality all-natural produce. "
          src={projectOne}
        />
        <ProjectsCard
          title="T-FLIX"
          des="A movie app that provides comfort, ease of streaming and affordable packages for all users"
          src={projectTwo}
        />
        <ProjectsCard
          title="Recipe App"
          des="A recipe app for findind recipes to enhance cooking experience all from the click of one button"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects;