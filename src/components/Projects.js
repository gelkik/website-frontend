import React, { useRef,useState } from "react";
// import Header from './Header'
// import EmailForm from './EmailForm'
// import AboutMe from './AboutMe'
import myvideo from '../video/DataDunk Demo.mp4'
import OSEA from '../video/Osea Hackathon App Presentation.mp4'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Logo from './ProjectPhoto/LearnLink OSEA Logo.png'


function Projects() {
    const playerRef = useRef(null);
    const [showVid,setShowVid] = useState(false)

    function handleClose(){
        setShowVid(()=>!showVid)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85vw',
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <div className= "projects">
            Projects
            <br />
            <br />
                {/* <ReactPlayer ref={playerRef} url={'C:\Users\gelki\Videos\Captures/DataDunk Demo'} controls={true} /> */}
                
                {showVid ? 
                <Modal
                    open={showVid}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow:'scroll'
                        }}
                >
                <Fade in={showVid}>
                    <Box sx={style}> 
                    <h2 style={{color:'white',textAlign:'right', cursor:'pointer'}}onClick={handleClose}>X</h2>
                    <Typography id="transition-modal-title" variant="h4" component="h2" style={{color: 'orange',fontFamily:'monospace'}}>
                        DataDunk
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{color: 'white',fontFamily:'monospace'}}>
                    <a style={{color: 'white',textDecoration:'none'}} href='https://github.com/gelkik/nba-stats'>Github</a>
                    </Typography>
                    </Typography>
                    <video style={{
                        display: "flex",
                        alignItems: "center",
                        height: "75%",
                        width:'75%',
                        }} 
                        controls preload="true">
                        {/* <button onClick={handleClose}>Close</button> */}
                        <source src={myvideo} type='video/mp4'/>
                    </video>
                    <Typography id="transition-modal-title" variant="h6" component="h2" style={{color: 'white',fontFamily:'monospace'}}>
                    Created a real-time NBA analysis application that gives insights into NBA teams’ performances in order to give
                    users the opportunity to make data-driven decisions when betting. Shows all upcoming bets as well as their odds.
                    </Typography>
                    <Typography id="transition-modal-title" variant="h6" component="h2" style={{color: 'white',fontFamily:'monospace'}}>
                    - Frontend: React, Node.JS
                    </Typography>
                    <Typography id="transition-modal-title" variant="h6" component="h2" style={{color: 'white',fontFamily:'monospace'}}>
                    - Backend: Python, Flask, REST, SQLAlchemy
                    </Typography>
                    </Box>
                </Fade>
                
                </Modal>
                :
                <div className ='projects-1' style={{cursor: 'pointer'}} onClick={()=>setShowVid(true)}>
                    
                    <img width='100px' alt="DataDunk" src='https://cdn1.iconfinder.com/data/icons/education-176/32/sport_basketball_ball_game_play-512.png'/>
                    <br />
                    <div style={{color:'orange'}}>DataDunk</div>
                </div>
                }
                <br />
                {showVid ? 
                <Modal
                    open={showVid}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow:'scroll'
                        }}
                >
                <Fade in={showVid}>
                    <Box sx={style}> 
                    <h2 style={{color:'white',textAlign:'right', cursor:'pointer'}}onClick={handleClose}>X</h2>
                    <Typography id="transition-modal-title" variant="h4" component="h2" style={{color: 'orange',fontFamily:'monospace'}}>
                        OSEA
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{color: 'white',fontFamily:'monospace'}}>
                    <a style={{color: 'white',textDecoration:'none'}} href='https://github.com/mikahado/learnlink-app'>Github</a>
                    </Typography>
                    </Typography>
                    <video style={{
                        display: "flex",
                        alignItems: "center",
                        height: "75%",
                        width:'75%',
                        }} 
                        controls preload="true">
                        {/* <button onClick={handleClose}>Close</button> */}
                        <source src={OSEA} type='video/mp4'/>
                    </video>
                    <Typography id="transition-modal-title" variant="h6" component="h2" style={{color: 'white',fontFamily:'monospace'}}>
                    LearnLink is a TechEd platform dedicated to an enriched educational experience for ALL students through AI-driven accessibility enhancements, 
                    ensuring equitable access to learning resources and opportunities. This project was part of Flatiron School's Hacktember 2023, where Flatiron 
                    Alumni were grouped to a team that collaborated to craft comprehensive design strategies that leverage AI technologies to improve the accessibility 
                    of an educational platform for users with disabilities and various learning needs.
                    </Typography>
                    <Typography id="transition-modal-title" variant="h6" component="h2" style={{color: 'white',fontFamily:'monospace'}}>
                    Role:
                    <br />
                        - Designed the backend using Flask in Python that leveraged relationships between students, teachers, and subjects.
                        <br />
                        - Helped create fetch requests on frontend to backend to pull and push data to the database.
                        <br />
                        - Ensured secure password, data, and session encryption.
                        <br />
                        - Technology: Python, Flask, REST, SQLAlchemy, Data Integration
                    </Typography>
                    </Box>
                </Fade>
                
                </Modal>
                :
                <div className ='projects-1' style={{cursor: 'pointer'}} onClick={()=>setShowVid(true)}>
                    
                    <img width='100px' alt="OSEA" src={Logo}/>
                    <br />
                    <div style={{color:'powderblue'}}>OSEA</div>
                </div>
                }
            {/* <div className ='projects-2' style={{cursor: 'pointer'}} onClick={()=>setShowVid(true)}>
                <img width='100px' alt="LearnLink" src={Logo}/>  
                <br /> 
                <a style={{color: 'purple',textDecoration:'none'}}href="https://github.com/mikahado/learnlink-app">OSEA Education App</a>
            </div> */}
            <br />
            <div className ='projects-3'>
                <a style={{color: 'purple',textDecoration:'none'}}href="https://github.com/gelkik/Dog-Shelter-Web">Roger's Dog Rescue</a>
            </div>
        </div>
    )
}

export default Projects;