import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiMaterialui,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPandas,
  SiNumpy,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                {/* <div>
                  <img
                    src="https://camo.githubusercontent.com/63375d23b0967743fbb5a10a28b340c608587d4bd246437017d1f61df33afc40/68747470733a2f2f692e6962622e636f2f6746534d7a4b4e2f312e706e67"
                    alt="Chat App"
                  />
                </div> */}
              </div>
              <div className="project_information">
                <h2>Chat app</h2>
                <p>
                  Real time messaging chat app made with MERN and socket.io with Jwt authentication,global state management using zustang & redux styled with Daisy ui.
                  
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://chat-app-r2oe.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/devanshraii/Chat-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                {/* <div>
                  <img
                    src="https://www.lifewire.com/thmb/D4fzBgiFlMxXW6h8946YbtkjRdY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Netflix_English-5baff18e4cedfd0026d27d78-3a224b5938464fe6a6299f8fe4945a5b.jpg"
                    alt="Sk-Weather-App"
                  />
                </div> */}
              </div>
              <div className="project_information">
                <h2>SocialVibe</h2>
                <p>
                  Developed a social networking app with real-time chat, media sharing, and interactive posts using Socket.io,
enabling seamless user engagement, post replies, and likes.
                </p>
                <div>
                  {/* <DiCss3 /> */}
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiTailwindcss />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://youtu.be/9NUREP0Zq98?si=Z0aIJmPun-1xPWWV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See Video Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/devanshraii/Advanced-social-media-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                {/* <div>
                  <img src="https://camo.githubusercontent.com/62ba6cbe9b62d2ccb55c07db2258d33c782d0e15b3231153d7b0f20935b57272/68747470733a2f2f692e6962622e636f2f424b31486e30782f53637265656e73686f742d323032322d30382d30382d61742d342d30352d34382d504d2e706e67" alt="" />
                </div> */}
              </div>
              <div className="project_information">
                <h2>AI Form Builder</h2>
                <p>
                Next js app where users can easily create customized forms by providing prompts, and the forms can be published for others to fill out. The admin of the form can access and view all responses submitted.
                </p>
                <div>
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiTailwindcss />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://youtu.be/GpCGNi4si6I?si=3vfHjhHQVwfmRi6J"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See Video Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/devanshraii/AI-form-builder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                {/* <div>
                  <img
                    src="https://user-images.githubusercontent.com/23248726/224405420-03112a76-250a-4283-992c-60e235170678.png"
                    alt=""
                  />
                </div> */}
              </div>
              <div className="project_information">
                <h2>Autism Prediction Model</h2>
                <p>
                  Designed and trained a machine learning model to predict autism spectrum disorder based on 20 key
features, achieving 85% accuracy using Logistic Regression, Random Forest, and Decision Tree algorithms
                </p>
                <div>
                  <SiPandas />
                  <SiNumpy />
                  <SiPython />
                  <SiScikitlearn />
                  <SiTensorflow />

                </div>
                {/* <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
