import styled from 'styled-components'

export const StyledCard = styled.article`
    width: 500px;
    height: 231px;
    display: flex;
    flex-direction: row;
    transition: transform .2s linear;
    position: relative;
    /* &:hover{
        cursor: pointer;
        transform: translateY(-10px);
    } */
`
// Image

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`

export const ImgContainer = styled.aside`
    width: 60%;
`

// Title

export const TitleContainer = styled.section`
    width: 40%;
    padding-left: .7rem;
`

export const Title = styled.h1`
    font-size: 1.7rem;
    margin: .5rem 0 .5rem 0;
`

export const SubTitle = styled.h5`
    font-size: 1.1rem;
    margin: 1rem 0 .5rem 0;
`