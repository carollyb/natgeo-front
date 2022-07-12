import { useState, useEffect } from "react";
import GlobalContext from "./Context";
import axios from 'axios';

function GlobalProvider({children}: any) {
  const [ issues, setIssues ] = useState([]);
  const context = {
    issues, 
    setIssues
  }
  return (
    <GlobalContext.Provider value={context} >
        {children}
    </GlobalContext.Provider>)
  ;
}

export default GlobalProvider;