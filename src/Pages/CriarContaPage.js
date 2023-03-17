import styled from "styled-components"
import { ContainerTopo } from "./LoginPage"
import logo from "../assets/logo_trackit.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function CriarContaPage(){
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [imagemPerfil, setImagemPerfil] = useState("")
    const [desativado,setDesativado] = useState("")
    const navigate = useNavigate()

    function criarNovaConta(e){
    e.preventDefault()
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const body = {
        email: email,
        name: nome,
        image: imagemPerfil,
        password: senha
    }
    console.log(body)
    const promise = axios.post(URL , body)
    promise.then(res => {
        navigate("/")
        setDesativado("")
     })
    promise.catch(err => alert(err.response.data.message))
    setDesativado("disabled")
    
    }

    return (
    <ContainerCreate >
        <ContainerTopo>
            <img src={logo} />
            <p>TrackIt</p>
        </ContainerTopo>
            <FormContainer onSubmit={criarNovaConta}>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required></input>
                <input placeholder="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} required></input>
                <input placeholder="foto" type="url" value={imagemPerfil} onChange={e => setImagemPerfil(e.target.value)} required></input>
                <button type="submit">Cadastrar</button>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </FormContainer>
    </ContainerCreate>
    )
}


const ContainerCreate = styled.div`
width: 375px;
height: 1000px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
`

const FormContainer = styled.form`
display: flex;
flex-direction:column;
margin-top: 32px;
width: 303px;
background-color: #FFFFFF;
height: 250px;
color: #D4D4D4;

input{
    width: 297px;
    height: 41px;
    margin-bottom: 6px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: grey;
}
input::placeholder{
    color: #D4D4D4;
    
}
button{
    width: 303px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-weight: 400;
    box-sizing: border-box;
}
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 2px solid grey;
    outline: 0;
} 
p{
    width: 303px;
    margin-top: 25px;
    text-align: center;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline  #52B6FF ;
}
`