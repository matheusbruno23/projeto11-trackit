import styled from "styled-components"
export default function Top({imagem}){

    return (
    <Topo>
        <h1>TrackIt</h1>
        <img src={imagem}/>
    </Topo>
    )
}

const Topo = styled.div`
width: 100%;
height: 70px;
background-color: #126BA5;
font-size:39px;
color: #FFFFFF;
font-family: 'Playball';
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 18px 0px 18px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

img{
    width: 51px;
    height: 51px;
    border-radius: 99px;
}
`