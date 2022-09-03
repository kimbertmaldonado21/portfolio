import React from 'react'


//assets
import react from '../Images/Content/Skills/WebDev/REACT.png'
import html from '../Images/Content/Skills/WebDev/HTML.png'
import css from '../Images/Content/Skills/WebDev/CSS.png'
import bootstrap from '../Images/Content/Skills/WebDev/bootstrap.png'
import jquery from '../Images/Content/Skills/WebDev/jquery.png'
import js from '../Images/Content/Skills/WebDev/js.png'
import php from '../Images/Content/Skills/WebDev/php.png'
import mysql from '../Images/Content/Skills/WebDev/mysql.png'

const photo  = [
    
    html,
    css,
    js,
    jquery,
    bootstrap,
    react,
    php,
    mysql
]
const WebDev = () => {
  return (
    <div>
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

export default WebDev