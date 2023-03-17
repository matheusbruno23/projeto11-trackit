import Top from "../components.js/Top"
import Bottom from "../components.js/Bottom"
import axios from "axios"
import { useEffect } from "react"

export default function HojePage(){

  useEffect(()=> {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const config = {
      headers:  {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODIxNiwiaWF0IjoxNjc5MDA5MjgzfQ.QhGg0_XXq7Gf9n0OziIn31jYEmz-oLa6bfTfV02yaMQ`}
    }
    const promise = axios.get(url , config)
    promise.then(res => console.log(res.data))
    promise.catch(err => console.log(err.response.data))
  } , [])

  return (
    <>
      <Top></Top>
      <Bottom></Bottom>
    </>
  )
}