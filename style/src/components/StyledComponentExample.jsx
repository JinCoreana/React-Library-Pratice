import React from 'react'
import styled from 'styled-components'

   // Create a Title component that'll render an <h1> tag with some styles
   const Title = styled.h1
   `
   font-size: 1.5em;
   text-align: center;
   color: palevioletred;`;

   // Create a Wrapper component that'll render a <section> tag with some styles
   const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

   const Button = styled.button`
 color: palevioletred;
 font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid palevioletred;
 border-radius: 3px;
`;

   // A new component based on Button, but with some override styles
   const TomatoButton = styled(Button)`
 color: tomato;
 border-color: tomato;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />


   // Use Title and Wrapper like any other React component – except they're styled!


export default function StyledComponentExample() {

 
    return (
        <Wrapper>
            <Title>
                Hello World!
            </Title>
            <div>
                <Button>Normal Button</Button>
                <Button as="a" href="#">Link with Button styles</Button>
                <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
                <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
                </div>
        </Wrapper>
    );
}
