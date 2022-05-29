import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import youtube from "../../Assets/Requird-image/you.png";
import stop from "../../Assets/Requird-image/stop.png";
import plural from "../../Assets/Requird-image/plural.png";
import bewakoof from "../../Assets/Requird-image/bewakoof.png";
import unplash from "../../Assets/Requird-image/unplash.png";
import fabbag from "../../Assets/Requird-image/fabbag.png";



export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={bewakoof}
                  alt="Bewakoof.com"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bewakoof.com</h2>
              <p>
              "Bewakoof.com" is a E-Commerce website for Clothes and Accessories. Built on HTML, CSS, JavaScript for front end and Localstorage on backend. It's a team project completed executed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://cloneofbewakoof.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AmbujKrAK/Bewakoof.com--Project-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={plural}
                  alt="Pluralsight-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Pluralsight-clone</h2>
              <p>
                First Backend Project with NodeJS, ExpressJS and MongoDB. Used EJS to render views. Main functionalities were : Register/Login using JWT, Sorting and Filtering in the backend and many more.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://plurlsightclone.netlify.app/src/frontend/homepage/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khageswar9/Pluralsight-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={youtube}
                  alt="Youtube clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Youtube Clone </h2>
              <p>
                First indivisual project Built on HTML, CSS, JavaScript for front end and youtube API for showing the videos. 
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://myyoutubeunit3.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                  See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khageswar9/YouTube-unit3/tree/main/myyoutube/day%208%20we"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={stop}
                  alt="Google Stopwatch"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Google Stopwatch</h2>
              <p>
                Mini project of A Google Stopwatch game built using ReactJS. Features : Button for Resetting The Timer , start and Puse .
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://googlestopwatch.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khageswar9/unit-5/tree/master/day_6_googletimer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={fabbag}
                  alt="FabBag.com"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>FabBag.com</h2>
              <p>
              FabBag is a India's largest beauty subscription service. we use React and Redux for Front end and MongoDB, ExpressJs and nodejs for bakend.
              </p>
              <div>
                <FaReact />
                <DiCss3 />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://dashing-fox-837d55.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khageswar9/FabBag_clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={unplash}
                  alt="Unsplash Image Search"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Unsplash Image Search</h2>
              <p>
                Vanilla JS web app to Search for any image Search. Build with the help of Unplash API . Built to learn APIs and use them in the project.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://image-serch.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khageswar9/Unplash-Image-Serch."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
