import { useState, useEffect } from "react";
import GlobalContext from "./Context";
import axios from 'axios';
import useIssueStore from "../domain/shared/stores/useIssueStore";
import { BASE_URL } from "../consts";

function GlobalProvider({children}: any) {

  const url = BASE_URL

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
  }
  return (
    <GlobalContext.Provider value={context} >
        {children}
    </GlobalContext.Provider>)
  ;
}

export default GlobalProvider;