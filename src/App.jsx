import { useState } from 'react'
import './App.css'
import ZillowChart from './components/ZillowChart'
import { useEffect } from 'react'

function App() {

  const [commits, setCommits] = useState([])


  const getCommits = async () => {
    try {
      const data = await(await fetch('https://tinyurl.com/37wzwx5v')).json()
      setCommits(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getCommits()
  }, [])
  

  //console.log(commits)

  return (
    <>
      <ZillowChart commits={commits}/>
    </>
  )
}

export default App
