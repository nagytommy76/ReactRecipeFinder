import styled from 'styled-components'

export const StyledArticle = styled.article`
    background-image: url(${ props => props.thumbnailImg });
    background-repeat: no-repeat;
    background-size: cover;
    width: 450px;
    height: 280px;

    transition: all .2s linear;
    &:hover{
        transform: translateY(-5px);
        box-shadow: 3px 3px 22px 1px #555;
    }

    @media(max-width: 500px){
        width: 330px;
    }
`

export const Title = styled.h1`
    position: absolute;
    text-align: justify;
    right: 5px;
    bottom: 5px;
    padding: .5rem;
    margin: .5rem 0;
    font-size: 2.5rem;
    color: #FFF;

    @media(max-width: 940px){
        font-size: 2rem;
    }
`

export const Overlay = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    transition: background-color .2s linear;
    background-color: rgba(40, 40, 41, .4);

    &:hover{
        background-color: rgba(40, 40, 41, .8);
    }
`
