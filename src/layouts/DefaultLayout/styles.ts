import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
