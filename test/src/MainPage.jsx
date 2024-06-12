import React from "react"
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: lem;
    background: grey;
    `
const Title = styled.h1`
font-size: 1.5em;
color: white;
text-align: center;
`

const Button = styled.button`
    color: ${props => props.dark ? 'white' : 'dark'};
    background: ${props => props.dark ? 'black' : 'white'};
    border: 1px solid black;
`
const RoundedButton = styled(Button)`
    border-radius: 16px;
`
const Block = styled.div`
    padding: ${(props) =>props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`
const BlockItem = [
    {
        label: '1',
        padding: '1rem',
        backgroundColor: 'red'
    },
    {
        label: '2',
        padding: '1rem',
        backgroundColor: 'blue'
    },
    {
        label: '3',
        padding: '1rem',
        backgroundColor: 'green'
    }
]
export default function MainPage(){
    return(
        <Wrapper>
            <Title>
                안녕, 리액트!
            </Title>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <RoundedButton>Rounded</RoundedButton>
            <br/><br/>
            {BlockItem.map((BlockItem) =>{
                return(
                    <Block 
                        padding = {BlockItem.padding}
                        backgroundColor = {BlockItem.backgroundColor}
                    >
                        {BlockItem.label}
                    </Block>
                )
            })}
        </Wrapper>
    )
}