import styled from 'styled-components'

export const StyledArticle = styled.article`
    background-image: url(${ props => props.thumbnailImg });
    background-repeat: no-repeat;
    background-size: cover;
    width: 450px;
    height: 280px;
`

export const Title = styled.h1`
    position: absolute;
    text-align: justify;
    right: 5px;
    bottom: 5px;
    padding: .5rem;
    margin: .5rem 0;
    font-size: 2rem;
    color: white;
`

export const Overlay = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    transition: background-color .3s linear;

    &:hover{
        background-color: rgba(40, 40, 41, .7);
    }
`
