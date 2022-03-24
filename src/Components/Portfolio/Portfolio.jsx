import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Typewriter from "typewriter-effect";
import profilepic from "../Images/Profile_5.png"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Portfolio = () => {
    return (
        <>
        <Container id="home" maxWidth="xl" className={styles.contain}>
            <div className={styles.badge}>
                <img style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="Ritesh Kamthe" src={profilepic}/>
            </div>
            <Box className={styles.name}>
                <h2>Ritesh Kamthe</h2>
            </Box>
            <Box className={styles.typebox}>
                <h2>
                <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter, options)=> {

                            typewriter
                            
                            .typeString("Full Stack Web Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </h2>
            </Box>
            <Box className={styles.name}>
                <p> A Javascript Full-Stack Developer, Lover of creating products which make people's life easier. I'm always eager to hear about new ideas, create and learn new things. Proficient in Frontend technology as well as in backend technology. 

                   
                </p>
            </Box>
        </Container>
        </>
    )
}

export {Portfolio}
