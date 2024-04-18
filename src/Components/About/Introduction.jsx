import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/WhatsApp Image 2024-03-17 at 12.01.44.png.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            {/* <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div> */}
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Devansh Rai </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Jabalpur, Madhya Pradesh (India)
                </span>
                . I have pursuing my graduation in BTech IT (AI & Robotics)
                from{" "}
                <span className="different">
                  Madhav Institute Of Technology & Science, Gwalior (MP)
                </span> I completed my schooling from Royal senior secondary school(CBSE), Jabalpur(MP).     
              </h4>
              <h4>Technical Skills:</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Languages: Javascript, Java, Python, Kotlin{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Frontend: HTML, CSS, Javascript, React, Redux, RTK query, NEXT.js 14, Tailwind CSS, Typescript.{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Backend: Node js, Express, Next, Typescript{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Database: MongoDB, SQL.{" "}
                
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Other: Machine learning, Android development.{" "}
                
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
