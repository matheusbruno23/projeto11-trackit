import Top from "../components.js/Top"
import Bottom from "../components.js/Bottom"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"
export default function HabitosPage(){
    const {user} = useContext(UserContext)
    
//verificar se ja foi clicado

    const [foiClicado, setFoiClicado] =useState(0) 

    //verifica se já criou algum habito
    const [habitosCriados, setHabitosCriados] = useState(false)
    //lista de habitos criados
    const [habito , setHabito] = useState([])
    const [diaClicado, setDiaClicado] =useState([])
    const listaDiasClicados = []
    //dias da semana
    const semana = ['D','S','T','Q','Q','S','S']

    function criarHabito(){
        setHabitosCriados(true)
        console.log('clicou')
    }

    function selecionarDia(i){
        if(i === foiClicado){
            console.log('ja foi clicado')
        }
        listaDiasClicados.push(i)
        setFoiClicado(i)
        setDiaClicado(listaDiasClicados)
        console.log(listaDiasClicados)
    }    
    
    function cancelar(){
        setHabitosCriados(false)
    }

    function salvar(e){
        e.preventDefault()

    }

    useEffect(()=> {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers:  {Authorization: `Bearer ${user.token}`}
          }

        const promise = axios.get( url , config)
        promise.then((res)=> {
            console.log(res)
        })
        promise.catch((err)=> {
            console.log(err.response.data)
        })




    }, [])

    return (
        <>
            <Top imagem={user.image}></Top>
            <Container>
            <Header>
                <p>Meus habitos</p>
                <button onClick={criarHabito}>+</button>
            </Header>
            <DisplayCriarHabito>
                
            {(!habitosCriados) ?
             <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
                <>
                <ContainerCriarHabitos>
                <Form onSubmit={salvar}>
                <input type="text" placeholder="nome do hábito" required></input>
                <ContainerButtonsSemana>
                    {semana.map((dia, i) => (
                        <ButtonDiaSemana  key={i} 
                            onClick={() => selecionarDia(i+1)}
                            clicado={foiClicado === i+1}
                            >
                            {dia}
                        </ButtonDiaSemana>
                    ))}
                </ContainerButtonsSemana>
                <ContainerButtonsSalvar>
                    <ButtonCancelar onClick={cancelar}>Cancelar</ButtonCancelar>
                    <ButtonSalvar onClick={salvar}>Salvar</ButtonSalvar>
                </ContainerButtonsSalvar>
                </Form>
                </ContainerCriarHabitos>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </> }
            </DisplayCriarHabito>
            </Container>
            <Bottom></Bottom>
        </>

    )
}

const Header = styled.div`
margin-top: 85px;
width: 100%;
height: 55px;
color: #126BA5;
font-size: 23px;
font-family: 'Lexend Deca', sans-serif;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 18px 0px 18px;
button{
    background-color: #52B6FF;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 35px;
    font-size: 26px;
    font-family: 'Lexend Deca', sans-serif;
}
`

const DisplayCriarHabito = styled.div`
display: block;
width: 100%;
height: 100px;
margin-top: 30px;
color: #666666;
font-size: 18px;
font-family: 'Lexend Deca', sans-serif;
padding: 20px;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

const ContainerCriarHabitos = styled.div`
width: 100%;
height: 180px;
margin-bottom: 29px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
input{
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    box-sizing: border-box;
    color: #666666;
    font-size: 20px;
    font-family: 'Lexend Deca', sans-serif;
}
input::placeholder{
    font-size: 20px;
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
    padding: 10px;
}
`

const ContainerButtonsSemana = styled.div`
display: flex;
width: 300px;
height: 30px;
margin-top: 8px;

`
const ButtonDiaSemana = styled.button`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    font-size: 20px;
    color: ${props => props.clicado ? "red" : "#DBDBDB"};
    font-family: 'Lexend Deca', sans-serif;
`

const ContainerButtonsSalvar = styled.div`
width: 180px;
height: 35px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 29px;
margin-left: 120px;
`

const ButtonCancelar = styled.button`
width: 84px;
height: 35px; 
background-color: #ffffff;
border: none;
font-family: 'Lexend Deca', sans-serif;
font-size: 16px;
color: #52B6FF;
`

const ButtonSalvar = styled.button`
width: 84px;
height: 35px; 
background-color: #52B6FF;
border: none;
border-radius: 5px;
font-family: 'Lexend Deca', sans-serif;
font-size: 16px;
color: #ffffff;
`