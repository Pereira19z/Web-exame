import styled from "styled-components";
export const lightTheme = {
    corFundo: '#D4DCEF',
    corTexto: '#000000',
    corTitulo: '#3EC7ED'
}

export const darkTheme = {
    corFundo: '#2a0a0a',
    corTexto: 'white',
    corTitulo: '#fffdd0'
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
    background-color: #5A71F0;
    color: white;
    margin: 10px;
`
// Criando um título
export const TitlePage = styled.h1`
    color: #E2D7ED;
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