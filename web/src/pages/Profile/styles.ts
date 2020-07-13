import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 15px;
  }
`

export const DropArea = styled.div`
  width: 75%;
  height: 400px;

  border: solid 2px black;

  margin: 50px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  label {
    margin-bottom: 15px;

    input {
      color: black;
      padding: 10px;

      @media (max-width: 450px) {
        font-size: 14px;
        width: 80%;
      }
    }
  }
`
