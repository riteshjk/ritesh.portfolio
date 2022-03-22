import React from 'react'
import styles from "./Skills.module.css"
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import {imgData,data} from "../Data/Techlogo"

const Skills = () => {
    return (
        <Container className={styles.boxStyle} id="skills" maxWidth="xl">
            <h2 className={styles.skillsTitle}>Skills</h2>
            <Box className={styles.rightBox}>
                {
                    imgData.map((el,i) => (
                        <Box className={styles.iconBox}>
                           <a href={data[i]} target="_blank" rel="noopener noreferrer"> <img className={styles.img} src={el} alt="HTML"/></a>
                        </Box>
                    ))
                }
            </Box>
        </Container>
    )
}

export {Skills}
