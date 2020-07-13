import styled from 'styled-components'
import { Form as FormWeb } from '@unform/web'

export const Container = styled.div`
  height: 93vh;

  transition: all 1s;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 25px 0px;
  }
`

export const Form = styled(FormWeb)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px;

  width: 100%;

  div {
    width: 100%;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    height: 50px;

    @media (max-width: 530px) {
      display: flex;
      flex-direction: column;
    }

    span {
      width: 100%;
      display: flex;

      margin-top: 8px;

      a {
        button {
          background: #fe9908;
        }
      }
    }

    button {
      margin: 0;
      width: 100%;
    }

    a {
      width: 100%;
    }
  }
`
export const HeaderBottom = styled.div`
  width: 25%;
  height: 60px;
  margin-bottom: 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 530px) {
    margin-top: 50px;
  }
`

export const HighlightsArea = styled.div`
  background: rgb(3, 125, 235);
  background: linear-gradient(
    0deg,
    rgba(3, 125, 235, 1) 0%,
    rgba(109, 183, 255, 0.26404065043986347) 85%
  );

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 80%;

  margin-bottom: 25px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const HighlightContent = styled.div`
  width: 30%;

  border-radius: 5px;
  border: solid 2px #4d7eff;

  margin: 0px 5px;
`

export const ImageHighlights = styled.img`
  width: 100%;
  height: 50%;

  border-radius: 5px;

  color: #fff;
`

export const DetailsOfHightlights = styled.div`
  width: 100%;
  height: 100%;

  background: white;

  border-radius: 5px;

  color: #000;

  padding: 5px;
  overflow: hidden;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 0px 4px;
  }
`

export const HotelsArea = styled.div`
  width: 90%;
  height: 250px;

  margin: 80px 0px;

  background: black;
`

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  list-style: none;
  width: 80%;
  margin-bottom: 150px;

  li {
    background: ${props => props.theme.colors.li};

    padding: 20px;
    border-radius: 8px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.2s ease 0s;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(11, 10, 13);
    border-image: initial;

    &:hover {
      border-width: 2px;
      border-style: solid;
      border-color: #e02041;
      border-image: initial;
    }

    img {
      width: 100%;
      height: 50%;
    }

    strong {
      display: block;
      margin-bottom: 16px;
      transition: color 1s ease 0s, transform 1s ease 0s;
      color: ${props => props.theme.colors.text};
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      line-height: 21px;
      font-size: 16px;
    }
  }
`
export const ButtonContainer = styled.div`
  flex: 1;
  height: 100%;

  align-items: center;
`

export const InfoContainer = styled.div`
  flex: 1;
`
