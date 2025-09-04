import Image from "next/image";
import jobPortal from "@/assets/images/job-portal.png";
import recipeFinder from "@/assets/images/recipe-finder.png";
import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    title: "JobHunt",
    results: [
      {
        description:
          "Build MERN stack Job Portal with role-based authentication, where recuriter can create jobs. Implemented Redux for global state management along with multiple field search, filters, and profile management, enabling users to apply for jobs and track applications.",
      },
    ],
    link: "https://job-hunt-yjwx.onrender.com/",
    github: "https://github.com/MauryaAbhi378/Job-Hunt",
    image: jobPortal,
  },
  {
    title: "Recipe Finder",
    results: [
      {
        description:
          "Developed a Recipe Finder application that integrates with a third-party food API to fetch and display food items. Implemented a favorites feature using Context API to manage global state, allowing users to save recipes.",
      },
    ],
    link: "https://recipe-finder-lilac.vercel.app/",
    github: "https://github.com/MauryaAbhi378/Recipe-Finder",
    image: recipeFinder,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-4">
      <div className="container">
        <h2 className="font-serif text-3xl  md:text-5xl text-center">
          Featured Projects
        </h2>
        <div className="flex flex-col mt-5 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl  z-0 overflow-hidden after:z:10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 mb-10 after:pointer-events-none sticky top-0"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="">
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 my-2" />
                  <ul className="">
                    {project.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-white/50 md:text-md"
                      >
                        {result.description}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 my-4 flex-row">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-gray-900 h-12 rounded-xl font-semibold px-5 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 group"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>

                    <a href={project.github}>
                      <button className="bg-white text-gray-900 h-12  rounded-xl font-semibold px-4 hover:cursor-pointer">
                        View Github
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className=" mt-4 -mb-2 md:-mb-0 lg:mt-0 lg:h-full lg:ml-20 rounded-tl-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
