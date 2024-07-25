import React ,{ useState } from "react"
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import './Navigation.css'


export const Navigation : React.FC = () => {
    const [ activeIndex, setActiveIndex ] = useState<number>(0);
    const Navigate = useNavigate();
    const navigator = [
        {name:"Home",src:HomeOutlinedIcon},
        {name:"Profile",src:PersonOutlinedIcon},
        {name:"Projects",src:WindowOutlinedIcon},
        {name:"Works",src:WorkspacesOutlinedIcon},
        {name:"Mail-Me",src:EmailOutlinedIcon},
        {name:"Connect",src:TextsmsOutlinedIcon}
    ];
    const handleClick = ( navpath: string, index: number) =>{
      setActiveIndex(index)
      Navigate(`/${navpath}`)
    }
  return (
    <div className="Navbarcontainer">
      <ul>
        {navigator.map((icon, index)=>(
          <li key={index} className={`list ${activeIndex === index && "active"}`} onClick={()=>handleClick(icon.name.toLowerCase(),index)}>
            <a>
              <span className="navtext">{icon.name}</span>
              <span className="navicon">{React.createElement(icon.src)}</span>
            </a>
          </li>
        ))}
        <div className="Indicator"></div>
      </ul>
    </div>
  )
}
