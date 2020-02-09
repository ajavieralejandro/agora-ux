import React from 'react';
import {CourseCardContainer} from './course-card.styles';
import { FaClock } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const courseCard = () => (
    <CourseCardContainer>
        <h1>Biomodelos</h1>
        <p> Aprende todo sobre biomodelos</p>
        <FaClock></FaClock>
        <p>16hs</p>
        
    
    </CourseCardContainer>

)

export default courseCard;