import Top from "../components.js/Top"
import Bottom from "../components.js/Bottom"
import axios from "axios"
import { useEffect , useContext} from "react"
import { UserContext } from "../contexts/UserContext"

export default function HojePage(){
  const {user} = useContext(UserContext)

  useEffect(()=> {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const config = {
      headers:  {Authorization: `Bearer ${user.token}`}
    }
    const promise = axios.get(url , config)
    promise.then(res => console.log(user, res.data))
    promise.catch(err => console.log(err.response.data))
  } , [])

  return (
    <>
      <Top imagem={user.image}></Top>
      <Bottom></Bottom>
    </>
  )
}