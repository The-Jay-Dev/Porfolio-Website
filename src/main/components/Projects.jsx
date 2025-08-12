import React from "react";
import Section from "./Section";
import ProjectContainer from "./ProjectContainer";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        id="projects"
        className=" relative mx-auto h-auto mb-48 flex flex-col justify-center items-center"
      >
        <h1 className="h1 text-center">PROJECTS</h1>
        <div className="relative container h-full w-auto ml-4 mr-4 rounded-2xl">
          <div className=" gap-6 mx-auto md:w-[80%]  md:flex md:flex-col md:justify-center md:items-center lg:grid lg:grid-cols-3 mt-6 container lg:w-full h-auto ">
            <ProjectContainer
              tag="Qt software development"
              source="./src/website_assets/RebirthTitleScreen.png"
              altText="Rebirth Title Screen"
              description="An experimental rhythm game crafted with Qt and Miniaudio frameworks."
              projectTitle="Rebirth"
              btnUrl="/projectRebirth"
            />

            <ProjectContainer
              tag="Qt software development"
              source="./src/website_assets/FileExplorerMainScreen.png"
              altText="Rebirth Title Screen"
              description="A tool for automatic file renaming."
              projectTitle="File Sorter"
              btnUrl="https://github.com/The-Jay-Dev/File-Sorter"
            />

            <ProjectContainer
              tag="Godot game engine"
              source="./src/website_assets/GodotTrajectoryLineScreen.png"
              altText="Rebirth Title Screen"
              description="A trajectory line that predicts the player's jump path."
              projectTitle="Trajectory Line Engine"
              btnUrl="https://github.com/The-Jay-Dev/2D-Trajectory-Line-GodotV4.3"
            />
          </div>
        </div>

        <button></button>
      </div>
      <div className="h-0.5 w-full bg-neutral-700 mb-12  "></div>
    </div>
  );
};

export default About;
