import Top from "../components.js/Top"
import Bottom from "../components.js/Bottom"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"
import { useContext } from "react"

export default function HistoricoPage(){
    const {user} = useContext(UserContext)

    return (
        <>
        <Top imagem={user.image}></Top>
        <Bottom></Bottom>
        </>

    )
}