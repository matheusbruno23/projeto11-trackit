import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar } from 'react-circular-progressbar';
export default function Bottom(){

    return (
    <Baixo>
        <Link to="/habitos">habitos</Link>
        <Link to="/hoje">hoje</Link>
        <Link to="/historico">historico</Link>
    </Baixo>
    )
}

const Baixo = styled.div`
width: 100%;
height: 100px;
position: fixed;
bottom: 0;
left: 0;
`