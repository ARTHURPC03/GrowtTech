import styled from 'styled-components'

export const Container = styled.div``
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;
  list-style: none;
  width: 100%;
  margin-bottom: 50px;

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

    button {
      text-align: center;
    }

    p {
      line-height: 21px;
      font-size: 16px;
    }
  }
`
