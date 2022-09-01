import React,{useState, useEffect} from "react";

// Component 
import ParticlesComponent from "./Assets/Components/Particles";
import Card from "./Assets/Components/Card";

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(()=>{
    window.onscroll = () => { 
      if(window.pageYOffset > 0){
        setIsScrolled(true)
        console.log(isScrolled)
      }else{
        setIsScrolled(false)
        console.log(isScrolled)
      } 
    }
    return () => (window.onscroll = null);
  })
  
  return (
    <div className="App" >
      <div id="particles-js" className={isScrolled? "Navigation active" : "Navigation"} >
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
        <div className="row">
          <div className="col-6">
            <Card Header="About Me"
            Content = "This is my info qweqw eqweqweqwe ihqwcihqwciw qeih"
            />
          </div>
          <div className="col-6">
            <Card Header="About Me"
            Content = "This is my info qweqw eqweqweqwe ihqwcihqwciw qeih"
            />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
