import styled from 'styled-components'

export const Form = styled.form`
    position: absolute;
    min-height: 390px;
    width: 330px;
    background-color: ${({ lightTheme }) => lightTheme ? '#32343f' : '#4e5163'};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    transition: background-color .3s linear; 

    @media(max-width: 1900px){
        margin: 2rem auto 1rem auto;
        position: relative;
        width: 400px;
    }
    
    @media(max-width: 500px){
        width: 300px;
    }
`

export const Title = styled.h1`
    color: white;
    margin: .5rem 0;
`