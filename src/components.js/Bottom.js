import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
export default function Bottom(){

    return (
    <Baixo>
        <Link to="/habitos">
            <button>Hábitos</button>
            </Link>
        <Link to="/hoje">

                <BordaAzul>
                    <ContainerProgressBar>
                        <CircularProgressbar
                            value={45}
                            text={`Hoje`}
                            styles={
                                buildStyles({
                                    pathColor: `rgba(255,255,255, 66)`,
                                    textColor: '#fff',
                                    trailColor: '#d6d6d6',
                                    trailColor: '#52B6FF',
                                })}

                        />
                    </ContainerProgressBar>
                </BordaAzul>
        </Link>
        <Link to="/historico">
        <button>Histórico</button>
        </Link>
    </Baixo>
    )
}

const Baixo = styled.div`
background-color: #ffffff;
width: 100%;
height: 100px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-around;
bottom: 0;
left: 0;
font-family: 'Lexend Deca', sans-serif;

button{
    margin-top: 18px;
    color:#52B6FF;
    border: none;
    background-color: #ffffff;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
}
`
const ContainerProgressBar = styled.div`
width: 80px;
border-radius:50px;
background-color: #52B6FF;
`
const BordaAzul = styled.div`
width: 91px;
height: 91px;
background-color: #52B6FF;
border-radius: 100px;
display: flex;
align-items: center;
justify-content: center;
`