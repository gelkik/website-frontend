import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SocialIcon } from 'react-social-icons';
import Me from '../data/Me.JPEG'
import Me2 from '../data/IMG_5930.jpg'
import Box from '@mui/material/Box';


function PageContent({theme}) {

    return (
        <div id="page-content-info">
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Box
                    component="img"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '10rem',
                        width: '10rem',
                        maxHeight: { xs: 300, md: 167 },
                        maxWidth: { xs: 400, md: 250 },
                        m: 1,
                        border: 1,
                        borderRadius: '50%'
                    }}
                    alt="Picture of Me!"
                    src={Me2}
                />
            </Box>
            <div className={`page-content-text-${theme}`}>
                    <h1 className="page-content-text-first">
                        Hello!
                    </h1>
                    <p className="page-content-text-second">
                        My name is <span style={{ fontSize: '120%', fontWeight: 'bold' }}>George Elkik</span>.    
                    </p>
                    <p className="page-content-text-third">
                        I am a curious Electrical Engineer in the Software Engineering field. 
                    </p>
                    <p className="page-content-text-fourth">
                        Welcome to my site!
                    </p>
            </div>
                <Stack className="page-content-buttons" spacing={4} direction="row" sx={{fontSize: 10, justifyContent: 'center'}}>
                <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            backgroundColor: 'rgb(225, 234, 238)',
                            borderRadius: '50%'

                        }}
                        noValidate
                        autoComplete="off"
                    >
                    <Button variant="text"><SocialIcon url = "https://github.com/gelkik" target="_blank"/></Button>
                </Box>
                <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            backgroundColor: 'rgb(225, 234, 238)',
                            borderRadius: '50%'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                    <Button variant="text"><SocialIcon url = "https://www.linkedin.com/in/george-elkik/"target="_blank"/></Button>
                </Box>
                <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            backgroundColor: 'rgb(225, 234, 238)',
                            borderRadius: '50%'

                        }}
                        noValidate
                        autoComplete="off"
                    >
                    <Button variant="text"><SocialIcon url = "https://medium.com/@gelkik"target="_blank"/></Button>
                </Box>
                </Stack>
            
        </div>

    )
}

export default PageContent;