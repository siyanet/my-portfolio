import React from "react";
import { Title } from "./ReusableComponets";


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
      

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/myphoto.jpg" // Change this to your actual image path
            alt="Siyanet Getahun"
            className="w-96 h-96 object-cover shadow-lg"
          />
        </div>








          <div className="w-full lg:w-1/2 text-center ">
         <Title>About Me</Title>
          <div className="md:text-left">
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Hello! I'm <strong className="text-white">Siyanet Getahun</strong>, a passionate
            and dedicated software engineer, recently graduated from Bahir Dar University with
            a degree in Software Engineering.
          </p>
          <p className="text-gray-400 mb-6">
            During my academic journey and professional internships, I have gained hands-on
            experience in building responsive, scalable, and user-friendly web applications using
            modern technologies like React, Tailwind CSS, Redux, and TypeScript.
          </p>
          <p className="text-gray-400 mb-8">
            I love solving real-world problems through code and constantly strive to improve
            my skills by working on meaningful projects and collaborating with like-minded developers.
          </p>
          </div>
     

      <a
  href="#contact"
  className="inline-block bg-[linear-gradient(to_right,_#3bd296,_#12d4aa)] hover:bg-[linear-gradient(to_right,_#2cc68a,_#0fbf98)] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
>
  Contact Me
</a>

        </div>









      </div>
    </section>
  );
};

export default AboutSection;

