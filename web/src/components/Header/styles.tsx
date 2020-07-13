import styled from 'styled-components'

export const Container = styled.div`
  height: 7vh;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
