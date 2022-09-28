import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-md  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-7">
          Self Taught Developer, Career Switcher and Online Student. Working and studying.
        
        </p>
        
        <br />
        <p className="text-xl mt-10">
        Born and raised in Ta'Xbiex, Malta. I am a Front-End Developer with 2 years of experience.
        Studying and working in collaboration of good friends with vast experience in Front-End and Back-End Development.
        Throughout these 2 years I always worked as a Petrochemical Surveyor while I am studying and doing a diploma in computer studies. Now that I feel more confident and gained knowledge and developed many types of front-ends from weather applications to 
        travel booking platform using responsive user interfaces like React.js, Vue.js and Angular.js I would like to start my dream career as a software developer and learn how to work in a software development environment workplace.
        </p>
          
        <br />
        <p className="text-xl">
        I am passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implememnted UX/UI.</p>

        <br />

        <div name="saying">
        <p className="text-yellow">“Experience is the name everyone gives to their mistakes.” </p>
        </div>

      </div>
    </div>
  );
};

export default About;
