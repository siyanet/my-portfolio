// components/ResumeSection.tsx

import React from "react";

const Resume: React.FC = () => {
  const googleDriveViewUrl = "https://drive.google.com/file/d/1_j6kf3PdWjd_gqDGYpjLc-P-2gHHkVyu/view?usp=sharing";
  const resumeDownloadUrl = "/Resume.pdf"; // Place your PDF in public/documents/

  return (
    <section id="resume" className="py-16 px-6 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Resume & CV</h2>

       <div className="relative group w-full max-w-2xl mx-auto h-64 
  bg-gradient-to-r from-[#3bd296] to-[#12d4aa] 
  rounded-xl shadow-lg overflow-hidden 
  flex items-center justify-center 
  text-white text-2xl font-semibold 
  transition-transform duration-300 hover:scale-105"
>
  Complete overview of my technical skills, experience, and educational background


          {/* Hover Content */}
          <div className="absolute inset-0  bg-opacity-20 flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={resumeDownloadUrl}
              download
              className="bg-white text-gray-800 px-5 py-2 rounded hover:bg-gray-200 font-medium transition"
            >
              Download PDF
            </a>
            <a
              href={googleDriveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 px-5 py-2 rounded hover:bg-gray-200 font-medium transition"
            >
              View on Google Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
