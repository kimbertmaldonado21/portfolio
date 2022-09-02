import React from 'react'

import react from '../Images/Content/About/REACT.png'
import html from '../Images/Content/About/HTML.png'
import css from '../Images/Content/About/CSS.png'
import bootstrap from '../Images/Content/About/bootstrap.png'
import jquery from '../Images/Content/About/jquery.png'
import js from '../Images/Content/About/js.png'
import php from '../Images/Content/About/php.png'
import mysql from '../Images/Content/About/mysql.png'

const photo  = [
    react,
    html,
    css,
    bootstrap,
    jquery,
    js,
    php,
    mysql
]


const About = () => {
  return (
    <div>
    
        <div>
            <p>
                I am A web Developer with a Basic knowledge on 
            </p>
        </div>
        
        {/* <br /> */}
        
        <div>
            {photo.map((pic)=>{
                return(
                    <>
                    <img src={pic} alt="Photo" />
                    </>
                    
                )
                
                
                
            })}
        </div>
    </div>
)
}

export default About