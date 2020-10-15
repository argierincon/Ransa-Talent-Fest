import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BarOpData } from './BarOpData';
import './BarOp.scss';
import { IconContext } from 'react-icons';
import logo from '../../assets/img/LOGO_RANSA.png';
import user from '../../assets/img/Moises.png';

function BarOp() {
 
  const handleClick = (index) => {
    const currentClass = document.getElementsByClassName("nav-text");
    for (let i = 0; i < currentClass.length; i++) {
      currentClass[i].classList.remove("nav-text-active")
   
  }
     for (let i = 0; i < currentClass.length; i++) {
       console.log(i,index);
  
      if(i==index){
        if(index==1){}
        else if(index==0){ currentClass[0].classList.toggle("nav-text-active");}
        else if(index==2){ currentClass[1].classList.toggle("nav-text-active");}
        else if(index==3){ currentClass[2].classList.toggle("nav-text-active");}
        else if(index==4){ currentClass[3].classList.toggle("nav-text-active");}
        else if(index==5){ currentClass[4].classList.toggle("nav-text-active");}
        else if(index==6){}
         else if(index==7){ currentClass[8].classList.toggle("nav-text-active");}
         else if(index==8){ currentClass[9].classList.toggle("nav-text-active");}
         else if(index==9){ currentClass[10].classList.toggle("nav-text-active");}
        else{}        // else{ currentClass[i].classList.toggle("nav-text-active");}
                ////currentClass[i].classList.remove("nav-text");
        
      }
     
     }
    
     document.getElementById('app').className = 'active';
  };
 
  const [LadoBarra, setSidebar] = useState(true);

  const ViewSideBar = () => setSidebar(true);



  return (
    <>
      <IconContext.Provider value={{ color: '#1AAF42' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
        
          </Link>


          <nav className={LadoBarra ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={ViewSideBar}>
              <li className="navbar-toggle">
              <div className="contenedorLogo">
              <Link to="/" className=""><img className="logo" src={logo} alt="Logo Ransa" /></Link>
            </div>
              </li>
              {BarOpData.map((item, index) => (
                <li id={index+"val"} onClick={()=>handleClick(index)}   key={index} className={item.clase}>
                  <Link  onClick={()=>handleClick(index)} to={item.ruta}>
                  {item.icono} 
                    <span>{item.titulo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}
export default BarOp;
