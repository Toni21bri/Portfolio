import React from "react";
import project01 from "../assets/portfolio/project01.jpg"
import project05 from "../assets/portfolio/project05.jpg";
import project03 from "../assets/portfolio/project03.jpg"
import project02 from "../assets/portfolio/project02.jpg";
import project04 from "../assets/portfolio/project04.jpg";
import project06 from "../assets/portfolio/project06.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project01,   
      href: 'https://toni21-weatherapp.netlify.app/'
    },
    {
      id: 2,
      src: project02,
      href: 'https://stringmachine.netlify.app/'
    },
    {
      id: 3,
      src: project03,
      href: ' https://automotive-survey.vercel.app/'
    },
    {
      id: 4,
      src: project04,
      href: 'https://angular-vegan-house.vercel.app/'
    },
    {
      id: 5,
      src: project05,
      href: 'https://autocacrsalesweb.netlify.app/#'
    },
    {
      id: 6,
      src: project06,
      href: 'https://travel-website-9qf5.vercel.app/'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work on Github</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} 
            className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={href} target="_blank" rel="noreferrer">
                <button name='demo' className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </a>  
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
