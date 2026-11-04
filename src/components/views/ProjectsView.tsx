"use client";

import React, { useState } from "react";
import { ProjectPlanet } from "../../types";
import ProjectsTab from "../tabs/ProjectsTab";
import ProjectModal from "../ui/ProjectModal";

export default function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState<ProjectPlanet | null>(null);

  return (
    <>
      <ProjectsTab onSelectProject={setSelectedProject} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
