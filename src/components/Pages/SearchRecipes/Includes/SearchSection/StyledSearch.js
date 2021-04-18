import styled from 'styled-components'

export const Form = styled.form`
    position: absolute;
    top: 30%;
    min-height: 390px;
    width: 350px;
    background-color: #32343f;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    @media(max-width: 1647px){
        margin: 2rem auto 1rem auto;
        position: relative;
    }
    
    @media(max-width: 500px){
        width: 300px;
    }
`

export const Title = styled.h1`
    color: white;
    margin: .5rem 0;
`