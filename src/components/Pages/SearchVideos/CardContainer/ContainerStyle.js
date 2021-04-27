import styled from 'styled-components'

export const CardContainer = styled.section`
    margin-bottom: 2rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 450px);
    justify-content: center;

    @media(max-width: 1415px){
        grid-template-columns: repeat(2, 450px);
    }
    @media(max-width: 940px){
        grid-template-columns: repeat(1, 450px);
    }
    @media(max-width: 500px){
        grid-template-columns: repeat(1, 330px);
    }
`