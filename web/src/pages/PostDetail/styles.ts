import styled from 'styled-components'

export const Container = styled.div`
  height: 93vh;

  transition: all 1s;

  display: flex;
  align-items: center;

  flex-direction: column;

  span {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    a {
      width: 30%;
      margin: 10px 15px;
    }
  }
`

export const DetailBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`
export const ColumnLeft = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  padding: 50px;

  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
  }

  span {
    margin-top: 50px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    a {
      width: 100%;

      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      width: 80%;
      margin: 10px;
    }
  }
`

export const ImageHotel = styled.img`
  width: 80%;
  height: 50%;

  border-radius: 5px;
  border: solid 1px black;

  background: white;
`

export const ColumnRight = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px;

  border-radius: 5px;

  div {
    height: 90%;
    width: 90%;

    display: flex;
    flex-direction: column;

    p {
      margin: 10px;
      font-size: 25px;
    }
  }
`
