import styled from 'styled-components'

export const Container = styled.button`
  background: #4d7eff;
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 12px;
  transition: background-color 0.2s;
  overflow: hidden;

  -webkit-box-pack: center;
  justify-content: center;
  transition: border 0.2s ease 0s, transform 0.2s ease 0s;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.theme.colors.background};
  border-image: initial;

  &:hover {
    transform: translateY(-7px);
    border-color: ${props => props.theme.colors.text};
  }
`
