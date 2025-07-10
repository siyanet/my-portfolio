// // components/ProjectSection.tsx

// import React from "react";
// import ButtonLink, { Title } from "./ReusableComponets";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   githubUrl: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Restaurant Management System",
//     description: "Built with React, Redux, and Tailwind CSS. Handles reservations, orders, and menus.",
//     imageUrl: "/images/restaurant-project.jpg", // replace with your image path
//     githubUrl: "https://github.com/siyanet/restaurant-management",
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description: "A responsive portfolio built with React and Tailwind CSS to showcase my work.",
//     imageUrl: "/images/portfolio.jpg",
//     githubUrl: "https://github.com/siyanet/portfolio",
//   },
//   // Add more projects as needed
// ];

// const MyProjects: React.FC = () => {
//   return (
//     <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <Title>My Projects</Title>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
//             >
//               <img
//                 src={project.imageUrl}
//                 alt={project.title}
//                 className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-sm mb-4">{project.description}</p>
              
//                 <ButtonLink href={project.githubUrl}> View on GitHub</ButtonLink>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyProjects;
// components/ProjectSection.tsx

import React, { useRef } from "react";
import ButtonLink, { Title } from "./ReusableComponets";

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Restaurant Management System",
    description: "Built with React, Redux, and Tailwind CSS. Handles reservations, orders, and menus.",
    videoUrl: "/RMS.mp4",
    githubUrl: "https://github.com/siyanet/TheKitchenBackend",
  },
  {
  id: 2,
  title: "Bete Real Estate App",
  description: "A real estate listing platform built with React, Tailwind CSS, Redux, and Django for browsing and managing property listings.",
  videoUrl: "/Bete.mp4", // Replace with your actual image path
  githubUrl: "https://github.com/siyanet/BeteFrontend.git",
},

  {
  id: 4,
  title: "Boran Document Archive System",
  description: "A document management product built with React, Tailwind CSS, Redux, and Laravel to securely archive and retrieve real estate documents.",
  videoUrl: "/boran.mp4", // Replace with your actual image path

},

];

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Title>My Projects</Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => {
            const videoRef = useRef<HTMLVideoElement>(null);

            return (
              <div
                key={project.id}
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

                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  {project.githubUrl && (
                    <ButtonLink href={project.githubUrl}>View on GitHub</ButtonLink>
                  )}
                </div> */}
<div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <h3 className="text-sm font-semibold">{project.title}</h3>
  <div className="flex justify-between items-center mt-1">
    <p className="text-xs line-clamp-1">{project.description}</p>
    {project.githubUrl && (
      <ButtonLink href={project.githubUrl}>GitHub</ButtonLink>
    )}
  </div>
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
