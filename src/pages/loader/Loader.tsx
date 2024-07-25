import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { LinearProgress } from "@mui/material";
import './Loader.css'
import LoadLogo from '../../assets/icons/LoadLogo.png'
import { HackerEffect } from "../../components/hacker/HackerEffect";
import { Navigation } from "../../components/navigation/Navigation";
import { Home } from "../home/Home";


export const Loader : React.FC = () => {

  const [ welcome, setWelcome ] = useState(0)
  const Navigate = useNavigate();
  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setWelcome(1);
      const welcomeTimeout = setTimeout(() => {
        setWelcome(2);
      }, 2000);
      return () => clearTimeout(welcomeTimeout);
    }, 3000);
    return () => clearTimeout(loadTimeout);
  }, [Navigate]);

  return (
    <div className="LoaderContainer">
      {(welcome === 0)&&(
        <>
        <img src={LoadLogo} alt="Loading Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        <LinearProgress
          sx={{
            width:'60%',
            position: 'fixed',
            alignSelf:'flex-end',
            marginBottom: '20px'
          }}
        />
        </>
      )}
      {(welcome === 1)&&(
        <HackerEffect />
      )}
      {(welcome === 2)&&(
        <section className="Navbar">
          <Navigation />
        </section>
      )}
    </div>
  )
} 