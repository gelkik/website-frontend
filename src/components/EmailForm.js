import React, { useState,useRef } from "react";
// import { Tab } from '@headlessui/react'
import { TextField,Button } from '@mui/material'
import emailjs from '@emailjs/browser';
// Local Data
// import data from "../../data/portfolio.json";

const EmailForm = ({theme}) => {
  // const router = useRouter();
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // const { name, showBlog, showResume } = data;

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const form = useRef();

    const newObj = {
        name: '',
        email: '',
        comment: ''
    }
    const [email, setEmail] = useState(newObj)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [commentError, setCommentError] = useState(false)

    // function handleSubmit(e){
    //     e.preventDefault();

        // setEmail({[e.target.name]:e.target.value})
        // console.log(email)
        // setNameError(false)
        // setEmailError(false)
        // setCommentError(false)

        // if (email.name === ''){
        //     setNameError(true)
        // }
        // if (email.email === ''){
        //     setEmailError(true)
        // }
        // if (email.comment === ''){
        //     setCommentError(true)
        // }
        // fetch('http://127.0.0.1:5555/emails',{
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(email)
        // })
        // .then(r=>r.json())
        // .then(data=>{
        //     setEmail(data)
        // })

        // emailjs.sendForm(
        //     process.env.REACT_APP_SERVICE_ID,
        //     process.env.REACT_APP_TEMPLATE_ID,
        //     form.current,
        //     process.env.REACT_APP_PUBLIC_KEY
        //     )
        //     .then((result) => {
        //         alert('message sent successfully...');
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
//         emailjs.sendForm(
//             'service_ps2uizo', 'template_spcrl5d', form.current, 'yKjCLak0XHsqrUMWd'
//             )
//             .then((result) => {
//                 console.log(result.text);
//                 setEmail(newObj)
//             }, (error) => {
//                 console.log(error.text);
//             });
//   }

    function handleChange(e){
        setEmail((email)=>(
            {...email,[e.target.name]:e.target.value
            }))
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(email)
        setNameError(false)
        setEmailError(false)
        setCommentError(false)

        if (email.name === ''){
            setNameError(true)
        }
        if (email.email === ''){
            setEmailError(true)
        }
        if (email.comment === ''){
            setCommentError(true)
        }
        emailjs.sendForm('service_ps2uizo', 'template_spcrl5d', form.current, 'yKjCLak0XHsqrUMWd')
          .then((result) => {
              console.log(result.text);
              setEmail(newObj)
          }, (error) => {
              console.log(error.text);
          });
      };
  

  return (
    <div className = 'contact-info'>
        <div>
            <h1>
                Contact Me
            </h1>
        </div>
        <div className="pre-email-form">
            For business inquiries, you can email me, gelkik@gmail.com, or fill out the form below:
        </div>
                <br />
            <form
                className = 'email-form'
                ref={form}
                onSubmit={sendEmail}
                // style={{input: { color: 'white' } }}
            >
                <TextField 
                    InputLabelProps={{ shrink: true, input: { color: 'white' } }} 
                    margin="dense"
                    style = {{width: '90%',input: { color: 'white' }}}
                    id="standard-basic" 
                    label="Name" 
                    variant="filled" 
                    value ={email.name}
                    name = 'name'
                    onChange={handleChange}
                    error={nameError}
                    helperText={nameError ? "Cannot leave your name blank." : ''}
                />
                <br />
                <TextField 
                    InputLabelProps={{ shrink: true }}
                    margin="dense"
                    style = {{width: '90%'}}
                    id="standard-basic" 
                    label="Email" 
                    variant="filled" 
                    name = 'email'
                    value ={email.email}
                    onChange={handleChange}
                    error={emailError}
                    helperText={emailError ? "I need your email address!" : ''}
                />
                <br />
                <TextField 
                    InputLabelProps={{ shrink: true }} 
                    margin="dense"
                    style = {{width: '90%'}}
                    id="standard-basic" 
                    label="Comment" 
                    name = 'comment'
                    multiline
                    rows={7}
                    variant="filled" 
                    value ={email.comment}
                    onChange={handleChange}
                    error={commentError}
                    helperText={commentError ? "Must leave a comment." : ''}
                />
                <br />
                <Button 
                    type='submit'
                    variant="outlined"
                    margin="dense"
                >
                    Send
                </Button>
            </form>
            <br />
    </div>
  )

}

export default EmailForm;