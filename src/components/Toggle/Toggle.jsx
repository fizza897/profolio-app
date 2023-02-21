import React,{useContext} from 'react'
import DarkMode, { themeContext } from '../../DarkMode'
import "./Toggle.css"
import Moon from "@iconscout/react-unicons/icons/uil-moon";

export default function Toggle() {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;
  const handleClick =()=>{
    theme.dispatch({type:Toggle });
  }
  return (
    <>
    
    
    
    
    </>
  )
}
