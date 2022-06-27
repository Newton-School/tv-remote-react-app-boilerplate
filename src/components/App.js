import React from 'react'
import '../styles/App.css';
const App = () => {

  let power=false;

function display(number)
{
  if(power===true){
    let present=document.getElementsByClassName('tv-container')[0].innerHTML;
    console.log(number);
    present+=`<center> <span style="margin-left:10px; display:inline-block;"></span> <center>`+number;
    document.getElementsByClassName('tv-container')[0].innerHTML=present;
    document.getElementById(number).classList.add('active-channel');
    setTimeout(function() { document.getElementById(number).classList.remove('active-channel') } , 500);
    

  }
 
  
}

function reset(){
  power=!power;

  if(power===false)
  {
    document.getElementsByClassName('tv-container')[0].innerHTML='<center>Power Off<center>';
    document.getElementById('container').style.backgroundColor='black';
  }
  else{
    document.getElementsByClassName('tv-container')[0].innerHTML='';
    document.getElementById('container').style.backgroundColor='dark-grey';
  }
  
}

function colorchange()
{
  document.getElementsByClassName('dot')[0].classList.add('clicked');
    document.getElementsByClassName('dot')[1].classList.add('clicked');
  
    setTimeout(function() { document.getElementsByClassName('dot clicked')[0].classList.remove('clicked') } , 500);
    setTimeout(function() { document.getElementsByClassName('dot clicked')[0].classList.remove('clicked') } , 500);
}
  return (
    
    <div id="main">
        <div className="wrapper">
        <div className="tv-space">
          <div className="tv-border">
            <div className="tv-container" id="container"style={{"color": "white",  "fontFamily": "roboto/serif",  "padding": "10px"}}>
              <center>Power Off</center>
            </div>
            <div className="tv-nav" style={{"textAlign":"center"}}>
              <br/> <span className="dot"></span> <br/><br/>
            </div>
          </div>
          
        </div>
        
        
        <div className="pult">
          <span className="dot"></span>
          <div className="block title"></div>
          <div className="block block-navigate">
            
            <button type="button" className="btn top-navigate power-off" id="power-off" onClick={reset} onMouseDown={colorchange}></button>
           
          </div>
          <div className="block block-channel">
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(1)} onMouseDown={colorchange} id="1">1</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(2)} onMouseDown={colorchange} id="2">2</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(3)} onMouseDown={colorchange} id="3">3</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(4)} onMouseDown={colorchange} id="4">4</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(5)} onMouseDown={colorchange} id="5">5</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(6)} onMouseDown={colorchange} id="6">6</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(7)} onMouseDown={colorchange} id="7">7</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(8)} onMouseDown={colorchange} id="8">8</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(9)} onMouseDown={colorchange} id="9">9</button>
            <button type="button" className="btn channel cnl-namber" onClick={()=> display(0)} onMouseDown={colorchange} id="0">0</button>
          
          </div>
          
         
         </div>
        </div>
    

    </div>
  )
}


export default App;
