/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'


const dynamicStyle = props =>
  css`
  color: ${props.color};
`
const Container = styled.div`
${dynamicStyle};`

const Button = styled.button
  `color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};`

const Container2 = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)


export default function EmotionExample() {


  return (

    <>
      <Container color="lightgreen">
        This is lightgreen.
      </Container>
      <Container2 column>
        <Button>This is a regular button.</Button>
        <Button primary>This is a primary button.</Button>
      </Container2>
      <H1 color="lightgreen">This is lightgreen.</H1>
      <Button
        as="a"
        href="https://github.com/emotion-js/emotion"
      >
        Emotion on GitHub
      </Button>
    </>)
}
