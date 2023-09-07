import { useEffect, useState } from "react";
import ZillowChart from "./components/ZillowChart";
import {getCommits} from './utils/getCommits'



export default function App() {

  const [commits, setCommits] = useState({})

 

  useEffect(() => {
    getCommits().then(setCommits)
  }, [])



  return (
    <>
      <ZillowChart commits={commits}/>
    </>
  );
}



