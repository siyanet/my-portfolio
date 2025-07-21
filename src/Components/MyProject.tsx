


import React, { useRef } from "react";
import ButtonLink, { Title } from "./ReusableComponets";

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  githubUrl?: string;
  data_aos: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Restaurant Management System",
    description:
      "A full-featured restaurant management system developed for 'The Kitchen'. Built using React, Redux, Tailwind CSS, and Django, the system supports real-time order processing between waiters and chefs, QR code-based login for waiters, dynamic menu updates, and payment management for customers. Admins can manage staff and see Reports through an intuitive dashboard.",
    imageUrl: "/RMS.png",
    githubUrl: "https://github.com/siyanet/TheKitchenBackend",
    data_aos: "fade-right"
  
  },
  {
    id: 2,
    title: "Bete Real Estate App",
    description:
      "A real estate listing and communication platform built with React, Redux, Tailwind CSS, and Django. Bete allows users to search and filter properties based on location, type, and price. The system features real-time chat between agents and customers, property detail views, listing management for agents, and a user-friendly interface to enhance the experience of both buyers and sellers.",
    imageUrl: "/Bete.png",
    githubUrl: "https://github.com/siyanet/BeteFrontend.git",
    data_aos: "fade-left",
  },
  {
    id: 4,
    title: "Boran Document Archive System",
    description:
      "A contract-based document management system built for Boran Real Estate. I was the frontend developer of this product . The system was developed using React, Redux, Tailwind CSS, and Laravel. It provides secure uploading, indexing, archiving, and retrieval of real estate documents. Designed to streamline office operations, the system includes search capabilities, permission-based access control, and an intuitive interface for both admin and staff users.",
    imageUrl: "/boran.png",
    data_aos: "fade-right",
  },
];

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Title>My Projects</Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {projects.map((project) => {
            const videoRef = useRef<HTMLVideoElement>(null);

            return (
              <div
                key={project.id}
                data-aos = {project.data_aos}
                className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => videoRef.current?.pause()}
              >
                {project.videoUrl ? (
                  <video
                    ref={videoRef}
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-300 flex items-center justify-center text-gray-600">
                    No Preview Available
                  </div>
                )}

                {/* Full overlay on hover */}
                <div className="absolute inset-0 bg-black/70 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm mb-4 text-center max-w-md">{project.description}</p>
                  {project.githubUrl && (
                    <ButtonLink href={project.githubUrl}>View on GitHub</ButtonLink>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
