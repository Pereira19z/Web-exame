import styled from "styled-components";
export const lightTheme = {
    corFundo: '#9198ff',
    corTexto: '#000000',
    corTitulo: '#000000'
}

export const darkTheme = {
    corFundo: '#ff0000',
    corTexto: 'white',
    corTitulo: '#fff200'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`
// Criando um botão
export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #0026ff;
    color: white;
    margin: 10px;
`
// Criando um título
export const TitlePage = styled.h1`
    color: #000000;
    font-size: 20px;
`
export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`
// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
    `