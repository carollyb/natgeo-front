import { useState, useEffect } from "react";
import GlobalContext from "./Context";
import axios from 'axios';
import useIssueStore from "../domain/shared/stores/useIssueStore";

function GlobalProvider({children}: any) {

  const url = 'http://localhost:3002'

  interface IIssues {
    id?: string;
    number: number;
    date: Date;
    cover: string;
    file: string;
    language: string;
    topics: string
  }

  const [ issues, setIssues ] = useState<IIssues[] | undefined>([]);
  
  const context = {
    url,
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