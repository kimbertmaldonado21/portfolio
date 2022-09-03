import React from 'react'

import godot from '../Images/Content/Skills/GameDev/godot.png'
import unity from '../Images/Content/Skills/GameDev/unity.png'
import aseprite from '../Images/Content/Skills/GameDev/aseprite.png'
import blender from '../Images/Content/Skills/GameDev/blender.png'

const photos = [
    godot,
    unity,
    aseprite,
    blender
]


const GameDev = () => {
  return (
    <div>
        {photos.map((pic)=>{
                return(
                    <>
                    <img src={pic} alt="Photo" />
                    </>
                    
                )
                
                
                
            })} 
    </div>
  )
}

export default GameDev