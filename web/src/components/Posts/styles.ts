import styled from 'styled-components'

export const Container = styled.div``

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  list-style: none;
  width: 80%;
  margin: 25px 0px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
    width: 80%;
    margin-bottom: 25px;
  }

  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
    list-style: none;
    width: 80%;
    margin-bottom: 25px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  li {
    background: ${props => props.theme.colors.li};

    padding: 10px;
    border-radius: 8px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.2s ease 0s;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(11, 10, 13);
    border-image: initial;
    cursor: pointer;

    &:hover {
      border-width: 2px;
      border-style: solid;
      border-color: #e02041;
      border-image: initial;
    }

    img {
      width: 100%;
      height: 200px;
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

export const ImageHighlights = styled.img`
  width: 100%;
  height: 50%;

  border-radius: 5px;

  color: #fff;
`
