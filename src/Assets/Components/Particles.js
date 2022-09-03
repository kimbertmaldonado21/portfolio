import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () =>{
    const options = useMemo(()=>{
        return {
            interactivity :{
                events :{
                    onClick :{
                        enable: false,
                        mode: "attract"
                    },
                    onHover : {
                        enable :true,
                        mode: "repulse"
                    }
                }
            },
            particles:{
                links:{
                    enable:true
                },
                opacity:{
                    value:{min:0.1, max:0.5}
                },
                move :{
                    enable :true,
                    speed : {min:1, max:2}
                },
                size :{
                    value : {min:5, max:10}
                },
                color : {
                    value : "#ff0000"
                },
                number :{
                    value : 10
                }
                
                
                
            }
        }
    }, [])

    const particlesInit = useCallback((engine)=>{
        loadSlim(engine)
        // loadFull(engine) //for this sample
    })

    return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent