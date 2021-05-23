import styled from 'styled-components'

export const Form = styled.form`
    position: relative;
    min-height: 390px;
    width: 400px;
    margin: 10rem auto 3rem auto;
    background-color: ${({ lightTheme }) => lightTheme ? '#32343f' : '#4e5163'};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    transition: background-color .3s linear; 
    
    @media(max-width: 500px){
        width: 300px;
    }
`

export const Title = styled.h1`
    color: white;
    margin: .5rem 0;
`