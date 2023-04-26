import React from "react";
// import DevIcon from "devicon-react-svg";
// import { Box } from '@mui/material'
// import * as icon from 'devicon/icons'

// Local Data
// import data from "../../data/portfolio.json";

const AboutMe = ({ }) => {
  // const router = useRouter();
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // const { name, showBlog, showResume } = data;

  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  const devIconStyle = {
      fill: "olive",
      width: "150px",
  };

  // console.log(iconList)
  return (
    // <Tab.Group manual>
    //   <Tab.List defaultIndex={0}>
    //     <Tab>About Me</Tab>
    //     <Tab>Experience</Tab>
    //     <Tab>Projects</Tab>
    //     <Tab>Contact Info</Tab>
    //   </Tab.List>
    // </Tab.Group>
    <div className="about-me">
      <h1>
        About Me
      </h1>
        <div className="about-me-text">
          
          Full Stack Developer with knowledge and experience in programming Frontend and Backend technologies
          such as <span style={{ fontSize: '120%', fontWeight: 'bold' }}>Python, Flask, JavaScript, and React. </span>  
          I am certified in Amazon Web Services as an Associate Solutions
          Architect as well as Cloud Practitioner. Along with my technical coding skills, I am a graduate of Electrical Engineering,
          completing my Masters Degree in May of 2021, focusing on telecommunications, computer networking and security,
          and power systems.
          <br />
          <br />
          <div>
            I am passionate to use my knowledge and knack for problem-solving in Full Stack Development in the 
            tech industry, and am eager to continuously learn new things!
          </div>
        </div>
        <div className="about-me-skills">
          <h2>
            Coding Languages and Frameworks
          </h2>
          <div className="about-me-logos">
            <img style = {{width: '100px'}} alt='AWS' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'/>
            <img style = {{width: '100px'}}alt='React'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'/>
            <img style = {{width: '100px'}}alt='Python'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg'/>
            <img style = {{width: '100px'}}alt='JavaScript'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'/>
            {/* <DevIcon icon="react" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="python" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="javascript" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="html5" style={devIconStyle} viewBox="0 0 32 32"/> */}
            <div>
            <img style = {{width: '100px'}}alt='Node.JS'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg'/>
            <img style = {{width: '100px'}}alt='HTML'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg'/>
            <img style = {{width: '100px'}}alt='CSS'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg'/>
            {/* <DevIcon icon="css3" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="nodejs" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="github" style={devIconStyle} viewBox="0 0 32 32"/> */}
            </div>
            <div className="about-me-row3">
            <img style = {{width: '100px'}}alt='Github'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'/>
            <img style = {{width: '100px'}}alt='Django'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg'/>
            <img style = {{width: '100px'}}alt='SQLite'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg'/>
            {/* <DevIcon icon="django" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="sqllite" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="aws" style={devIconStyle} viewBox="0 0 32 32"/> */}
            </div>
          </div>
        </div>
    </div>
  )

}

export default AboutMe;