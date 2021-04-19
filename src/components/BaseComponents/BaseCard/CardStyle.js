import styled from 'styled-components'

export const Card = styled.article`
    background-color: ${({ lightTheme }) => lightTheme ? '#333' : '#DDD'};
    color: ${({ lightTheme }) => lightTheme ? '#DDD' : '#333'};
    position: relative;
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 350px;
    -webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
    transition: all .3s linear;
`