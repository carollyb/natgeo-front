import { useState, useEffect } from "react";
import GlobalContext from "./Context";
import axios from 'axios';

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
  const [ mouseOver, setMouseOver ] = useState(false)

  const getData = async (url: string) => {
    try {
        const response = await axios.get(`${url}/issues`);
        const results = response.data;
        setIssues(results)
        console.log(issues);
    } catch (error: Error | any) {
        console.log(`${error.message}`);
    }
  }
  
  useEffect(() => {
    getData(url)
  }, [])
  
  const context = {
    url,
    issues, 
    setIssues,
    mouseOver,
    setMouseOver
  }
  return (
    <GlobalContext.Provider value={context} >
        {children}
    </GlobalContext.Provider>)
  ;
}

export default GlobalProvider;