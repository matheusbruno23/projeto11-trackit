import styled from "styled-components"
import logo from "../assets/logo_trackit.png"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { UserContext } from "../contexts/UserContext"
import { useContext, useEffect, useState } from "react"

export default function LoginPage(){
    const {user, setUser} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [botaoLogin, setBotaoLogin] = useState("Entrar")
    const [carregando, setCarregando] = useState(false)
    const [desativado,setDesativado] = useState("")
    const navigate = useNavigate()

    function login(e){

        e.preventDefault()
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body ={email: email , password: senha}
        const promise = axios.post(url , body)
        setCarregando(true)
        setDesativado("disabled")
        setBotaoLogin("")

        promise.then(res => {
            navigate("/hoje")
            setCarregando(false)
            setDesativado("")
            setBotaoLogin("Entrar")
            setUser(res.data)
        })
        promise.catch(err => {
            alert(err.response.data.message)
            setCarregando(false)
            setDesativado("")
            setBotaoLogin("Entrar")
        })
        
    }

    return (
        <Container>
        <ContainerTopo>
            <img src={logo} />
            <p>TrackIt</p>
        </ContainerTopo>
                <FormContainer onSubmit={login}>
                    <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={desativado}></input>
                    <input placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required disabled={desativado} ></input>
                    <button type="submit" disabled={desativado}>
                        {botaoLogin}
                    <ThreeDots
                        height="40"
                        width="50"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={carregando}
                    />
                    </button>
                    <Link to="/cadastro">
                       <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </FormContainer>
        </Container>
        
    )
}

export const Container = styled.div`
width: 375px;
height: 1000px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
`

export const ContainerTopo = styled.div`
width: 180px;
height: 180px;
margin-top: 68px;
font-family: 'Playball';
font-weight: 400;
font-size: 69px;
color: #126BA5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
align-self: center;
padding: 15px;
img{
    width: 150px;
    height: 80px;
}
`

const FormContainer = styled.form`
display: flex;
flex-direction:column;
margin-top: 32px;
width: 303px;
background-color: #FFFFFF;
height: 200px;
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
    font-size: 21px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: none;
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

