import React,{useState, useEffect} from "react";


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

        <div className="Header"><h2 data-text="I Am Kimbert">I Am Kimbert </h2></div>
        {/* <div className="Header"><p>This website is dedicated to myself as i built it with HTML CSS Javascript</p></div> */}
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#Resume">Resume</a>
        <a href="#Contact">Contact</a>

        <a href="#" className="icon">
          <i class="fa fa-bars"></i>
        </a>

      </div>

      <div className="Content">

      </div>
    </div>
  );
}

export default App;
