import React,{useState, useEffect} from "react";

// Component 
import ParticlesComponent from "./Assets/Components/Particles";
import Card from "./Assets/Components/Card";
import useWindowDimensions from "./Assets/Dimension";
import About from "./Assets/Components/About";

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { height, width } = useWindowDimensions();
  
  const [Yscroll, setYscroll] = useState("")

  useEffect(()=>{
    window.onscroll = () => { 
      setYscroll(window.pageYOffset);
      if(width<768){
        if(window.window.pageYOffset < 1){
           return setIsScrolled(false)
          
        }
        return setIsScrolled(true)

      }else{
        if(window.pageYOffset > 500){
          return setIsScrolled(true)
        }
          return setIsScrolled(false)
         
      }

    }
    return () => (window.onscroll = null);
  })

  
  
  return (
    <div className="App" >
      <div id="particles-js" className={isScrolled? "Navigation active" : "Navigation"} >
      {/* <div id="particles-js" className="Navigation" > */}
        {isScrolled?  null : <ParticlesComponent />}
        
        <div className="Header"><h2 data-text="I Am Kimbert">I Am </h2>
        <div className="Cover">
        
        </div>
        <h1 className="name">Kimbert </h1>
        
        </div>
        
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#Resume">Resume</a>
        <a href="#Contact">Contact</a>

        <a href="#" className="icon">
          <i className="fa fa-bars"></i>
        </a>

      </div>

      <div className="Content" id="About">
        {/* {Yscroll} */}
        {/* {Yscroll<500 || Yscroll>815?"false" : "true"} */}

        <div className="row">
          <div className="col-6">
            <Card Header="About Me"
            // Content = "I am A web Developer with a Basic knowledge on HTML CSS JASCRIPT"
            Content = {<About />}
            isScrolled = {isScrolled}
            />
          </div>
        </div>
        

          
        
      </div>
    </div>
  );
}

export default App;
