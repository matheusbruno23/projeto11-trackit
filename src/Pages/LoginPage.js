import styled from "styled-components"
import logo from "../assets/logo_trackit.png"
import { Link } from "react-router-dom"
export default function LoginPage(){

    return (
        <Container>
        <ContainerTopo>
            <img src={logo} />
            <p>TrackIt</p>
        </ContainerTopo>
                <Form>
                    <input placeholder="email" type="email" ></input>
                    <input placeholder="senha" type="senha" ></input>
                    <button type="submit">Entrar</button>
                    <Link to="">
                       <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </Form>
        </Container>
    )
}

const Container = styled.div`
width: 375px;
height: 1000px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
`

const ContainerTopo = styled.div`
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

const Form = styled.form`
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
    color: #D4D4D4;
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
